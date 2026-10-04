// Messages include our own highlight markup (rendered with v-html), so the
// runtime "HTML in message" XSS warning doesn't apply.
export default defineI18nConfig(() => ({
  warnHtmlMessage: false,
}))
