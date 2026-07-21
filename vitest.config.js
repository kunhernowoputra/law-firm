import { defineVitestConfig } from '@nuxt/test-utils/config'

// Default environment: node (cocok untuk util murni & server handler).
// Untuk test komponen / Nuxt runtime, tambahkan baris ini di atas file test:
//   // @vitest-environment nuxt
export default defineVitestConfig({
    test: {
        environment: 'node',
    },
})
