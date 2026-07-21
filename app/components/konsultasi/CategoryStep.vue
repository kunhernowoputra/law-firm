<template>
    <fieldset v-show="step === 1" class="step" style="border: 0; padding: 0; margin: 0">
        <legend class="label" style="font-size: var(--fs-h3); font-family: var(--font-display); color: var(--ink); margin-bottom: var(--s4)">Masalah Anda paling dekat dengan…</legend>
        <div class="choice-grid" :class="{ 'field--error': errors.kategori }" role="radiogroup" aria-label="Kategori masalah">
            <label v-for="cat in categories" :key="cat.value" class="choice">
                <input v-model="form.kategori" type="radio" name="kategori" :value="cat.value" @change="clearError('kategori')" />
                <span class="choice__box"
                    ><b>{{ cat.title }}</b
                    ><small>{{ cat.sub }}</small></span
                >
            </label>
        </div>
        <p v-if="errors.kategori" class="field-error" style="display: flex">Silakan pilih satu kategori.</p>
        <div style="display: flex; justify-content: flex-end; margin-top: var(--s6)">
            <button type="button" class="btn btn--primary" @click="next">Lanjut</button>
        </div>
    </fieldset>
</template>

<script setup>
    const { categories, step, form, errors, clearError, next } = useKonsultasi()
</script>
