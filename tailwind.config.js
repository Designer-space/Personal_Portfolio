/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-100': 'clamp(0.8125rem, 0.4384rem + 1.5962vw, 1.875rem)',
        'fluid-200': 'clamp(1.2rem, 1.0944rem + 0.4507vw, 1.5rem)',
        'fluid-300': 'clamp(1.5625rem, 1.3424rem + 0.939vw, 2.1875rem)'
      }
    },
  },
  plugins: [],
}