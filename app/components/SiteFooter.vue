<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <NuxtLinkLocale class="logo" to="/">
          Dev<span class="logo-accent">Crafters</span><span class="logo-dot">.</span>
        </NuxtLinkLocale>
        <p class="footer-tagline">{{ t('nav.tagline') }}</p>
      </div>

      <nav class="footer-nav" :aria-label="t('footer.aria')">
        <NuxtLinkLocale v-for="s in sections" :key="s" :to="{ path: '/', hash: `#${s}` }">
          {{ t(`nav.${s}`) }}
        </NuxtLinkLocale>
      </nav>

      <div class="footer-links">
        <EmailLink :encoded="ENCODED_EMAILS.devcrafters">{{ t('footer.write') }}</EmailLink>
        <a href="https://github.com/DevCraftersEnterprise" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>{{ t('footer.rights', { year }) }}</span>
      <span v-html="t('footer.madeWith')" />
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
const sections = ['services', 'work', 'about', 'team', 'contact']
</script>
<style scoped>
.footer {
  position: relative;
  z-index: 2;
  border-top: 1px solid #1f1f1f;
  padding: 64px 60px 32px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  align-items: center;
}

.logo {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #ffffff;
}

.logo-accent { color: #8b4df6; }
.logo-dot { color: #ddf53d; }
.c-purple { color: #8b4df6; }
.c-yellow { color: #ddf53d; }

.footer-tagline {
  margin-top: 8px;
  font-size: 0.72rem;
  color: #6a6a6a;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.footer-nav {
  display: flex;
  gap: 28px;
}

.footer-nav a,
.footer-links a {
  font-size: 0.85rem;
  color: #a3a3a3;
  transition: color 0.2s ease;
}

.footer-nav a:hover,
.footer-links a:hover { color: #ddf53d; }

.footer-links {
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.footer-bottom {
  max-width: 1200px;
  margin: 48px auto 0;
  padding-top: 24px;
  border-top: 1px solid #1a1a1a;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.78rem;
  color: #6a6a6a;
}

@media (max-width: 1024px) {
  .footer { padding: 56px 36px 28px; }
  .footer-inner { grid-template-columns: 1fr; text-align: center; justify-items: center; }
  .footer-links { justify-self: center; align-items: center; }
  .footer-nav { flex-wrap: wrap; justify-content: center; gap: 18px 24px; }
}

@media (max-width: 768px) {
  .footer { padding: 48px 24px 24px; }
  .footer-bottom { flex-direction: column; align-items: center; text-align: center; }
}
</style>
