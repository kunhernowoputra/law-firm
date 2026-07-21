const PAY_DELAY = 1500

// Invoice (mock FE). status: unpaid | failed | paid. TODO: wire backend — daftar invoice + payment gateway.
const INVOICES = [
    { id: 'INV-2026-0142-03', title: 'Jasa Hukum — Due Diligence & SPA', meta: 'WP-2026-0142 · Jatuh tempo 30 Jul 2026', amount: 12000000, status: 'unpaid' },
    { id: 'INV-2026-0142-02', title: 'Retainer Bulanan — Juni 2026', meta: 'INV-2026-0142-02 · Pembayaran terakhir gagal — status tetap belum bayar', amount: 7500000, status: 'failed' },
    { id: 'INV-2026-0142-01', title: 'Retainer Bulanan — Mei 2026', meta: 'INV-2026-0142-01 · Dibayar 03 Jun 2026 · VA BCA', amount: 7500000, status: 'paid' },
    { id: 'INV-2026-0138-01', title: 'Biaya Pendaftaran Perkara', meta: 'INV-2026-0138-01 · Dibayar 20 Mei 2026 · Kartu Kredit', amount: 5000000, status: 'paid' },
]

const sumBy = (list, predicate) => list.filter(predicate).reduce((total, inv) => total + inv.amount, 0)

const STATUS_TONE = { unpaid: 'warn', failed: 'bad', paid: 'ok' }
const STATUS_LABEL = { unpaid: 'Belum bayar', failed: 'Gagal', paid: 'Lunas' }

// Pembayaran invoice (S12): modal metode, pay gateway (sim), gagal→retry, lunas→disabled (tak dobel), toast.
export const useInvoice = () => {
    const { showToast } = useToast()

    const invoices = useState('inv-list', () => INVOICES.map((inv) => ({ ...inv })))
    const modalOpen = useState('inv-modal', () => false)
    const currentId = useState('inv-current', () => null)
    const method = useState('inv-method', () => 'va')
    const isProcessing = useState('inv-processing', () => false)

    const current = computed(() => invoices.value.find((inv) => inv.id === currentId.value) || null)

    const paidTotal = computed(() => sumBy(invoices.value, (inv) => inv.status === 'paid'))
    const outstandingTotal = computed(() => sumBy(invoices.value, (inv) => inv.status !== 'paid'))
    const stats = computed(() => [
        { label: 'Total tertagih', value: formatCurrency(paidTotal.value + outstandingTotal.value) },
        { label: 'Belum dibayar', value: formatCurrency(outstandingTotal.value), tone: 'warn' },
        { label: 'Lunas tahun ini', value: formatCurrency(paidTotal.value), tone: 'ok' },
    ])

    const openPay = (invoice) => {
        currentId.value = invoice.id
        method.value = 'va'
        modalOpen.value = true
    }
    const closeModal = () => {
        if (isProcessing.value) return
        modalOpen.value = false
    }
    const setMethod = (value) => {
        method.value = value
    }

    const pay = () => {
        if (isProcessing.value || !current.value) return
        isProcessing.value = true
        // TODO: wire backend — buat transaksi payment gateway; status final dari webhook, bukan timer ini.
        setTimeout(() => {
            const inv = invoices.value.find((item) => item.id === currentId.value)
            if (inv) inv.status = 'paid'
            isProcessing.value = false
            modalOpen.value = false
            showToast('Pembayaran berhasil. Invoice ditandai lunas.')
        }, PAY_DELAY)
    }

    const statusTone = (status) => STATUS_TONE[status]
    const statusLabel = (status) => STATUS_LABEL[status]

    return { invoices, stats, modalOpen, current, method, isProcessing, openPay, closeModal, setMethod, pay, statusTone, statusLabel }
}
