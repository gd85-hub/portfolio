/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        body: 'var(--body)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'on-accent': 'var(--on-accent)',
        ph1: 'var(--ph1)',
        ph2: 'var(--ph2)',
        phtext: 'var(--phtext)',
        'callout-insight': 'var(--callout-insight-bg)',
        'callout-problem': 'var(--callout-problem-bg)',
        inv: 'var(--inv-bg)',
        'inv-fg': 'var(--inv-fg)',
        'inv-sub': 'var(--inv-sub)',
        'inv-line': 'var(--inv-line)',
        'inv-btn': 'var(--inv-btn)',
        'inv-btnfg': 'var(--inv-btnfg)'
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        content: '72rem'
      }
    }
  }
};
