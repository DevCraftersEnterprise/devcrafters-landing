// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'DevCrafters',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@700;800;900&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    // Spanish lives at "/", English under "/en"
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'es', language: 'es-MX', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    // Messages carry highlight markup (<span class="hl-*">) rendered with v-html.
    // They are static and authored by us, never user input.
    compilation: { strictMessage: false },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'dc_lang',
      redirectOn: 'root',
    },
  },
  runtimeConfig: {
    public: {
      // FormSubmit random alias (NUXT_PUBLIC_FORMSUBMIT_ID); empty falls back to the encoded inbox.
      formsubmitId: '',
    },
  },
})
