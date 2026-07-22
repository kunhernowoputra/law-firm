<template>
    <article class="card reveal" :data-delay="delay || undefined" style="margin-top: var(--s5)">
        <span class="practice__num">{{ area.no }}</span>
        <h2 style="font-size: var(--fs-h2); margin-top: var(--s2)">{{ area.name }}</h2>
        <p class="prose" style="color: var(--ink-3); margin-top: var(--s4); font-size: var(--fs-sm)">{{ area.desc }}</p>
        <div class="practice__tags" style="margin-top: var(--s5)">
            <span v-for="tag in area.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <NuxtLink class="link-arrow" style="margin-top: var(--s5)" :to="{ path: '/konsultasi', query: { kategori: area.route } }">
            Konsultasi bidang ini
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </NuxtLink>
    </article>
</template>

<script setup>
    defineProps({
        area: { type: Object, required: true },
        delay: { type: Number, default: 0 },
    })
</script>
