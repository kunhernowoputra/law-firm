<template>
    <component :is="plain ? 'span' : 'NuxtLink'" class="brand" :to="plain ? undefined : to" :aria-label="plain ? undefined : 'Wirasena & Partners — Beranda'" :style="plain ? 'pointer-events:none' : undefined">
        <svg class="brand__mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="30" height="30" rx="2" stroke="currentColor" stroke-width="1.4" />
            <path d="M7 8.5l2.8 15L14 8.5l4.2 15L21 8.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.5 8.5v15" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" />
        </svg>
        <span class="brand__name">Wirasena<span>&nbsp;&amp;</span> Partners<small v-if="showSub" class="brand__sub">Attorneys at Law</small></span>
    </component>
</template>

<script setup>
    defineProps({
        to: { type: String, default: '/' },
        showSub: { type: Boolean, default: false },
        plain: { type: Boolean, default: false },
    })
</script>
