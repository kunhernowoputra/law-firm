<template>
    <div class="toast" :class="{ 'is-show': toast.visible }" role="status" aria-live="polite">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
        </svg>
        <span>{{ toast.message }}</span>
    </div>
</template>

<script setup>
    const { toast } = useToast()
</script>
