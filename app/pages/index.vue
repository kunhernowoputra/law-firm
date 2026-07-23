<template>
    <div>
        <HomeHero :stats="stats" />
        <HomeAbout :highlights="highlights" />
        <HomeTeam :attorneys="attorneys" />
        <HomeInsights :insights="insights" />
        <HomeTestimonials :clients="clients" />
        <section class="section wrap">
            <SharedCtaBand />
        </section>
    </div>
</template>

<script setup>
    const { stats, highlights, attorneys, insights, clients } = useHome()

    useSeo({
        title: 'Ridwan & Co. — Kantor Hukum Korporat & Litigasi',
        description: 'Firma hukum korporasi untuk korporasi dan lembaga keuangan. Layanan hukum berstandar tinggi dengan komitmen pada integritas.',
    })

    const site = useSiteConfig()
    useHead({
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'LegalService',
                    name: 'Ridwan & Co. Law Office',
                    image: `${site.url}/assets/hero/justice-statue.jpg`,
                    url: site.url,
                    email: 'rncolawoffice@gmail.com',
                    telephone: '+6285691248221',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: 'Puri Beta 1, Town Center, Lot 7 No. 10, RT 004 / RW 012, Kel. Larangan Utara, Kec. Larangan',
                        addressLocality: 'Kota Tangerang',
                        addressRegion: 'Banten',
                        postalCode: '15154',
                        addressCountry: 'ID',
                    },
                    openingHoursSpecification: {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        opens: '09:00',
                        closes: '17:00',
                    },
                    areaServed: 'ID',
                }),
            },
        ],
    })
</script>
