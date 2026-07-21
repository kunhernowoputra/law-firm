import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-01-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/eslint'],
    // Auto-import composable di subfolder (composables/[page]/...) — default Nuxt hanya scan top-level.
    imports: {
        dirs: ['composables/**'],
    },
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    // Font design system (Newsreader/Inter/IBM Plex Mono) — dipakai lewat CSS custom properties di tokens.css.
    fonts: {
        families: [
            { name: 'Newsreader', provider: 'google', weights: [400, 500, 600], styles: ['normal', 'italic'] },
            { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
            { name: 'IBM Plex Mono', provider: 'google', weights: [400, 500] },
        ],
    },
    // Nuxt 4: ~/ & @/ = app/. server/ & shared/ ada DI LUAR app/.
    // #shared dipakai untuk import schema/util shared (lihat CONVENTIONS.md).
    alias: {
        '#shared': fileURLToPath(new URL('./shared', import.meta.url)),
    },
})
