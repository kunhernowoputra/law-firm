<template>
    <div>
        <section class="section--tight wrap" style="padding-top: var(--s8)">
            <p class="eyebrow reveal">Karier</p>
            <h1 class="reveal" data-delay="1" style="font-size: var(--fs-h1); max-width: 22ch; margin-top: var(--s4)">Tumbuh bersama tim yang menjunjung integritas.</h1>
            <p class="reveal prose" data-delay="2" style="margin-top: var(--s4); color: var(--ink-3)">Kami mencari individu yang teliti, berintegritas, dan siap belajar langsung dari mandat klien nyata — bukan sekadar mengisi posisi. Setiap advokat di Ridwan & Co. memulai dari mentorship senior-led dan bertumbuh sesuai kontribusi.</p>
        </section>

        <section class="section wrap">
            <p class="eyebrow reveal">Kenapa Bergabung</p>
            <div class="grid grid--4 reveal" data-delay="1" style="margin-top: var(--s5); gap: var(--s5)">
                <div v-for="item in values" :key="item.title" class="card">
                    <b style="color: var(--ink); font-family: var(--font-display); font-size: 1.1rem">{{ item.title }}</b>
                    <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: 6px">{{ item.text }}</p>
                </div>
            </div>
        </section>

        <section class="section wrap">
            <p class="eyebrow reveal">Yang Kami Cari</p>
            <div class="grid grid--3 reveal" data-delay="1" style="margin-top: var(--s5); gap: var(--s5)">
                <div v-for="item in qualifications" :key="item.title" class="card">
                    <b style="color: var(--ink); font-family: var(--font-display); font-size: 1.1rem">{{ item.title }}</b>
                    <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: 6px">{{ item.text }}</p>
                </div>
            </div>
        </section>

        <section class="section wrap">
            <p class="eyebrow reveal">Posisi Terbuka</p>
            <div class="reveal card" data-delay="1" style="margin-top: var(--s5)">
                <b style="color: var(--ink); font-family: var(--font-display); font-size: 1.1rem">Belum ada lowongan aktif saat ini</b>
                <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: 6px; max-width: 60ch">Kami tidak selalu memiliki posisi terbuka, namun senantiasa menerima CV inisiatif dari kandidat yang berminat. Berkas Anda akan kami simpan dan hubungi lebih dulu bila ada kebutuhan yang sesuai.</p>
            </div>
        </section>

        <section class="section wrap">
            <p class="eyebrow reveal">Cara Melamar</p>
            <div class="grid grid--4 reveal" data-delay="1" style="margin-top: var(--s5); gap: var(--s5)">
                <div v-for="(item, i) in steps" :key="item.title" class="card">
                    <span style="font-family: var(--font-mono); font-size: var(--fs-xs); color: var(--ink-4)">{{ String(i + 1).padStart(2, '0') }}</span>
                    <b style="display: block; color: var(--ink); font-family: var(--font-display); font-size: 1.1rem; margin-top: var(--s2)">{{ item.title }}</b>
                    <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: 6px">{{ item.text }}</p>
                </div>
            </div>
        </section>

        <section class="section wrap">
            <SharedCtaBand eyebrow="Mulai Langkah Anda" title="Tertarik bergabung dengan Ridwan & Co.?" :text="`Kirimkan CV dan portofolio Anda ke ${email} — cantumkan posisi yang diminati bila relevan.`" cta-label="Kirim Lamaran" :cta-to="mailtoHref" />
        </section>
    </div>
</template>

<script setup>
    const { values, qualifications, steps, email, mailtoHref } = useKarir()

    useHead({
        title: 'Karier — Ridwan & Co.',
        meta: [{ name: 'description', content: 'Bergabung dengan tim Ridwan & Co. — kenapa bergabung, kualifikasi yang kami cari, dan cara mengirim lamaran.' }],
    })
</script>
