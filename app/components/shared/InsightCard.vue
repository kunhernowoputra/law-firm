<template>
    <article class="insight reveal" :data-delay="delay || undefined">
        <NuxtLink :to="to" class="insight__thumb" tabindex="-1" aria-hidden="true">
            <img v-if="imageUrl" :src="imageUrl" :alt="title" loading="lazy" />
        </NuxtLink>
        <div class="insight__cat">
            <span class="tag tag--accent">{{ category }}</span>
        </div>
        <h3 class="insight__title">
            <NuxtLink :to="to">{{ title }}</NuxtLink>
        </h3>
        <p class="insight__excerpt">{{ excerpt }}</p>
        <p class="insight__foot">{{ date }} · {{ readMinutes }} menit baca</p>
    </article>
</template>

<script setup>
    defineProps({
        category: { type: String, required: true },
        title: { type: String, required: true },
        excerpt: { type: String, required: true },
        date: { type: String, required: true },
        readMinutes: { type: Number, required: true },
        to: { type: String, default: '#' },
        imageUrl: { type: String, default: '' },
        delay: { type: Number, default: 0 },
    })
</script>
