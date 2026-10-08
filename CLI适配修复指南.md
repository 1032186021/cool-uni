# cool-uni 8.x → uni CLI 适配修复指南

> 本文档沉淀「把 cool-uni 8.x 从 HBuilderX 脚手架改造为可用 uni CLI（vite-plugin-uni）开箱运行」所做的**全部**修复。
> **本仓库已内置下列所有修复**——clone 后 `pnpm install && npm run dev` 即可启动，无需手动改造。
> 本文档用于：① 回顾每项修复的根因；② 未来版本升级 / 新建同类工程时照此执行；③ 排查同类症状。

---

## 0. 一句话背景

`cool-uni` 8.x 官方仓库是**给 HBuilderX 用的脚手架**，不是给 CLI 直接跑的：

- 原 `package.json` **没有 `scripts`**、没有 `@dcloudio/*` 编译器全家桶（注释写"此依赖不能安装"，由 HBuilderX 内置提供）。
- `manifest.json` / `pages.json` / `index.html` 全在**仓库根目录**（HBuilderX 根布局）。

而 `uni` CLI（`@dcloudio/vite-plugin-uni`）约定输入目录是 `src/`，且必须自带编译器。
所以"跑起来麻烦"是**用 CLI 接管 HBuilderX 工程**的必然改造代价，不是仓库坏了。
**业务源码 0 改动**，改造集中在：目录平移 + 补齐编译器 + vite 兼容补丁 + 少量路径适配。

---

## 1. 前置环境

| 项 | 值 |
|---|---|
| Node | ≥ 18（实测 22 / 24 可用） |
| 包管理 | **pnpm 12.x**（registry = npmmirror）；npm 也能用但需 `--foreground-scripts` 放行原生脚本 |
| `@dcloudio/*` 统一版本 | **`3.0.0-5020620260917001`**（2026 Vue3 线，务必全家桶同版本，勿混 2.x） |
| Vue | `3.4.21`（与 `@dcloudio` 2026 线配套；用 ^3.5.x 可能触发未知兼容问题） |

---

## 2. 完整修复清单（按踩坑顺序）

### ① 目录平移：根布局 → `src/` 布局

**症状**：`Error: ENOENT ... src/manifest.json`；CLI 完全找不到入口。
**根因**：CLI 读 `src/manifest.json`，8.x 是根布局。
**修复**：把根目录那一整套搬进 `src/`：

```
main.ts  App.vue  manifest.json  pages.json  uni.scss
config/  cool/  pages/  router/  hooks/  locale/  components/
static/  types/  build/  doc/  service/  uni_modules/
```

> 内部相对 `import` 平移后依旧有效，无需改。**`uni_modules` 必须一起搬进 `src/`**（见 ③）。

根目录只保留：`package.json` / `pnpm-workspace.yaml` / `.npmrc` / `tsconfig.json` / `vite.config.ts` / `index.html` / `.legacy/` / `.workbuddy/`。

---

### ② 补齐 CLI 编译器依赖 + `uni` bin

**症状**：`uni: command not found`；或报缺 `uni.plugin.js`。
**根因**：`uni` bin 由 `@dcloudio/vite-plugin-uni` 提供，必须是**直接依赖**才会链进 `.bin`；
`@dcloudio/uni-components` 也必须直接依赖（`uni-cli-shared` 用 `resolve.sync` 从 `src/` 往上找它）。

**修复**（`package.json`，版本锁 `3.0.0-5020620260917001`）：

```jsonc
"dependencies": {
  "@dcloudio/uni-app":        "3.0.0-5020620260917001",
  "@dcloudio/uni-app-plus":   "3.0.0-5020620260917001",
  "@dcloudio/uni-components": "3.0.0-5020620260917001", // 必须直接依赖
  "@dcloudio/uni-h5":         "3.0.0-5020620260917001",
  "@dcloudio/uni-mp-weixin":  "3.0.0-5020620260917001"
},
"devDependencies": {
  "@dcloudio/vite-plugin-uni": "3.0.0-5020620260917001", // 提供 uni bin
  "sass": "^1.105.1"                                     // 缺它报 "Preprocessor dependency sass not found"
}
```

---

### ③ ⭐ `uni_modules` 必须放在 `src/uni_modules/`（页面全乱的元凶）

**症状**：页面**全是乱的**，`cl-*` 组件（cool-ui）一个都不渲染，只剩文字、无样式。
**根因**：easycom 自动扫描只认 `${UNI_INPUT_DIR}/uni_modules`（= `src/uni_modules`）。
放在**项目根目录**时 cool-ui 组件全部扫不到，运行期退化成 `resolveComponent("cl-xxx")`（当未知自定义元素）→ 无样式 → 全乱。
**修复**：
1. `uni_modules/` 整体移入 `src/uni_modules/`。
2. 别名同步改（`vite.config.ts` + `tsconfig.json`）：
   ```ts
   resolve.alias = { "/@": resolve("./src"), "/$": resolve("./src/uni_modules/") }
   // tsconfig paths: "/@/*": ["./src/*"]
   ```
3. `src/cool/bootstrap/modules.ts` 的组件 glob 路径改：
   ```ts
   // 原：/uni_modules/cool-*/config.ts
   import.meta.glob("/src/uni_modules/cool-*/config.ts", ...)
   ```
4. 8.x 原仓库只有 `cool-ui`、`mp-html`。若早期误带入 **旧版 `cl-uni` 1.8.5**，必须移出
   （本项目在 `.legacy/cl-uni-1.8.5`）——它与 cool-ui 有 **66 个同名 `cl-*`**，会触发 easycom
   冲突并**遮蔽新库**，导致组件行为/样式错乱。

---

### ④ vite 兼容补丁：`uni-app.es.js` 坏导入（dev 卡 "Compiling..."）

**症状**：dev 启动永远停在 `Compiling...`，不报错但不出页面。
**根因**：`@dcloudio/uni-app/dist/uni-app.es.js` 从 `vue` 导入 `isInSSRComponentSetup` / `injectHook`，
但这两个符号**从未在 `vue` 包导出**（仅 `@vue/runtime-core` 内部使用）。两条链路都要拦：
- **构建（Rollup transform）**：`transform` 插件；
- **运行（vite optimizeDeps 用 esbuild 预打包）**：自定义 transform 插件不生效，须在 `esbuildOptions.plugins` 里 `onLoad` 拦截。

**修复**（`vite.config.ts`，已有完整注释版，见文件 18–103 行）：

```ts
const UNI_APP_VUE_SHIM = `
const isInSSRComponentSetup = false;
function injectHook(type, hook, target = getCurrentInstance()) {
  if (target) { const hooks = (target[type] = target[type] || []); hooks.push(hook); }
}
`;
// transform 钩子 + optimizeDeps.esbuildOptions.plugins 的 onLoad，双链路改写坏导入
```

---

### ⑤ 平台切换：不能用 `vite -m mp-weixin`

**症状**：`vite build -m mp-weixin` 产物**错进 `dist/`（h5）**，小程序目录空。
**根因**：`uni()` 插件取 `process.env.UNI_PLATFORM || 'h5'`；`-m` 只设 vite mode，**不设该变量** → 回落 h5。
**修复**（`package.json` scripts）：

```jsonc
"dev:h5": "vite",
"build:h5": "vite build",
"dev:mp": "uni -p mp-weixin",              // 用 uni CLI，不用 vite
"build:mp": "uni build -p mp-weixin",
"dev:app": "uni -p app",
"build:app": "uni build -p app"
```

产物路径：小程序 → `dist/build/mp-weixin`；H5 → `dist/build/h5`。

---

### ⑥ pnpm 12 原生构建脚本白名单

**症状**：esbuild / vue-demi 等 postinstall 被 pnpm 拦下，构建报缺二进制。
**修复**：`pnpm-workspace.yaml`

```yaml
allowBuilds:
  esbuild: true
  "@parcel/watcher": true
  vue-demi: true
  core-js: true
  core-js-pure: true
```

首次安装兜底：`pnpm install --allow-build esbuild --allow-build @parcel/watcher --allow-build vue-demi ...`

---

### ⑦ demo 页静态资源：JS `import` 不能用根绝对路径

**症状**：`pages/demo` 一加回 `pages.json` 就断构建：
```
[vite]: Rollup failed to resolve import "/pages/demo/static/bg1.png"
from ".../src/pages/demo/basic/image.vue?vue&type=script&setup=true"
```
**根因**：模板里 `src="/pages/demo/static/..."` 是**字符串 prop**，由 uni 运行时按「输入目录 `src/` 相对根」解析，**没问题**；
但 `<script setup>` 里的 `import Bg from "/pages/demo/static/bg1.png"` 是 **Vite 模块导入**，Vite 把前导 `/`
当文件系统绝对路径 → 解析失败。

**修复**（`src/pages/demo/basic/image.vue`，唯一两处）改成相对路径：

```ts
// import Bg from "/pages/demo/static/bg1.png";
import Bg from "../static/bg1.png";
import Avatar from "../static/avatar1.png";
```

> 规律：demo 页都在 `pages/demo/<group>/<name>.vue`，图片在 `pages/demo/static/`，故一律 `../static/xxx.png`。
> 其余 `url:"/pages/demo/static/..."`、`` `/pages/demo/static/avatar${i}.png` `` 都是运行时字符串，**不用改**。

---

### ⑧ EPS / service 自动生成（可选）

`cool({ type:"app", proxy, eps:{enable:true} })`，构建期按 `proxy["/dev/"].target` 拉 EPS 元数据生成
`src/service/*` 与 `src/build/cool/eps.d.ts`。**需后端运行**；后端未起只是无类型提示，**不阻断构建**。

---

## 3. 目录结构约定

```
cool-uni/                        # 仓库根
├─ src/                          # ← uni CLI 输入目录（UNI_INPUT_DIR）
│  ├─ main.ts  App.vue  manifest.json  pages.json  uni.scss
│  ├─ uni_modules/               # ← 必须在此！cool-ui / mp-html
│  ├─ pages/  (index, user, demo)
│  ├─ config/proxy.ts           # 后端联调唯一定义处
│  ├─ cool/  router/  hooks/  locale/  components/  static/  ...
│  └─ build/  doc/  service/
├─ package.json  vite.config.ts  tsconfig.json  index.html
├─ tailwind.config.cjs  postcss.config.cjs
├─ pnpm-workspace.yaml  .npmrc
├─ CLI适配修复指南.md            # 本文档
└─ dist/build/{h5,mp-weixin}/    # 构建产物
```

---

## 4. 常用命令

```bash
pnpm install
pnpm dev:h5      # H5 dev → http://127.0.0.1:9900
pnpm build:h5    # H5 产物 → dist/build/h5
pnpm dev:mp      # 微信小程序 dev（用微信开发者工具导入）
pnpm build:mp    # 小程序产物 → dist/build/mp-weixin
```

---

## 5. 已知坑速查表

| 现象 | 根因 | 一键解决 |
|---|---|---|
| 页面全乱 / 组件无样式 | `uni_modules` 不在 `src/` 下 | 移入 `src/uni_modules`，同步别名 + modules.ts glob（③） |
| 组件行为/样式错乱 | 混入旧 `cl-uni` 1.8.5 与 cool-ui 同名冲突 | 移出到 `.legacy`（③） |
| dev 卡 `Compiling...` | `uni-app.es.js` 坏导入 | vite.config 双链路补丁（④） |
| 平台产物错进 h5 | 用了 `vite -m` | 改 `uni -p <platform>`（⑤） |
| `ENOENT src/manifest.json` | 未平移到 src 布局 | 目录平移（①） |
| `sass not found` | 缺 sass | 装 `sass` devDep（②） |
| `Fatal process out of memory: Zone` | esbuild 内存不足（低内存机器） | 见下 §6 |
| `uni: not found` | vite-plugin-uni 非直接依赖 | 提升为直接依赖（②） |

---

## 6. ⚠️ 环境相关：esbuild 内存溢出（Zone）

低内存机器（如 16GB 且后台常驻进程占 1GB+、空闲仅 1–2GB）上：

- 生产 `build`、以及 `dev` 的 optimizeDeps 预打包都可能报 `Fatal process out of memory: Zone`；
- dev 表现为 esbuild worker 反复重启、永远停在 `Compiling...`。

**缓解**：
1. `export NODE_OPTIONS="--max-old-space-size=7168"`（只帮 Node 堆，不直接解 esbuild zone，但常有帮助）；
2. **关掉占内存的后台进程**（IDE / 微信 / frida 等），保证空闲内存 ≥ 3GB；
3. 别同时挂 dev server + build（互抢内存）；
4. demo 页全开会显著增大依赖图，低内存下优先只开需要的 subPackage 验收。

> 结论：这是**环境内存**问题，**不是代码问题**。腾出内存即可正常构建（本项目在空闲内存充足时 `build:h5` EXIT=0 验证通过）。

---

## 7. 后端联调

- 后端根目录：`D:\aios\midway-aios\server-midway\`（模块文件夹 `aios-taoke`，但 HTTP 路径**无** `aios-`）。
- 请求路径前缀：`admin/taoke/<资源>`；midway 默认端口 `8001`。
- 前端代理唯一定义处：`src/config/proxy.ts`，`/dev/` 的 `target` 默认 `http://127.0.0.1:8001`。
- 跨机联调：项目根建 `.env.local` 写 `VITE_API_HOST=http://<ip>:8001` 覆盖（`vite.config.ts` 里 `loadEnv` 读取，已 gitignore）。
- `cool` 插件的 `reqUrl` 也取该 target，故 EPS 拉取与 dev proxy 一起生效。

---

## 8. 验收清单

- [x] `build:h5` EXIT=0，产物 `dist/build/h5` 含 demo 静态资源（`pages/demo/static/*.png`）。
- [x] `cl-*` 组件**静态编译**进 chunk（产物含 `cl-input` 等），无 `resolveComponent("cl-")` 运行时兜底。
- [x] `pages.json` 含 `pages/user(6)` + `pages/demo(51)`。
- [x] `src/uni_modules/` 下仅 `cool-ui`、`mp-html`；旧 `cl-uni` 在 `.legacy`。