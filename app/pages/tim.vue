<template>
    <div>
        <section class="section--tight wrap" style="padding-top: var(--s8)">
            <p class="eyebrow reveal">Tim</p>
            <h1 class="reveal" data-delay="1" style="font-size: var(--fs-h1); max-width: 22ch; margin-top: var(--s4)">Advokat dan konsultan</h1>
            <p class="reveal prose" data-delay="2" style="margin-top: var(--s4); color: var(--ink-3)">Tujuh profesional lintas disiplin yang menangani setiap mandat klien.</p>
        </section>

        <section class="wrap" style="padding-bottom: var(--s9)">
            <div class="grid grid--4">
                <SharedAttorneyCard v-for="(attorney, i) in attorneys" :key="attorney.name" v-bind="attorney" :delay="i % 4" />
            </div>
            <p style="text-align: center; color: var(--ink-4); font-family: var(--font-mono); font-size: var(--fs-xs); letter-spacing: 0.08em; margin-top: var(--s7)">Menampilkan {{ attorneys.length }} dari {{ total }} profesional</p>
        </section>

        <section class="section wrap">
            <SharedCtaBand :eyebrow="''" title="Butuh advokat untuk situasi spesifik?" text="Ajukan konsultasi dan kami cocokkan Anda dengan advokat yang paling relevan." cta-label="Konsultasi Sekarang" />
        </section>
    </div>
</template>

<script setup>
    const { attorneys, total } = useTim()

    useHead({
        title: 'Tim Advokat — Ridwan & Co.',
        meta: [{ name: 'description', content: 'Profil advokat dan konsultan hukum Ridwan & Co..' }],
    })
</script>
