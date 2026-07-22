// State header publik: drawer mobile + bayangan sticky saat scroll + daftar nav (DRY desktop/mobile).
export const useSiteHeader = () => {
    const isDrawerOpen = ref(false)
    const isStuck = ref(false)

    // Link nav utama dipakai desktop nav + mobile drawer (single source).
    // Konsultasi & Portal Klien dirender terpisah sebagai CTA (lihat Header.vue).
    const navLinks = [
        { to: '/', label: 'Beranda' },
        { to: '/praktik', label: 'Area Praktik' },
        { to: '/layanan', label: 'Layanan' },
        { to: '/probono', label: 'Pro Bono' },
        { to: '/tim', label: 'Tim Advokat' },
        { to: '/kontak', label: 'Kontak' },
    ]

    const lockBody = (locked) => {
        if (import.meta.client) document.body.style.overflow = locked ? 'hidden' : ''
    }
    const toggleDrawer = () => {
        isDrawerOpen.value = !isDrawerOpen.value
        lockBody(isDrawerOpen.value)
    }
    const closeDrawer = () => {
        isDrawerOpen.value = false
        lockBody(false)
    }

    const onScroll = () => {
        isStuck.value = window.scrollY > 8
    }

    onMounted(() => {
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', onScroll)
        lockBody(false)
    })

    return { isDrawerOpen, isStuck, navLinks, toggleDrawer, closeDrawer }
}
