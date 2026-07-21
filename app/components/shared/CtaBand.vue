<template>
    <div class="cta-band reveal">
        <div class="cta-band__glow" aria-hidden="true" />
        <p v-if="eyebrow" class="eyebrow" style="color: rgba(255, 255, 255, 0.6)">{{ eyebrow }}</p>
        <h2 style="margin-top: var(--s3)">{{ title }}</h2>
        <p>{{ text }}</p>
        <NuxtLink class="btn btn--primary" :to="ctaTo">{{ ctaLabel }}</NuxtLink>
    </div>
</template>

<script setup>
    defineProps({
        eyebrow: { type: String, default: 'Langkah Berikutnya' },
        title: { type: String, default: 'Ceritakan situasi Anda. Kami akan arahkan ke advokat yang tepat.' },
        text: { type: String, default: 'Isi form konsultasi singkat dan pilih jadwal yang sesuai. Kerahasiaan Anda terjaga sejak pesan pertama.' },
        ctaLabel: { type: String, default: 'Konsultasi Sekarang' },
        ctaTo: { type: String, default: '/konsultasi' },
    })
</script>
