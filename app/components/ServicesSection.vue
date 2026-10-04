<template>
  <section class="services" id="services" :aria-label="t('services.label')">
    <div class="services-header">
      <div class="section-label">
        <span class="deco-dot" />
        <span>{{ t('services.label') }}</span>
      </div>
      <h2 class="section-title">
        {{ t('services.title1') }} <span class="c-purple">{{ t('services.title2') }}</span><span class="c-yellow">.</span>
      </h2>
      <p class="section-desc">{{ t('services.desc') }}</p>
    </div>

    <div class="services-grid">
      <article v-for="(s, i) in services" :key="i" class="service-card">
        <div class="service-top">
          <span class="service-icon" aria-hidden="true" v-html="icons[i]" />
          <span class="service-num">{{ String(i + 1).padStart(2, '0') }}</span>
        </div>
        <h3 class="service-title">{{ rt(s.title) }}</h3>
        <p class="service-text">{{ rt(s.text) }}</p>
        <div class="service-tags">
          <span v-for="(tag, j) in s.tags" :key="j" class="service-tag">{{ rt(tag) }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm, rt } = useI18n()

// Copy lives in i18n/locales/*.json (services.items); icons stay here, matched by index.
const services = computed(() => tm('services.items') as any[])

const svg = (paths: string) =>
  `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`

const icons = [
  svg('<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 21h8M12 18v3"/>'),
  svg('<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>'),
  svg('<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>'),
  svg('<path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 12h.01M14 12h.01"/>'),
  svg('<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>'),
  svg('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),
]
</script>
<style scoped>
.services {
  position: relative;
  z-index: 2;
  padding: 140px 60px;
  border-top: 1px solid #1f1f1f;
}

.services-header {
  max-width: 1200px;
  margin: 0 auto 72px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a3a3a3;
}

.deco-dot {
  display: block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ddf53d;
  box-shadow: 0 0 10px rgba(221, 245, 61, 0.65);
  flex-shrink: 0;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.6rem, 5vw, 5.2rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 20px 0 24px;
}

.section-desc {
  max-width: 560px;
  font-size: clamp(0.9rem, 1.3vw, 1.05rem);
  line-height: 1.85;
  color: #a3a3a3;
}

.c-purple { color: #8b4df6; }
.c-yellow { color: #ddf53d; }

.services-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service-card {
  position: relative;
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 20px;
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #8b4df6;
  filter: blur(70px);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.service-card:hover {
  border-color: #8b4df6;
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(139, 77, 246, 0.12);
}

.service-card:hover::before { opacity: 0.35; }

.service-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid #2a2a2a;
  background: rgba(139, 77, 246, 0.08);
  color: #c4a7f7;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.service-card:hover .service-icon {
  color: #ddf53d;
  border-color: rgba(221, 245, 61, 0.35);
}

.service-num {
  font-size: 0.68rem;
  font-weight: 600;
  color: #8b4df6;
  letter-spacing: 0.1em;
}

.service-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.service-text {
  font-size: 0.92rem;
  line-height: 1.8;
  color: #a3a3a3;
  flex: 1;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.service-tag {
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid #2a2a2a;
  color: #6a6a6a;
  transition: border-color 0.25s ease, color 0.25s ease;
}

.service-card:hover .service-tag {
  border-color: rgba(221, 245, 61, 0.35);
  color: #ddf53d;
}

@media (max-width: 1024px) {
  .services { padding: 100px 36px; }
  .services-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .services { padding: 80px 24px; }
  .services-header { margin-bottom: 52px; }
  .services-grid { grid-template-columns: 1fr; gap: 16px; }
}
</style>
