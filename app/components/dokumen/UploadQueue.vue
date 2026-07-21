<template>
    <div class="panel" style="margin-top: var(--s5)">
        <div class="panel__body">
            <div v-for="item in queue" :key="item.id" class="uprow" :class="{ 'is-error': item.status === 'error' }">
                <span class="row__icon" :style="item.status === 'error' ? 'background:var(--bad-soft);color:var(--bad)' : undefined">
                    <svg v-if="item.status === 'error'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v4M12 16h.01" />
                    </svg>
                    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
                        <path d="M14 3v6h6" />
                    </svg>
                </span>
                <div class="row__main">
                    <p class="row__name">{{ item.name }}</p>
                    <p class="row__sub" :style="item.status === 'error' ? 'color:var(--bad)' : undefined">
                        <template v-if="item.status === 'uploading'">{{ item.sizeLabel }} · mengunggah… {{ item.progress }}%</template>
                        <template v-else-if="item.status === 'done'">{{ item.sizeLabel }} · <span style="color: var(--ok)">berhasil diunggah</span></template>
                        <template v-else>{{ item.message }}</template>
                    </p>
                    <div class="uprow__bar"><i :style="`width:${item.progress}%`" /></div>
                </div>
                <button v-if="item.status !== 'error'" class="icon-btn" aria-label="Batalkan unggahan" @click="removeUpload(item.id)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
                <button v-else class="btn btn--ghost btn--sm" style="border: 1px solid var(--line)" @click="removeUpload(item.id)">
                    <svg v-if="item.action === 'retry'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px">
                        <path d="M23 4v6h-6M1 20v-6h6" />
                        <path d="M3.5 9a9 9 0 0114.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0020.5 15" />
                    </svg>
                    {{ item.action === 'replace' ? 'Ganti berkas' : 'Coba lagi' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { queue, removeUpload } = useDokumen()
</script>
