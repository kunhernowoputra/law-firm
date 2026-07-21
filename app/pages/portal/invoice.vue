<template>
    <div>
        <template v-if="invoices.length">
            <SharedStatTiles :tiles="stats" style="grid-template-columns: repeat(3, 1fr)" />

            <div class="panel" style="margin-top: var(--s6)">
                <div class="panel__head">
                    <h3 style="font-size: 1rem">Daftar invoice</h3>
                    <span class="row__sub">{{ invoices.length }} invoice</span>
                </div>
                <div class="rows panel__body--flush">
                    <InvoiceRow v-for="inv in invoices" :key="inv.id" :invoice="inv" />
                </div>
            </div>
            <p class="hint" style="margin-top: var(--s4)">Pembayaran diproses melalui payment gateway tersertifikasi. Ridwan & Co. tidak menyimpan data kartu Anda.</p>
        </template>

        <div v-else class="panel">
            <div class="state">
                <div class="state__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                        <path d="M6 2h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" />
                        <path d="M9 13h6M9 17h6" />
                    </svg>
                </div>
                <h3>Tidak ada invoice</h3>
                <p>Belum ada tagihan yang diterbitkan untuk akun Anda. Invoice akan muncul di sini beserta status pembayarannya.</p>
            </div>
        </div>

        <InvoicePaymentModal />
    </div>
</template>

<script setup>
    definePageMeta({ layout: 'portal', portalTitle: 'Invoice' })

    const { invoices, stats } = useInvoice()

    useHead({ title: 'Invoice — Portal Klien · Ridwan & Co.', meta: [{ name: 'robots', content: 'noindex' }] })
</script>
