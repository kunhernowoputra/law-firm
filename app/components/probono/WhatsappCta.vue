<template>
    <a class="btn btn--primary" :href="href" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M3 21l1.65-4.95A9 9 0 1112 21a8.96 8.96 0 01-4.95-1.65L3 21z" />
            <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5" />
        </svg>
        {{ label }}
    </a>
</template>

<script setup>
    defineProps({
        href: { type: String, required: true },
        label: { type: String, default: 'Chat WhatsApp' },
    })
</script>
