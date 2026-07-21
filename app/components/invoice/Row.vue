<template>
    <div class="row">
        <span class="row__icon" :style="invoice.status === 'failed' ? 'background:var(--bad-soft);color:var(--bad)' : invoice.status === 'paid' ? 'background:var(--ok-soft);color:var(--ok)' : undefined">
            <svg v-if="invoice.status === 'paid'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 6L9 17l-5-5" /></svg>
            <svg v-else-if="invoice.status === 'failed'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4M12 16h.01" />
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                <path d="M6 2h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" />
                <path d="M9 13h6M9 17h6" />
            </svg>
        </span>
        <div class="row__main">
            <p class="row__name">{{ invoice.title }}</p>
            <p class="row__sub" :style="invoice.status === 'failed' ? 'color:var(--bad)' : undefined">{{ invoice.meta }}</p>
        </div>
        <div class="row__end">
            <span style="font-family: var(--font-mono); font-weight: 500" :style="`color:var(--${invoice.status === 'paid' ? 'ink-3' : 'ink'})`">{{ formatCurrency(invoice.amount) }}</span>
            <span class="tag" :class="`tag--${statusTone(invoice.status)}`"><span class="tag__dot" />{{ statusLabel(invoice.status) }}</span>
            <button v-if="invoice.status === 'unpaid'" class="btn btn--primary btn--sm" @click="openPay(invoice)">Bayar</button>
            <button v-else-if="invoice.status === 'failed'" class="btn btn--outline btn--sm" @click="openPay(invoice)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px">
                    <path d="M23 4v6h-6M1 20v-6h6" />
                    <path d="M3.5 9a9 9 0 0114.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0020.5 15" />
                </svg>
                Coba lagi
            </button>
            <button v-else class="btn btn--ghost btn--sm" disabled aria-disabled="true" title="Invoice sudah lunas">Lunas</button>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        invoice: { type: Object, required: true },
    })

    const { openPay, statusTone, statusLabel } = useInvoice()
</script>
