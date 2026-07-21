<template>
    <label class="dropzone" :class="{ 'is-drag': isDragging }" for="dok-filepick" @dragover.prevent="setDrag(true)" @dragenter.prevent="setDrag(true)" @dragleave="setDrag(false)" @drop.prevent="onDrop">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M12 16V4M7 9l5-5 5 5" />
            <path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" />
        </svg>
        <b>{{ empty ? 'Belum ada dokumen pada kasus ini' : 'Tarik berkas ke sini atau klik untuk unggah' }}</b>
        <small>{{ empty ? 'Unggah berkas pertama — PDF, JPG, atau PNG, maksimum 10 MB.' : 'PDF, JPG, atau PNG · maksimum 10 MB per berkas' }}</small>
        <input id="dok-filepick" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple hidden @change="onChange" />
    </label>
</template>

<script setup>
    defineProps({
        empty: { type: Boolean, default: false },
    })

    const { isDragging, setDrag, onChange, onDrop } = useDokumen()
</script>
