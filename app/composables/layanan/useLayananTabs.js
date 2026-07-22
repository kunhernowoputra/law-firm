const TABS = [
    { key: 'keahlian', label: 'Keahlian' },
    { key: 'litigasi', label: 'Litigasi' },
    { key: 'perizinan', label: 'Perizinan' },
]

// State tab halaman Layanan: index aktif + navigasi keyboard.
export const useLayananTabs = () => {
    const activeIndex = useState('layanan-active', () => 0)

    const activeTab = computed(() => TABS[activeIndex.value])

    const selectTab = (i) => {
        activeIndex.value = i
    }

    const selectNext = () => {
        activeIndex.value = (activeIndex.value + 1) % TABS.length
    }

    const selectPrev = () => {
        activeIndex.value = (activeIndex.value - 1 + TABS.length) % TABS.length
    }

    return { tabs: TABS, activeIndex, activeTab, selectTab, selectNext, selectPrev }
}
