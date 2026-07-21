/** @type {import('tailwindcss').Config} */
// Content paths di-handle otomatis oleh @nuxtjs/tailwindcss (scan app/, components/, dll).
// Token design system = CSS custom properties di app/assets/css/tokens.css (single source of truth).
// Di sini token dipetakan ke utility Tailwind agar utility & semantic class berbagi token yang sama;
// dark mode via [data-theme="dark"] otomatis karena custom property yang di-swap.
export default {
    // Dark mode digerakkan CSS custom properties yang di-swap di [data-theme="dark"] (tokens.css),
    // bukan variant `dark:` Tailwind — jadi tak perlu konfigurasi darkMode di sini.
    // Preflight dimatikan: reset sudah ada di assets/css/tokens.css (paritas prototipe tanpa framework reset).
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)',
                'bg-alt': 'var(--bg-alt)',
                'bg-sunk': 'var(--bg-sunk)',
                surface: 'var(--surface)',
                'surface-2': 'var(--surface-2)',
                ink: {
                    DEFAULT: 'var(--ink)',
                    2: 'var(--ink-2)',
                    3: 'var(--ink-3)',
                    4: 'var(--ink-4)',
                },
                line: {
                    DEFAULT: 'var(--line)',
                    2: 'var(--line-2)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    ink: 'var(--accent-ink)',
                    soft: 'var(--accent-soft)',
                },
                ok: { DEFAULT: 'var(--ok)', soft: 'var(--ok-soft)' },
                warn: { DEFAULT: 'var(--warn)', soft: 'var(--warn-soft)' },
                bad: { DEFAULT: 'var(--bad)', soft: 'var(--bad-soft)' },
            },
            fontFamily: {
                display: ['var(--font-display)'],
                sans: ['var(--font-sans)'],
                mono: ['var(--font-mono)'],
            },
            spacing: {
                s1: 'var(--s1)',
                s2: 'var(--s2)',
                s3: 'var(--s3)',
                s4: 'var(--s4)',
                s5: 'var(--s5)',
                s6: 'var(--s6)',
                s7: 'var(--s7)',
                s8: 'var(--s8)',
                s9: 'var(--s9)',
                s10: 'var(--s10)',
            },
            borderRadius: {
                DEFAULT: 'var(--r)',
                sm: 'var(--r-sm)',
            },
            boxShadow: {
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
            },
            maxWidth: {
                wrap: 'var(--wrap)',
            },
            transitionTimingFunction: {
                ease: 'var(--ease)',
            },
        },
    },
    plugins: [],
}
