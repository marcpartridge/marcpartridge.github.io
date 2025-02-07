import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Crimson Pro Variable', ...defaultTheme.fontFamily.serif],
			  },
			colors: {
				aztec: {
					'50': '#f4f9f7',
					'100': '#daede4',
					'200': '#b4dbc8',
					'300': '#87c1a7',
					'400': '#5ea386',
					'500': '#44886c',
					'600': '#356c57',
					'700': '#2d5848',
					'800': '#28473c',
					'900': '#243d34',
					'950': '#0f1f1a',
				}
			}
		},
		plugins: [
			require('@tailwindcss/typography'),
			 // ...
		   ],
	},
	plugins: [],
}
