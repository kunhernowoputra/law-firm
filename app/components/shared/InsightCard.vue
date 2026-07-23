<template>
    <article class="insight reveal" :data-delay="delay || undefined">
        <NuxtLink :to="to" class="insight__thumb" tabindex="-1" aria-hidden="true">
            <NuxtImg v-if="imageUrl" :src="imageUrl" :alt="title" width="640" height="400" loading="lazy" />
            <span v-else class="insight__thumb-fallback">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 9h8M8 13h5" />
                </svg>
            </span>
        </NuxtLink>
        <div class="insight__cat">
            <span class="tag tag--accent">{{ category }}</span>
        </div>
        <h3 class="insight__title">
            <NuxtLink :to="to">{{ title }}</NuxtLink>
        </h3>
        <p class="insight__excerpt">{{ excerpt }}</p>
    </article>
</template>

<script setup>
    defineProps({
        category: { type: String, required: true },
        title: { type: String, required: true },
        excerpt: { type: String, required: true },
        to: { type: String, default: '#' },
        imageUrl: { type: String, default: '' },
        delay: { type: Number, default: 0 },
    })
</script>
