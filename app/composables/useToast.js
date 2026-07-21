const TOAST_DURATION = 3200

// Toast global reusable (konsultasi, kontak, invoice). Render oleh <SharedToast /> di layout.
export const useToast = () => {
    const toast = useState('toast', () => ({ message: '', visible: false }))
    const timer = useState('toast-timer', () => null)

    const showToast = (message) => {
        toast.value = { message, visible: true }
        if (timer.value) clearTimeout(timer.value)
        timer.value = setTimeout(() => {
            toast.value = { message: toast.value.message, visible: false }
        }, TOAST_DURATION)
    }

    return { toast, showToast }
}
