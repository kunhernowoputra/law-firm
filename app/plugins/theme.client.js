import { THEME_KEY } from '~/composables/useTheme'

// Set tema tersimpan sedini mungkin di client agar tak ada flash tema salah.
export default defineNuxtPlugin(() => {
    const isDark = useState('theme-dark', () => false)
    isDark.value = localStorage.getItem(THEME_KEY) === 'dark'
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})
