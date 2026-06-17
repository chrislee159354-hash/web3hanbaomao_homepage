/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#0b0f1a',
        cardBg: 'rgba(30, 41, 59, 0.5)',
        accent: '#3b82f6',
      },
    },
  },
  plugins: [],
};
