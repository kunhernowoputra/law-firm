<template>
    <div class="alert alert--ok" style="margin-bottom: var(--s5)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
        <span>Akses dokumen ini terbatas untuk Anda dan advokat yang ditugaskan pada kasus {{ activeCase.no }}.</span>
    </div>
</template>

<script setup>
    const { activeCase } = useDokumen()
</script>
