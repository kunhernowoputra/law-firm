const CHECK_DELAY = 1200

// Login klien (S9): validasi, show/hide sandi, error generik (tak bocorkan user exist), akun belum aktif.
// FE-only: hasil ditentukan demoMode (skenario). TODO: wire backend — ganti dgn POST /api/auth/login.
export const useLogin = () => {
    const router = useRouter()

    const form = reactive({ email: '', password: '', remember: false })
    const errors = reactive({ email: false, password: false })
    const showPassword = ref(false)
    const isSubmitting = ref(false)
    const authError = ref('') // '' | 'generic' | 'blocked'
    const demoMode = ref('ok') // 'ok' | 'wrong' | 'blocked'

    const togglePassword = () => {
        showPassword.value = !showPassword.value
    }
    const setDemo = (mode) => {
        demoMode.value = mode
    }
    const clearError = (field) => {
        errors[field] = false
    }

    const submit = () => {
        authError.value = ''
        errors.email = form.email.trim() === '' || !isEmail(form.email)
        errors.password = form.password.trim() === ''
        if (errors.email || errors.password) return
        if (isSubmitting.value) return
        isSubmitting.value = true
        // TODO: wire backend — autentikasi nyata; pesan error tetap generik (jangan bocorkan eksistensi user).
        setTimeout(() => {
            isSubmitting.value = false
            if (demoMode.value === 'ok') router.push('/portal')
            else if (demoMode.value === 'blocked') authError.value = 'blocked'
            else authError.value = 'generic'
        }, CHECK_DELAY)
    }

    return { form, errors, showPassword, isSubmitting, authError, demoMode, togglePassword, setDemo, clearError, submit }
}
