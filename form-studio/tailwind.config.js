/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#f5f4f2',
        foreground: '#0a0a0a',
        primary: '#d42a1a',
        muted: '#808080',
        border: '#d6d6d6',
        gold: '#A78048',
        'gold-light': '#D4A96A',
        'gold-dark': '#7A5C30',
        navy: '#1A3A5C',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'wide-xl': '0.16em',
        'wide-lg': '0.12em',
        'wide-md': '0.10em',
        'wide-sm': '0.08em',
      },
    },
  },
  plugins: [],
};
