const UNITS = ['B', 'KB', 'MB', 'GB']

// Format ukuran file dari byte (mis. 2411724 → "2.3 MB").
export const formatBytes = (bytes) => {
    if (!bytes) return '0 B'
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), UNITS.length - 1)
    const value = bytes / 1024 ** i
    return `${i === 0 ? value : value.toFixed(1)} ${UNITS[i]}`
}
