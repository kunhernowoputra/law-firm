<template>
    <fieldset v-show="step === 3" class="step" style="border: 0; padding: 0; margin: 0">
        <p class="label" style="font-size: var(--fs-h3); font-family: var(--font-display); color: var(--ink)">Pilih tanggal</p>
        <p class="hint" style="margin-bottom: var(--s4)">Tanggal lampau dinonaktifkan. Slot yang penuh tidak dapat dipilih.</p>
        <div class="daypick" role="radiogroup" aria-label="Tanggal konsultasi">
            <button v-for="day in days" :key="day.key" type="button" class="day" :class="{ 'is-selected': form.pickedDay === day.value }" :disabled="day.disabled" :aria-label="day.label || undefined" @click="pickDay(day.value)">
                <span>{{ day.dow }}</span
                ><b>{{ day.date }}</b
                ><span>{{ day.suffix }}</span>
            </button>
        </div>

        <p class="label" style="font-size: var(--fs-h3); font-family: var(--font-display); color: var(--ink); margin-top: var(--s6)">Pilih jam</p>
        <p class="hint" style="margin-bottom: var(--s4)">Zona waktu WIB (GMT+7).</p>
        <div class="slots" role="radiogroup" aria-label="Jam konsultasi">
            <button v-for="slot in slots" :key="slot.time" type="button" class="slot" :class="{ 'is-selected': form.pickedSlot === slot.time }" :disabled="slot.disabled" :aria-label="slot.disabled ? `${slot.time} penuh` : undefined" @click="pickSlot(slot.time)">
                {{ slot.time }}
            </button>
        </div>
        <p v-if="errors.slot" class="field-error" style="display: block; margin-top: var(--s3)">Pilih tanggal dan jam terlebih dahulu.</p>

        <label class="field" style="display: flex; gap: var(--s3); align-items: flex-start; margin-top: var(--s6)">
            <input v-model="form.consent" type="checkbox" style="width: 20px; height: 20px; margin-top: 2px; accent-color: var(--accent)" />
            <span style="font-size: var(--fs-sm); color: var(--ink-2)"> Saya memahami bahwa konsultasi ini bersifat rahasia dan konfirmasi jadwal akan dikirim ke email saya. <span class="req">*</span> </span>
        </label>
        <p v-if="errors.consent" class="field-error" style="display: block; margin-top: var(--s2)">Mohon setujui pernyataan di atas.</p>

        <div style="display: flex; justify-content: space-between; margin-top: var(--s6)">
            <button type="button" class="btn btn--ghost" @click="prev">Kembali</button>
            <button type="button" class="btn btn--primary" :class="{ 'is-loading': isSubmitting }" :disabled="isSubmitting" @click="submit">
                <span v-if="isSubmitting" class="btn__spinner" aria-hidden="true" />
                <span class="btn__label">{{ isSubmitting ? 'Memproses…' : 'Kirim & Booking' }}</span>
            </button>
        </div>
    </fieldset>
</template>

<script setup>
    const { step, days, slots, form, errors, isSubmitting, prev, pickDay, pickSlot, submit } = useKonsultasi()
</script>
