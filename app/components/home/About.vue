<template>
    <section class="section wrap" aria-labelledby="profil-h">
        <div class="grid grid--2" style="align-items: start; gap: var(--s8)">
            <div class="reveal">
                <p class="eyebrow">Tentang Firma</p>
                <h2 id="profil-h" class="sec-head__title" style="margin-top: var(--s4); font-size: var(--fs-h1)">Menghadirkan Kepastian Hukum Melalui Pendekatan Strategis dan Tepercaya.</h2>
            </div>
            <div class="reveal" data-delay="1">
                <div class="prose">
                    <p>Ridwan & Co. hadir mendampingi pelaku usaha dan institusi dalam mengelola risiko serta menyelesaikan berbagai tantangan hukum yang kompleks. Pendekatan kami berfokus pada ketepatan analisis hukum dan pemahaman menyeluruh terhadap kebutuhan bisnis klien.</p>
                    <p>Seluruh layanan hukum kami ditangani oleh tim profesional di bawah pengawasan Advokat Senior, dengan sistem komunikasi yang jelas dan tata kelola dokumentasi yang tertib serta terintegrasi.</p>
                </div>
                <div class="grid grid--2" style="margin-top: var(--s6); gap: var(--s5)">
                    <div v-for="item in highlights" :key="item.title">
                        <b style="color: var(--ink); font-family: var(--font-display); font-size: 1.1rem">{{ item.title }}</b>
                        <p style="color: var(--ink-3); font-size: var(--fs-sm); margin-top: 6px">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        highlights: { type: Array, required: true },
    })
</script>
