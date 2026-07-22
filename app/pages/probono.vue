<template>
    <div>
        <section class="section--tight wrap" style="padding-top: var(--s8)">
            <p class="eyebrow reveal">Pro Bono</p>
            <h1 class="reveal" data-delay="1" style="font-size: var(--fs-h1); max-width: 24ch; margin-top: var(--s4)">{{ program.title }}.</h1>
            <div class="reveal" data-delay="2" style="margin-top: var(--s5)">
                <ProbonoWhatsappCta :href="whatsappHref" label="Ajukan via WhatsApp" />
            </div>
        </section>

        <section class="section wrap">
            <ProbonoProgram :program="program" :eligibility="eligibility" :areas="areas" />
        </section>

        <section v-if="tiles.length" class="section wrap">
            <p class="eyebrow reveal">Komitmen Kami</p>
            <div class="reveal" data-delay="1" style="margin-top: var(--s5)">
                <SharedStatTiles :tiles="tiles" />
            </div>
        </section>
    </div>
</template>

<script setup>
    const { program, eligibility, areas, tiles, whatsappHref } = useProbono()

    useHead({
        title: 'Pro Bono — Ridwan & Co.',
        meta: [{ name: 'description', content: 'Program bantuan hukum cuma-cuma Ridwan & Co. — syarat kelayakan, area yang dibantu, dan cara mengajukan via WhatsApp.' }],
    })
</script>
