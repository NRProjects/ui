import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// fontFamily: {
			// 	sans: ['var(--font-geist-sans)'],
			// },
		},
	},

	plugins: [],
} as Config;
