<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, locale, locales } = useI18n()
const lang = computed(() => locales.value.find((l) => l.code === locale.value)?.language ?? locale.value)

useHead({
  htmlAttrs: { lang },
  meta: [{ name: 'description', content: () => t('meta.description') }],
})
</script>
