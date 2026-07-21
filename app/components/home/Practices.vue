<template>
    <section class="section wrap" aria-labelledby="praktik-h">
        <div class="sec-head reveal">
            <div>
                <p class="eyebrow">Layanan</p>
                <h2 id="praktik-h" class="sec-head__title" style="margin-top: var(--s3)">Enam area praktik, satu standar.</h2>
            </div>
            <NuxtLink class="link-arrow" to="/praktik">
                Lihat semua area
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </NuxtLink>
        </div>
        <div class="practice reveal" data-delay="1">
            <NuxtLink v-for="item in practices" :key="item.no" class="practice__row" to="/praktik">
                <span class="practice__num">{{ item.no }}</span>
                <span>
                    <span class="practice__name">{{ item.name }}</span>
                    <span class="practice__desc">{{ item.desc }}</span>
                </span>
                <span class="practice__cta link-arrow">
                    Detail
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        practices: { type: Array, required: true },
    })
</script>
