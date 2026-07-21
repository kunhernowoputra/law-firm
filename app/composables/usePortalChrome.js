// Judul topbar portal — deklaratif dari route meta (definePageMeta({ portalTitle: '...' })).
export const usePortalChrome = () => {
    const route = useRoute()
    const title = computed(() => route.meta.portalTitle || 'Portal')
    return { title }
}
