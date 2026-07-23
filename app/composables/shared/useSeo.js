export const useSeo = ({ title, description, image = '/assets/hero/justice-statue.jpg' }) => {
    const route = useRoute()
    const site = useSiteConfig()
    const url = `${site.url}${route.path}`
    const imageUrl = image.startsWith('http') ? image : `${site.url}${image}`

    useHead({
        title,
        meta: [
            { name: 'description', content: description },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: url },
            { property: 'og:image', content: imageUrl },
            { name: 'twitter:card', content: 'summary_large_image' },
        ],
        link: [{ rel: 'canonical', href: url }],
    })
}
