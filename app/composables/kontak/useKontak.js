const SUBMIT_DELAY = 1400

// Form kontak (S5): model + validasi boundary FE + double-submit guard + toast sukses.
export const useKontak = () => {
    const { showToast } = useToast()

    const form = reactive({ nama: '', email: '', subjek: '', pesan: '' })
    const errors = reactive({ nama: false, email: false, pesan: false })
    const isSubmitting = ref(false)

    const clearError = (field) => {
        errors[field] = false
    }
    const validateEmailBlur = () => {
        errors.email = form.email !== '' && !isEmail(form.email)
    }
    const validateAll = () => {
        errors.nama = form.nama.trim() === ''
        errors.email = form.email.trim() === '' || !isEmail(form.email)
        errors.pesan = form.pesan.trim() === ''
        return !errors.nama && !errors.email && !errors.pesan
    }

    const reset = () => {
        form.nama = ''
        form.email = ''
        form.subjek = ''
        form.pesan = ''
    }

    const submit = () => {
        if (isSubmitting.value) return
        if (!validateAll()) return
        isSubmitting.value = true
        // TODO: wire backend — POST pesan kontak ke endpoint; ganti simulasi delay ini.
        setTimeout(() => {
            isSubmitting.value = false
            reset()
            showToast('Pesan terkirim. Kami akan membalas dalam 1×24 jam kerja.')
        }, SUBMIT_DELAY)
    }

    return { form, errors, isSubmitting, clearError, validateEmailBlur, submit }
}
