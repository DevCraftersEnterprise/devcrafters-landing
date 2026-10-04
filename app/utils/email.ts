// Email addresses are stored reversed + base64 so they never appear as plain
// text in the HTML or JS bundle, which keeps them away from scraping bots.
// They are only decoded in the browser after a user interaction.
// To encode a new one: btoa([...'name@domain.com'].reverse().join(''))
export const ENCODED_EMAILS = {
  devcrafters: 'bW9jLmxpYW1nQGVzaXJwcmV0bmUuc3JldGZhcmN2ZWQ=',
  sergio: 'bW9jLmxpYW1nQGNzaS5nYm9pZ3Jlcw==',
} as const

export function decodeEmail(encoded: string): string {
  return [...atob(encoded)].reverse().join('')
}
