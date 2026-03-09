/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        vt: {
          bg: '#060a14',
          surface: '#0c1220',
          card: '#111827',
          border: '#1e293b',
          accent: '#3b82f6',
          cyan: '#06b6d4',
          green: '#10b981',
          text: '#f8fafc',
          muted: '#94a3b8',
          dim: '#64748b',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
