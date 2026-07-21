<template>
    <div class="panel">
        <div class="panel__head">
            <div>
                <div style="display: flex; align-items: center; gap: var(--s3)">
                    <h3>{{ caseItem.title }}</h3>
                    <span class="tag" :class="`tag--${caseItem.status.tone}`"><span class="tag__dot" />{{ caseItem.status.label }}</span>
                </div>
                <p class="row__sub" style="margin-top: 6px">No. Perkara · {{ caseItem.no }} · {{ caseItem.area }}</p>
            </div>
            <NuxtLink to="/portal/dokumen" class="btn btn--ghost btn--sm" style="border: 1px solid var(--line)">Dokumen</NuxtLink>
        </div>
        <div class="panel__body">
            <p style="font-family: var(--font-mono); font-size: var(--fs-xs); letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-4); margin-bottom: var(--s5)">Tahapan Kasus</p>
            <DashboardTimeline :steps="caseItem.timeline" />
        </div>
    </div>
</template>

<script setup>
    defineProps({
        caseItem: { type: Object, required: true },
    })
</script>
