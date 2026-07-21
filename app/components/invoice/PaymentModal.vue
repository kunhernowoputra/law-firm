<template>
    <div ref="modalRef" class="modal-scrim" :class="{ 'is-open': modalOpen }" :inert="!modalOpen" role="dialog" aria-modal="true" aria-labelledby="pay-title" @click.self="closeModal">
        <div class="modal">
            <div class="modal__head">
                <h3 id="pay-title">Bayar invoice</h3>
                <p class="row__sub" style="margin-top: 4px">{{ current ? `${current.id} — ${formatCurrency(current.amount)}` : '' }}</p>
            </div>
            <div class="modal__body stack">
                <div class="field">
                    <label class="label">Metode pembayaran</label>
                    <div class="stack" style="--s4: 10px">
                        <label class="choice" style="display: block">
                            <input type="radio" name="method" value="va" :checked="method === 'va'" @change="setMethod('va')" />
                            <span class="choice__box"><b>Virtual Account (BCA / Mandiri / BNI)</b><small>Konfirmasi otomatis dalam beberapa menit</small></span>
                        </label>
                        <label class="choice" style="display: block">
                            <input type="radio" name="method" value="card" :checked="method === 'card'" @change="setMethod('card')" />
                            <span class="choice__box"><b>Kartu Kredit / Debit</b><small>Visa, Mastercard</small></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="modal__foot">
                <button class="btn btn--ghost" @click="closeModal">Batal</button>
                <button class="btn btn--primary" :class="{ 'is-loading': isProcessing }" :disabled="isProcessing" @click="pay">
                    <span v-if="isProcessing" class="btn__spinner" aria-hidden="true" />
                    <span class="btn__label">{{ isProcessing ? 'Memproses…' : 'Lanjut Bayar' }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { modalOpen, current, method, isProcessing, closeModal, setMethod, pay } = useInvoice()
    const modalRef = ref(null)
    useFocusTrap(modalRef, modalOpen, closeModal)
</script>
