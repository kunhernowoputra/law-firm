import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-01-01',
    devtools: { enabled: true },
    // Hosting pindah ke Cloudflare Workers. wrangler.jsonc di root define name & compatibility_date.
    nitro: {
        preset: 'cloudflare_module',
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/sitemap'],
    // Domain belum dibeli saat ini (ridwanco.com direncanakan) — override via env NUXT_PUBLIC_SITE_URL saat sudah live.
    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL || 'https://ridwanco.com',
    },
    sitemap: {
        exclude: ['/portal/**'],
    },
    // Portal klien masih mock tanpa backend — jangan sampai ke-index atau muncul di link publik.
    routeRules: {
        '/portal/**': { robots: false },
        '/**': {
            headers: {
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
            },
        },
    },
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
