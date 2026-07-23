// Kategori masalah → area praktik (routing S6). value selaras dgn query dari halaman praktik.
const CATEGORIES = [
    { value: 'korporat', title: 'Pendirian / Kontrak', sub: 'Korporat & Komersial', routeName: 'Korporat & Komersial' },
    { value: 'ma', title: 'Akuisisi / Investasi', sub: 'Merger & Akuisisi', routeName: 'Merger & Akuisisi' },
    { value: 'pajak', title: 'Pajak / Pemeriksaan', sub: 'Perpajakan', routeName: 'Perpajakan' },
    { value: 'ip', title: 'Merek / Paten', sub: 'Kekayaan Intelektual', routeName: 'Kekayaan Intelektual' },
    { value: 'kerja', title: 'Karyawan / PHK', sub: 'Ketenagakerjaan', routeName: 'Ketenagakerjaan' },
    { value: 'litigasi', title: 'Sengketa / Gugatan', sub: 'Litigasi & Arbitrase', routeName: 'Litigasi & Arbitrase' },
    { value: 'lain', title: 'Lainnya / Belum yakin', sub: 'Konsultasi Umum', routeName: 'Konsultasi Umum' },
]

// Slot booking (S7). disabled = lampau / penuh, tak bisa dipilih.
const DAYS = [
    { key: '20', dow: 'Sen', date: '20', suffix: 'lampau', disabled: true, label: '20 Juli, lampau' },
    { key: '22', dow: 'Sel', date: '22', suffix: 'Jul', value: 'Selasa, 22 Jul' },
    { key: '23', dow: 'Rab', date: '23', suffix: 'Jul', value: 'Rabu, 23 Jul' },
    { key: '24', dow: 'Kam', date: '24', suffix: 'penuh', disabled: true, label: '24 Juli, penuh' },
    { key: '25', dow: 'Jum', date: '25', suffix: 'Jul', value: 'Jumat, 25 Jul' },
    { key: '28', dow: 'Sen', date: '28', suffix: 'Jul', value: 'Senin, 28 Jul' },
    { key: '29', dow: 'Sel', date: '29', suffix: 'Jul', value: 'Selasa, 29 Jul' },
]
const SLOTS = [{ time: '09:00' }, { time: '10:00' }, { time: '11:00', disabled: true }, { time: '13:00' }, { time: '14:00' }, { time: '15:00', disabled: true }, { time: '16:00' }]

// Konsultasi + booking (S6+S7): step state, routing kategori, validasi per-step, submit → success.
// State via useState (SSR-safe, dibagi antar step component).
export const useKonsultasi = () => {
    const route = useRoute()
    const { showToast } = useToast()

    const step = useState('konsul-step', () => 1)
    const form = useState('konsul-form', () => ({
        kategori: CATEGORIES.some((c) => c.value === route.query.kategori) ? route.query.kategori : '',
        nama: '',
        perusahaan: '',
        email: '',
        telp: '',
        ringkas: '',
        pickedDay: '',
        pickedSlot: '',
        consent: false,
    }))
    const errors = useState('konsul-errors', () => ({ kategori: false, nama: false, email: false, telp: false, ringkas: false, slot: false, consent: false }))
    const isSubmitting = useState('konsul-submitting', () => false)
    const isDone = useState('konsul-done', () => false)
    const scheduledWhen = useState('konsul-when', () => '')

    const routeName = computed(() => CATEGORIES.find((c) => c.value === form.value.kategori)?.routeName || 'Konsultasi Umum')

    const scrollTop = () => {
        if (import.meta.client) window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const goTo = (n) => {
        step.value = n
        scrollTop()
    }

    const validateStep1 = () => {
        errors.value.kategori = !form.value.kategori
        return !errors.value.kategori
    }
    const validateStep2 = () => {
        errors.value.nama = form.value.nama.trim() === ''
        errors.value.email = form.value.email.trim() === '' || !isEmail(form.value.email)
        errors.value.telp = form.value.telp.trim() === ''
        errors.value.ringkas = form.value.ringkas.trim() === ''
        return !errors.value.nama && !errors.value.email && !errors.value.telp && !errors.value.ringkas
    }

    const next = () => {
        if (step.value === 1 && validateStep1()) goTo(2)
        else if (step.value === 2 && validateStep2()) goTo(3)
    }
    const prev = () => goTo(step.value - 1)

    const clearError = (field) => {
        errors.value[field] = false
    }
    const pickDay = (value) => {
        form.value.pickedDay = value
        errors.value.slot = false
    }
    const pickSlot = (time) => {
        form.value.pickedSlot = time
        errors.value.slot = false
    }

    const submit = async () => {
        const slotOk = form.value.pickedDay && form.value.pickedSlot
        errors.value.slot = !slotOk
        errors.value.consent = slotOk ? !form.value.consent : false
        if (!slotOk || !form.value.consent) return
        if (isSubmitting.value) return
        isSubmitting.value = true
        try {
            await $fetch('/api/konsultasi', { method: 'POST', body: { ...form.value } })
            scheduledWhen.value = `${form.value.pickedDay} · ${form.value.pickedSlot} WIB`
            isDone.value = true
            scrollTop()
        } catch {
            showToast('Gagal mengirim booking. Silakan coba lagi.')
        } finally {
            isSubmitting.value = false
        }
    }

    return { categories: CATEGORIES, days: DAYS, slots: SLOTS, step, form, errors, isSubmitting, isDone, routeName, scheduledWhen, next, prev, clearError, pickDay, pickSlot, submit }
}
