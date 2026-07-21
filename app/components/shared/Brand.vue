<template>
    <component :is="plain ? 'span' : 'NuxtLink'" class="brand" :to="plain ? undefined : to" :aria-label="plain ? undefined : 'Ridwan & Co. — Beranda'" :style="plain ? 'pointer-events:none' : undefined">
        <img class="brand__mark" src="/assets/logo.jpeg" alt="" aria-hidden="true" width="32" height="32" />
        <span class="brand__name">Ridwan<span>&nbsp;&amp;</span> Co.<small v-if="showSub" class="brand__sub">Law Office</small></span>
    </component>
</template>

<script setup>
    defineProps({
        to: { type: String, default: '/' },
        showSub: { type: Boolean, default: false },
        plain: { type: Boolean, default: false },
    })
</script>
