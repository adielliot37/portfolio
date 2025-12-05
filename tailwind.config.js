/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-primary': '#00ffc8',
        'accent-secondary': '#00d4ff',
        'bg-primary': 'hsl(0, 0%, 5%)',
        'bg-secondary': '#0d0d0d',
        'text-primary': '#e0e0e0',
        'text-secondary': '#aaa',
      },
      fontFamily: {
        mono: ['Inconsolata', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
