<template>
    <section class="section wrap" aria-labelledby="insight-h">
        <div class="sec-head reveal">
            <div>
                <p class="eyebrow">Wawasan</p>
                <h2 id="insight-h" class="sec-head__title" style="margin-top: var(--s3)">Analisis & catatan hukum terbaru.</h2>
            </div>
        </div>

        <div v-if="insights.length" class="grid grid--3">
            <SharedInsightCard v-for="(item, i) in insights" :key="item.title" v-bind="item" :delay="i" />
        </div>
        <div v-else class="state">
            <div class="state__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 9h8M8 13h5" />
                </svg>
            </div>
            <h3>Belum ada artikel dipublikasikan</h3>
            <p>Tim kami sedang menyiapkan wawasan hukum berikutnya. Silakan kembali beberapa saat lagi.</p>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        insights: { type: Array, required: true },
    })
</script>
