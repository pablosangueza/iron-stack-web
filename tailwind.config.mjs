/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0d0f',
        surface: '#12161a',
        steel: '#a2adb7',
        accent: '#b38b2a',
        accentSoft: '#2a2210'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(179, 139, 42, 0.3), 0 12px 40px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};
