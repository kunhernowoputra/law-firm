<template>
    <div>
        <DokumenTabs />
        <DokumenAccessNotice />
        <DokumenDropzone :empty="!docs.length" />
        <DokumenUploadQueue v-if="queue.length" />
        <div v-if="docs.length" class="panel" style="margin-top: var(--s5)">
            <div class="panel__head">
                <h3 style="font-size: 1rem">
                    Berkas kasus <span class="row__sub" style="display: inline">· {{ docs.length }} berkas</span>
                </h3>
            </div>
            <div class="rows panel__body--flush">
                <DokumenDocRow v-for="doc in docs" :key="doc.name" :doc="doc" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({ layout: 'portal', portalTitle: 'Dokumen' })

    const { docs, queue } = useDokumen()

    useHead({ title: 'Dokumen — Portal Klien · Ridwan & Co.', meta: [{ name: 'robots', content: 'noindex' }] })
</script>
