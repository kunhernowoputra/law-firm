<template>
    <div>
        <HomeHero :stats="stats" />
        <HomeAbout :highlights="highlights" />
        <hr class="wrap divider" />
        <HomePractices :practices="practices" />
        <HomeTeam :attorneys="attorneys" />
        <HomeInsights :insights="insights" />
        <HomeTestimonials :testimonial="testimonial" :clients="clients" />
        <section class="section wrap">
            <SharedCtaBand />
        </section>
    </div>
</template>

<script setup>
    const { stats, highlights, practices, attorneys, insights, testimonial, clients } = useHome()

    useHead({
        title: 'Wirasena & Partners — Kantor Hukum Korporat & Litigasi',
        meta: [{ name: 'description', content: 'Firma hukum multi-praktik untuk korporasi, transaksi, dan sengketa. Nasihat hukum yang tenang, presisi, dan tepercaya.' }],
    })
</script>
