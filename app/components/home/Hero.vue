<template>
    <section class="hero">
        <div class="hero__bg" aria-hidden="true">
            <div class="hero__grad" />
            <div class="facade" />
        </div>
        <div class="wrap hero__inner">
            <p class="eyebrow eyebrow--accent reveal">Firma Hukum Multi-Praktik · Jakarta</p>
            <h1 class="hero__title reveal" data-delay="1">Nasihat hukum yang <em>tenang</em>, presisi, dan tepercaya.</h1>
            <p class="hero__lead reveal" data-delay="2">Kami mendampingi korporasi, institusi keuangan, dan pemilik usaha melewati transaksi paling kompleks hingga sengketa paling menuntut — dengan kerahasiaan yang kami jaga tanpa kompromi.</p>
            <div class="hero__actions reveal" data-delay="3">
                <NuxtLink class="btn btn--primary" to="/konsultasi">Jadwalkan Konsultasi</NuxtLink>
                <NuxtLink class="btn btn--outline" to="/praktik">Area Praktik Kami</NuxtLink>
            </div>
            <div class="hero__meta reveal" data-delay="4">
                <div v-for="stat in stats" :key="stat.label" class="hero__stat">
                    <b>{{ stat.value }}</b
                    ><span>{{ stat.label }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        stats: { type: Array, required: true },
    })
</script>
