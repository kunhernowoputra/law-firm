const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'

// Jebak fokus dalam container saat aktif (modal): cycle Tab, Esc → onClose, kembalikan fokus saat tutup.
// Dipakai sekali per modal (bukan multi-instance) agar tak dobel listener.
export const useFocusTrap = (containerRef, isActive, onClose) => {
    let previouslyFocused = null

    const focusables = () => Array.from(containerRef.value?.querySelectorAll(FOCUSABLE) || []).filter((el) => el.offsetParent !== null)

    const onKeydown = (event) => {
        if (event.key === 'Escape') {
            onClose()
            return
        }
        if (event.key !== 'Tab') return
        const items = focusables()
        if (!items.length) return
        const first = items[0]
        const last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault()
            last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault()
            first.focus()
        }
    }

    watch(isActive, (active) => {
        if (active) {
            previouslyFocused = document.activeElement
            document.addEventListener('keydown', onKeydown)
            nextTick(() => focusables()[0]?.focus())
        } else {
            document.removeEventListener('keydown', onKeydown)
            if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
        }
    })

    onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
}
