const TABS = [
    { key: 'keahlian', label: 'Keahlian' },
    { key: 'litigasi', label: 'Litigasi' },
    { key: 'perizinan', label: 'Perizinan' },
]

// State tab section praktik di beranda (S2/S3): index aktif + navigasi keyboard.
export const usePraktikTabs = () => {
    const activeIndex = useState('home-praktik-active', () => 0)

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
