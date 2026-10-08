/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{vue,ts,js}", "./src/uni_modules/**/*.vue"],
	// uni-app 自带基础样式，Tailwind 的 preflight 会重置 view/button 等，故关闭
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			// ===== 字体 =====
			fontFamily: {
				sans: ['Arial', '"Microsoft Yahei"', '"微软雅黑"', 'sans-serif'],
			},

			// ===== 间距刻度（rpx 原生，1px≈2rpx）=====
			// 覆盖默认 rem 刻度，使 p-/m-/gap-/w-/h- 等统一为 rpx，与小程序/uni-app 设计语言一致
			spacing: {
				0: '0rpx',
				px: '1rpx',
				0.5: '4rpx',
				1: '8rpx',
				1.5: '12rpx',
				2: '16rpx',
				2.5: '20rpx',
				3: '24rpx',
				3.5: '28rpx',
				4: '32rpx',
				5: '40rpx',
				6: '48rpx',
				7: '56rpx',
				8: '64rpx',
				9: '72rpx',
				10: '80rpx',
				11: '88rpx',
				12: '96rpx',
				14: '112rpx',
				16: '128rpx',
				18: '144rpx',
				20: '160rpx',
				24: '192rpx',
				28: '224rpx',
				32: '256rpx',
				36: '288rpx',
				40: '320rpx',
				48: '384rpx',
				56: '448rpx',
				64: '512rpx',
			},

			// ===== 字号刻度（rpx）[size, lineHeight] =====
			fontSize: {
				xs: ['22rpx', '30rpx'],
				sm: ['24rpx', '34rpx'],
				base: ['28rpx', '40rpx'],
				md: ['30rpx', '42rpx'],
				lg: ['32rpx', '44rpx'],
				xl: ['36rpx', '48rpx'],
				'2xl': ['40rpx', '54rpx'],
				'3xl': ['48rpx', '62rpx'],
				'4xl': ['60rpx', '74rpx'],
				'5xl': ['72rpx', '88rpx'],
			},

			// ===== 圆角刻度（rpx）=====
			borderRadius: {
				sm: '12rpx',
				DEFAULT: '16rpx',
				md: '20rpx',
				lg: '24rpx',
				xl: '32rpx',
				'2xl': '40rpx',
				'3xl': '48rpx',
				full: '999rpx',
			},

			// ===== 语义化色板 =====
			colors: {
				// 文字层级
				ink: {
					DEFAULT: '#1f2329',
					2: '#4e5969',
					3: '#86909c',
					4: '#c9cdd4',
					5: '#e5e6eb',
				},
				// 描边 / 分割线
				line: {
					DEFAULT: '#eceef1',
					2: '#f2f3f5',
				},
				// 语义色
				success: '#00b42a',
				warning: '#ff7d00',
				error: '#f53f3f',
				info: '#165dff',
				// 表面 / 背景
				surface: '#ffffff',
				bg: '#f6f7f9',
			},

			// ===== 阴影（rpx）=====
			boxShadow: {
				card: '0 12rpx 40rpx -16rpx rgba(31,35,41,0.12)',
				'card-lg': '0 24rpx 64rpx -24rpx rgba(31,35,41,0.18)',
			},
		},
	},
};