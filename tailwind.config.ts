import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        accent: 'var(--accent)'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space)']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(45,212,191,.25), 0 16px 48px rgba(11,32,66,.15)'
      }
    }
  },
  plugins: []
} satisfies Config;
