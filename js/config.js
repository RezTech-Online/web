/**
 * Tailwind theme config (loaded before Tailwind CDN)
 */
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0e14',
          surface: '#131920',
          border: '#1e2836',
        },
        accent: {
          DEFAULT: '#46d180',
          dim: 'rgba(70, 209, 128, 0.15)',
          border: 'rgba(70, 209, 128, 0.35)',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
};
