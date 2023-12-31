import type { Config } from 'tailwindcss'

const colors = {
  black: '#000000',
  white: '#ffffff',
}

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px', // Small devices (모바일)
      md: '768px', // Medium devices (태블릿)
      lg: '1024px', // Large devices (데스크탑)
      xl: '1280px', // Extra large devices (와이드 스크린)
      '2xl': '1536px', // 더 큰 스크린
    },
    extend: {
      colors: {
        'def-text': colors.black,
        'def-text-point': colors.black,
        'def-text-dark': colors.white,
        'def-text-point-dark': colors.white,
        'def-bg': colors.white,
        'def-bg-point': colors.white,
        'def-bg-dark': '#141414',
        'def-bg-point-dark': colors.black,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
