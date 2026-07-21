// Reveal-on-scroll untuk elemen .reveal (paritas prototipe). Scan setelah hidrasi selesai
// (onNuxtReady) & tiap navigasi (page:finish) untuk hindari race IntersectionObserver saat hydrate.
export default defineNuxtPlugin((nuxtApp) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let io

    const scan = () => {
        const els = document.querySelectorAll('.reveal:not(.is-in)')
        if (prefersReduced || !('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('is-in'))
            return
        }
        if (!io) {
            io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) {
                            e.target.classList.add('is-in')
                            io.unobserve(e.target)
                        }
                    })
                },
                { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
            )
        }
        els.forEach((el) => io.observe(el))
    }

    nuxtApp.hook('page:finish', () => nextTick(scan))
    onNuxtReady(scan)
})
