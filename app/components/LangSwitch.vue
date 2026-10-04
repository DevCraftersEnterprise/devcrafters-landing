<template>
  <div class="lang-switch" role="group" :aria-label="t('lang.label')">
    <NuxtLink
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      class="lang-opt"
      :class="{ 'lang-opt--on': l.code === locale }"
      :aria-current="l.code === locale ? 'true' : undefined"
      :aria-label="t('lang.switchTo', { lang: l.name })"
      :lang="l.language"
    >
      {{ l.code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style scoped>
.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border: 1px solid #2a2a2a;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.02);
}

.lang-opt {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #6a6a6a;
  padding: 6px 11px;
  border-radius: 100px;
  transition: color 0.2s ease, background 0.2s ease;
}

.lang-opt:hover { color: #ffffff; }

.lang-opt--on,
.lang-opt--on:hover {
  color: #0e0e0e;
  background: #ddf53d;
}
</style>
