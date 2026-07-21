// eslint.config.mjs — flat config Nuxt 4 (vanilla JavaScript, ESM)
// Butuh module @nuxt/eslint (di-install otomatis oleh init-nuxt.sh).
import withNuxt from './.nuxt/eslint.config.mjs'

// Project ini pakai VANILLA JAVASCRIPT (ESM) — tanpa TypeScript.
export default withNuxt({
    rules: {
        // — Maintainability (CONVENTIONS §2) —
        complexity: ['warn', 15],
        'max-depth': ['warn', 4],
        'max-lines': ['warn', { max: 250, skipBlankLines: true, skipComments: true }],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        // — Code style (CONVENTIONS §1) —
        // Indentasi/print-width diserahkan ke Prettier (tabWidth 4, printWidth 9999).
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'prefer-const': 'error',
        eqeqeq: ['error', 'always'],
        // Arrow function default — hindari function declaration (CONVENTIONS §1).
        'func-style': ['warn', 'expression'],
        'prefer-arrow-callback': 'warn',
        // Import order (CONVENTIONS §1: built-in → eksternal → internal → relatif)
        // di-enforce soft saat review: eslint-plugin-import belum kompatibel ESLint 10.

        // — Security baseline (CONVENTIONS §5) —
        'no-eval': 'error',
        'no-implied-eval': 'error',
    },
})
