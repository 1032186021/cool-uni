import uni from "@dcloudio/vite-plugin-uni";
import path from "path";
import fs from "fs/promises";
import { defineConfig, loadEnv } from "vite";
import { cool } from "@cool-vue/vite-plugin";
import { proxy } from "./src/config/proxy";

function resolve(dir: string) {
	return path.resolve(__dirname, dir);
}

// ---------------------------------------------------------------------------
// 兼容补丁：`@dcloudio/uni-app/dist/uni-app.es.js` 从 `vue` 导入
// `isInSSRComponentSetup` / `injectHook`，但这两个符号从未在 `vue` 包中导出
// （仅 `@vue/runtime-core` 内部使用），任何 Vue 3.x 都解析不到。
//
// 构建（Rollup）与运行模式（vite optimizeDeps 预打包用 esbuild）两条链路都要改，
// 否则运行模式会卡在 "Compiling..."（底层 esbuild 解析不到符号，报错被运行模式吞掉）。
//
// 非 SSR 环境 isInSSRComponentSetup 恒为 false；injectHook 语义是把 hook 挂到当前实例的
// lifecycle 数组上，由 uni-app 运行时自取。这里内联实现，不依赖 /@/ 别名解析，最稳。
// ---------------------------------------------------------------------------
const UNI_APP_VUE_SHIM = `
const isInSSRComponentSetup = false;
function injectHook(type, hook, target = getCurrentInstance()) {
	if (target) {
		const hooks = (target[type] = target[type] || []);
		hooks.push(hook);
	}
}
`;

function rewriteUniAppVueImport(code: string): string | null {
	return code.replace(
		/import\s*\{([^}]*)\}\s*from\s*['"]vue['"]/,
		(_m, names: string) => {
			const kept = names
				.split(",")
				.map((s) => s.trim())
				.filter((n) => n && n !== "isInSSRComponentSetup" && n !== "injectHook");
			return `import { ${kept.join(", ")} } from 'vue';\n${UNI_APP_VUE_SHIM}`;
		}
	);
}

// https://vitejs.dev/config
export default defineConfig(({ mode }) => {
	// 跨机联调：在 `.env.local` 里配置 `VITE_API_HOST`（该文件已 gitignore）。
	// 没配就回落 `src/config/proxy.ts` 里 `/dev/` 的 target（默认 http://127.0.0.1:8001）。
	const env = loadEnv(mode, process.cwd(), "");
	const apiHost = env.VITE_API_HOST || proxy["/dev/"].target;

	// cool 插件的 reqUrl（构建期拉 EPS 用）取自 `proxy["/dev/"].target`，
	// 所以这里换掉 target 后，EPS 拉取与 dev server 代理会一起生效。
	const proxyWithHost = {
		...proxy,
		"/dev/": { ...proxy["/dev/"], target: apiHost },
	};

	return {
		plugins: [
			// 构建链路（Rollup）补丁：拦截 uni-app.es.js 的 transform，改写坏导入。
			{
				name: "patch-uni-app-vue-imports",
				enforce: "pre",
				transform(code: string, id: string) {
					if (id.replace(/\\/g, "/").includes("@dcloudio/uni-app/dist/uni-app.es.js")) {
						return rewriteUniAppVueImport(code);
					}
					return null;
				},
			},
			uni(),
			cool({
				type: "app",
				proxy: proxyWithHost,
				// 生成 EPS 元数据（service.* 类型与调用），需后端运行；后端未起时仅为无类型提示，不阻断构建。
				eps: {
					enable: true,
				},
			}),
		],
		// 运行模式（dev）补丁：optimizeDeps 用 esbuild 预打包，自定义 transform 插件不生效，
		// 所以在 esbuild 里也拦截 uni-app.es.js 做同样的改写。
		optimizeDeps: {
			esbuildOptions: {
				plugins: [
					{
						name: "patch-uni-app-vue-imports-optimize",
						setup(build) {
							build.onLoad(
								{ filter: /[\\/]@dcloudio[\\/]uni-app[\\/]dist[\\/]uni-app\.es\.js$/ },
								async (args) => {
									const contents = await fs.readFile(args.path, "utf8");
									return {
										contents: rewriteUniAppVueImport(contents) ?? contents,
										loader: "js",
									};
								}
							);
						},
					},
				],
			},
		},
		server: {
			port: 9900,
			proxy: proxyWithHost,
			hmr: {
				overlay: true,
			},
		},
		resolve: {
			alias: {
				"/@": resolve("./src"),
				// uni_modules 必须位于 CLI 输入目录（src/）下，easycom 自动扫描只认
				// `${UNI_INPUT_DIR}/uni_modules`，放项目根目录会导致 cl-* 组件全部解析不到（页面全乱）。
				"/$": resolve("./src/uni_modules/"),
			},
		},
	};
});