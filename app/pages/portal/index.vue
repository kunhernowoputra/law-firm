<template>
    <div>
        <template v-if="cases.length">
            <div style="margin-bottom: var(--s6)">
                <p style="color: var(--ink-3); font-size: var(--fs-sm)">Selamat siang,</p>
                <p style="font-family: var(--font-display); font-size: 1.5rem; color: var(--ink)">{{ client.name }}</p>
            </div>

            <SharedStatTiles :tiles="stats" />

            <div class="grid" style="grid-template-columns: 1.7fr 1fr; gap: var(--s5); margin-top: var(--s6)">
                <DashboardCaseCard :case-item="mainCase" />
                <div class="stack">
                    <DashboardAssignees :advokat="mainCase.advokat" />
                    <div class="panel">
                        <div class="panel__head" style="border: 0">
                            <div>
                                <div style="display: flex; align-items: center; gap: var(--s3)">
                                    <h3 style="font-size: 1rem">{{ secondCase.title }}</h3>
                                    <span class="tag" :class="`tag--${secondCase.status.tone}`"><span class="tag__dot" />{{ secondCase.status.label }}</span>
                                </div>
                                <p class="row__sub" style="margin-top: 6px">{{ secondCase.no }} · {{ secondCase.area }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <DashboardEmpty v-else />
    </div>
</template>

<script setup>
    definePageMeta({ layout: 'portal', portalTitle: 'Dashboard' })

    const { client, stats, cases, mainCase, secondCase } = useDashboard()

    useHead({ title: 'Dashboard — Portal Klien · Ridwan & Co.', meta: [{ name: 'robots', content: 'noindex' }] })
</script>
