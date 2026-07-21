<template>
    <section class="section wrap" aria-labelledby="profil-h">
        <div class="grid grid--2" style="align-items: start; gap: var(--s8)">
            <div class="reveal">
                <p class="eyebrow">Tentang Firma</p>
                <h2 id="profil-h" class="sec-head__title" style="margin-top: var(--s4); font-size: var(--fs-h1)">Dibangun di atas kredibilitas, bukan kebisingan.</h2>
            </div>
            <div class="reveal" data-delay="1">
                <div class="prose">
                    <p>Wirasena & Partners adalah firma hukum menengah yang berdiri sejak 2004. Kami percaya bahwa nasihat hukum terbaik lahir dari ketelitian, pemahaman industri klien, dan penghormatan mutlak terhadap kerahasiaan.</p>
                    <p>Setiap mandat ditangani oleh tim yang dipimpin advokat senior, dengan jalur komunikasi yang jelas dan dokumentasi yang tertib melalui portal klien kami.</p>
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
