<template>
    <div>
        <HomeHero :stats="stats" />
        <HomeAbout :highlights="highlights" />
        <hr class="wrap divider" />
        <HomePractices :practices="practices" />
        <HomeTeam :attorneys="attorneys" />
        <HomeInsights :insights="insights" />
        <HomeTestimonials :clients="clients" />
        <section class="section wrap">
            <SharedCtaBand />
        </section>
    </div>
</template>

<script setup>
    const { stats, highlights, practices, attorneys, insights, clients } = useHome()

    useHead({
        title: 'Ridwan & Co. — Kantor Hukum Korporat & Litigasi',
        meta: [{ name: 'description', content: 'Firma hukum korporasi untuk korporasi dan lembaga keuangan. Layanan hukum berstandar tinggi dengan komitmen pada integritas.' }],
    })
</script>
