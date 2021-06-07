/**
 * Returns a string containing only words, digits, and whitespace
 * @param value
 */
export function sanitizeInput(value: string) {
    return value?.replace(/[^\w\s]/gi, '') || '';
}
