const THEME_KEY = 'wp-theme'

// Toggle tema portal (light/dark) — state global + persist localStorage + set data-theme di <html>.
// Nilai awal di-set oleh plugin theme.client.js (hindari flash tema salah saat load).
export const useTheme = () => {
    const isDark = useState('theme-dark', () => false)

    const apply = (dark) => {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    }

    const toggle = () => {
        isDark.value = !isDark.value
        apply(isDark.value)
        localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'light')
    }

    return { isDark, toggle }
}

export { THEME_KEY }
