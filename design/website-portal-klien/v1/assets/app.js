/* Wirasena & Partners — shared prototype behaviour (vanilla, zero-build) */
;(() => {
    'use strict'

    /* ---------- scroll reveal (staggered entrance) ---------- */
    const reveals = document.querySelectorAll('.reveal')
    if (reveals.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const io = new IntersectionObserver(
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
        reveals.forEach((el) => io.observe(el))
    } else {
        reveals.forEach((el) => el.classList.add('is-in'))
    }

    /* ---------- sticky header shadow ---------- */
    const header = document.querySelector('.site-header')
    if (header) {
        const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
    }

    /* ---------- mobile nav ---------- */
    const navToggle = document.querySelector('[data-nav-toggle]')
    const mobileNav = document.querySelector('.mobile-nav')
    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', () => {
            const open = mobileNav.classList.toggle('is-open')
            navToggle.setAttribute('aria-expanded', String(open))
            document.body.style.overflow = open ? 'hidden' : ''
        })
        mobileNav.querySelectorAll('a').forEach((a) =>
            a.addEventListener('click', () => {
                mobileNav.classList.remove('is-open')
                navToggle.setAttribute('aria-expanded', 'false')
                document.body.style.overflow = ''
            }),
        )
    }

    /* ---------- theme toggle (portal) ---------- */
    const THEME_KEY = 'wp-theme'
    const saved = localStorage.getItem(THEME_KEY)
    if (saved) document.documentElement.setAttribute('data-theme', saved)
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
        const sync = () => {
            const dark = document.documentElement.getAttribute('data-theme') === 'dark'
            btn.setAttribute('aria-pressed', String(dark))
        }
        sync()
        btn.addEventListener('click', () => {
            const dark = document.documentElement.getAttribute('data-theme') === 'dark'
            const next = dark ? 'light' : 'dark'
            document.documentElement.setAttribute('data-theme', next)
            localStorage.setItem(THEME_KEY, next)
            sync()
        })
    })

    /* ---------- toast helper ---------- */
    window.showToast = (msg) => {
        let t = document.querySelector('.toast')
        if (!t) {
            t = document.createElement('div')
            t.className = 'toast'
            document.body.appendChild(t)
        }
        t.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span></span>'
        t.querySelector('span').textContent = msg
        requestAnimationFrame(() => t.classList.add('is-show'))
        clearTimeout(t._h)
        t._h = setTimeout(() => t.classList.remove('is-show'), 3200)
    }

    /* ---------- generic form validation ---------- */
    document.querySelectorAll('form[data-validate]').forEach((form) => {
        const setError = (field, on) => field?.classList.toggle('field--error', on)
        form.querySelectorAll('[required]').forEach((inp) => {
            inp.addEventListener('blur', () => {
                const ok = inp.type === 'email' ? /.+@.+\..+/.test(inp.value) : inp.value.trim() !== ''
                setError(inp.closest('.field'), !ok && inp.value !== '')
            })
            inp.addEventListener('input', () => setError(inp.closest('.field'), false))
        })

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let valid = true
            let firstBad = null
            form.querySelectorAll('[required]').forEach((inp) => {
                const ok = inp.type === 'email' ? /.+@.+\..+/.test(inp.value) : inp.type === 'checkbox' ? inp.checked : inp.value.trim() !== ''
                setError(inp.closest('.field'), !ok)
                if (!ok && !firstBad) firstBad = inp
                if (!ok) valid = false
            })
            // radio-group required
            form.querySelectorAll('[data-required-group]').forEach((grp) => {
                const ok = grp.querySelector('input:checked')
                grp.classList.toggle('field--error', !ok)
                if (!ok && !firstBad) firstBad = grp.querySelector('input')
                if (!ok) valid = false
            })
            if (!valid) {
                firstBad?.focus()
                return
            }

            // double-submit guard + loading
            const btn = form.querySelector('[type="submit"]')
            if (btn?.classList.contains('is-loading')) return
            if (btn) {
                btn.classList.add('is-loading')
                const label = btn.querySelector('.btn__label')
                const original = label ? label.textContent : ''
                if (label) label.textContent = 'Memproses…'
                btn.insertAdjacentHTML('afterbegin', '<span class="btn__spinner" aria-hidden="true"></span>')
                setTimeout(() => {
                    btn.classList.remove('is-loading')
                    btn.querySelector('.btn__spinner')?.remove()
                    if (label) label.textContent = original
                    const done = form.getAttribute('data-success')
                    if (done) {
                        const el = document.querySelector(done)
                        if (el) {
                            form.classList.add('hidden')
                            el.classList.remove('hidden')
                            el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }
                    } else {
                        window.showToast(form.getAttribute('data-toast') || 'Terkirim.')
                    }
                }, 1400)
            }
        })
    })

    /* ---------- state demo switcher (empty / loading / error / data) ---------- */
    document.querySelectorAll('[data-state-group]').forEach((group) => {
        const name = group.getAttribute('data-state-group')
        const controls = document.querySelectorAll(`[data-state-for="${name}"]`)
        const panels = group.querySelectorAll('[data-state]')
        const show = (state) => {
            panels.forEach((p) => p.classList.toggle('hidden', p.getAttribute('data-state') !== state))
            controls.forEach((c) => c.classList.toggle('is-active', c.getAttribute('data-state-set') === state))
        }
        controls.forEach((c) => c.addEventListener('click', () => show(c.getAttribute('data-state-set'))))
    })

    /* ---------- tabs ---------- */
    document.querySelectorAll('[data-tabs]').forEach((tabs) => {
        const btns = tabs.querySelectorAll('button[data-tab]')
        const panelsRoot = document.querySelector(tabs.getAttribute('data-tabs'))
        btns.forEach((b) =>
            b.addEventListener('click', () => {
                btns.forEach((x) => x.classList.toggle('is-active', x === b))
                const id = b.getAttribute('data-tab')
                panelsRoot?.querySelectorAll('[data-tabpanel]').forEach((p) => p.classList.toggle('hidden', p.getAttribute('data-tabpanel') !== id))
            }),
        )
    })
})()
