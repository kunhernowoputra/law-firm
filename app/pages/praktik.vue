<template>
    <div>
        <section class="section--tight wrap" style="padding-top: var(--s8)">
            <p class="eyebrow reveal">Area Praktik</p>
            <h1 class="reveal" data-delay="1" style="font-size: var(--fs-h1); max-width: 20ch; margin-top: var(--s4)">Keahlian yang dalam di enam bidang inti.</h1>
            <p class="reveal prose" data-delay="2" style="margin-top: var(--s4); color: var(--ink-3)">Enam bidang praktik inti yang mendukung kebutuhan hukum korporasi dan institusi. Pilih area untuk memulai konsultasi yang langsung diarahkan ke tim yang tepat.</p>
        </section>

        <section class="wrap" style="padding-bottom: var(--s9)">
            <PraktikDetail v-for="(area, i) in areas" :key="area.no" :area="area" :delay="i % 3" />
        </section>

        <section class="section wrap">
            <SharedCtaBand :eyebrow="''" title="Tidak yakin masuk area mana?" text="Form konsultasi kami merutekan masalah Anda otomatis ke area praktik yang paling sesuai." cta-label="Mulai Konsultasi" />
        </section>
    </div>
</template>

<script setup>
    const { areas } = usePraktik()

    useHead({
        title: 'Area Praktik — Ridwan & Co.',
        meta: [{ name: 'description', content: 'Enam area praktik: Korporat, M&A, Perpajakan, Kekayaan Intelektual, Ketenagakerjaan, dan Litigasi & Arbitrase.' }],
    })
</script>
