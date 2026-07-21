<template>
    <div class="row">
        <span class="row__icon">
            <svg v-if="doc.kind === 'image'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.7">
                <path d="M4 16l4.6-4.6a2 2 0 012.8 0L16 16m-2-2l1.6-1.6a2 2 0 012.8 0L20 14" />
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="9" cy="9" r="1.5" />
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.7">
                <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
                <path d="M14 3v6h6" />
            </svg>
        </span>
        <div class="row__main">
            <p class="row__name">{{ doc.name }}</p>
            <p class="row__sub">{{ doc.type }} · {{ formatBytes(doc.size) }} · diunggah {{ doc.uploader }} · {{ doc.date }}</p>
        </div>
        <div class="row__end">
            <span class="tag" :class="`tag--${doc.status.tone}`"><span class="tag__dot" />{{ doc.status.label }}</span>
            <button class="icon-btn" aria-label="Unduh">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M12 3v12M7 10l5 5 5-5" />
                    <path d="M4 21h16" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        doc: { type: Object, required: true },
    })
</script>
