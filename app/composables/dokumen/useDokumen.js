const UPLOAD_STEP = 8
const UPLOAD_TICK = 300
const MAX_SIZE = 10 * 1024 * 1024
const ACCEPT_EXT = ['pdf', 'jpg', 'jpeg', 'png']

const CASES = [
    { title: 'Akuisisi PT Cahaya Baru', no: 'WP-2026-0142' },
    { title: 'Sengketa Kontrak Vendor', no: 'WP-2026-0138' },
]

// Dokumen per kasus (mock FE). Kasus kedua sengaja kosong → demonstrasi empty state saat pindah tab.
// TODO: wire backend — ganti mock dgn useFetch dokumen per kasus (authz: pemilik + advokat terkait).
const DOCS = {
    0: [
        { name: 'Surat_Kuasa_Khusus.pdf', kind: 'pdf', type: 'PDF', size: 1153434, uploader: 'advokat', date: '02 Jun 2026', status: { label: 'Terverifikasi', tone: 'ok' } },
        { name: 'Akta_Pendirian_Target.pdf', kind: 'pdf', type: 'PDF', size: 3984589, uploader: 'Anda', date: '15 Jun 2026', status: { label: 'Terverifikasi', tone: 'ok' } },
        { name: 'Foto_Sertifikat_Tanah.jpg', kind: 'image', type: 'JPG', size: 2516582, uploader: 'Anda', date: '20 Jun 2026', status: { label: 'Direview', tone: 'warn' } },
    ],
    1: [],
}

// Kelola dokumen (S11): tab kasus, upload sim (progress/error tipe·limit/retry), drag, empty.
export const useDokumen = () => {
    const activeIndex = useState('dok-active', () => 0)
    const queue = useState('dok-queue', () => [])
    const isDragging = useState('dok-drag', () => false)

    const activeCase = computed(() => CASES[activeIndex.value])
    const docs = computed(() => DOCS[activeIndex.value] || [])

    const selectCase = (i) => {
        activeIndex.value = i
    }
    const setDrag = (value) => {
        isDragging.value = value
    }

    const simulateUpload = (item) => {
        const timer = setInterval(() => {
            item.progress = Math.min(100, item.progress + UPLOAD_STEP)
            if (item.progress >= 100) {
                clearInterval(timer)
                item.status = 'done'
            }
        }, UPLOAD_TICK)
    }

    const addFiles = (fileList) => {
        for (const file of Array.from(fileList)) {
            const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
            const ext = file.name.split('.').pop().toLowerCase()
            if (!ACCEPT_EXT.includes(ext)) {
                queue.value = [...queue.value, reactive({ id, name: file.name, status: 'error', action: 'replace', progress: 100, message: 'Tipe berkas tidak didukung — gunakan PDF, JPG, atau PNG.' })]
                continue
            }
            if (file.size > MAX_SIZE) {
                queue.value = [...queue.value, reactive({ id, name: file.name, status: 'error', action: 'retry', progress: 100, message: `Ukuran ${formatBytes(file.size)} melebihi batas 10 MB. Unggahan gagal.` })]
                continue
            }
            const item = reactive({ id, name: file.name, status: 'uploading', progress: 0, sizeLabel: formatBytes(file.size), message: '' })
            queue.value = [...queue.value, item]
            simulateUpload(item)
        }
    }

    const removeUpload = (id) => {
        queue.value = queue.value.filter((item) => item.id !== id)
    }

    // change/drop dibungkus di composable agar .vue tetap nol-logic.
    const onChange = (event) => {
        addFiles(event.target.files)
        event.target.value = ''
    }
    const onDrop = (event) => {
        setDrag(false)
        addFiles(event.dataTransfer.files)
    }

    return { cases: CASES, activeIndex, activeCase, docs, queue, isDragging, selectCase, setDrag, onChange, onDrop, removeUpload }
}
