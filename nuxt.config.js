import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-01-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    // Nuxt 4: ~/ & @/ = app/. server/ & shared/ ada DI LUAR app/.
    // #shared dipakai untuk import schema/util shared (lihat CONVENTIONS.md).
    alias: {
        '#shared': fileURLToPath(new URL('./shared', import.meta.url)),
    },
})
