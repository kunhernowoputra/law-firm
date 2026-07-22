<template>
    <div>
        <HomeHero :stats="stats" />
        <HomeAbout :highlights="highlights" />
        <HomePraktik />
        <HomeTeam :attorneys="attorneys" />
        <HomeInsights :insights="insights" />
        <HomeTestimonials :clients="clients" />
        <section class="section wrap">
            <SharedCtaBand />
        </section>
    </div>
</template>

<script setup>
    const { stats, highlights, attorneys, insights, clients } = useHome()

    useHead({
        title: 'Ridwan & Co. — Kantor Hukum Korporat & Litigasi',
        meta: [{ name: 'description', content: 'Firma hukum korporasi untuk korporasi dan lembaga keuangan. Layanan hukum berstandar tinggi dengan komitmen pada integritas.' }],
    })
</script>
