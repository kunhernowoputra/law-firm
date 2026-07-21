// Kolom link footer (statis presentasional). '#' = halaman placeholder (Karier/Legal) di luar scope FE ini.
// Varian slim (hanya notice kerahasiaan + legal) di-set per halaman via definePageMeta({ footerVariant: 'slim' }).
export const useSiteFooter = () => {
    const route = useRoute()
    const isSlim = computed(() => route.meta.footerVariant === 'slim')

    const footerCols = [
        {
            title: 'Firma',
            links: [
                { label: 'Tentang', to: '/' },
                { label: 'Tim Advokat', to: '/tim' },
                { label: 'Area Praktik', to: '/praktik' },
                { label: 'Karier', to: '#' },
            ],
        },
        {
            title: 'Layanan',
            links: [
                { label: 'Konsultasi', to: '/konsultasi' },
                { label: 'Booking Jadwal', to: '/konsultasi' },
                { label: 'Kontak', to: '/kontak' },
                { label: 'Portal Klien', to: '/portal/login' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Kebijakan Privasi', to: '#' },
                { label: 'Syarat Layanan', to: '#' },
                { label: 'Kode Etik Advokat', to: '#' },
            ],
        },
    ]

    return { footerCols, isSlim }
}
