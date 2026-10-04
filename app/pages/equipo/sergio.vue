<template>
  <div class="profile-page">

    <header class="profile-nav">
      <NuxtLinkLocale to="/" class="brand">
        Dev<span class="brand-accent">Crafters</span><span class="brand-dot">.</span>
      </NuxtLinkLocale>
      <div class="nav-right">
        <div class="breadcrumb">
          <NuxtLinkLocale :to="{ path: '/', hash: '#team' }" class="bc-link">{{ t('nav.team') }}</NuxtLinkLocale>
          <span class="bc-sep" aria-hidden="true">/</span>
          <span class="bc-current">{{ name }}</span>
        </div>
        <LangSwitch />
      </div>
    </header>

    <main class="profile-hero">

      <p class="greeting">{{ t('profile.greeting') }}</p>

      <!-- ── Left ── -->
      <div class="profile-left">
        <h1 class="profile-name">Sergio<br /><span class="name-last">Barreras<span class="name-dot">.</span></span></h1>
        <p class="profile-role">{{ t('profile.sergio.role') }} <span class="role-sep">·</span> <span class="role-loc">{{ t('profile.sergio.location') }}</span></p>

        <p class="status-badge">
          <span class="status-dot" aria-hidden="true" />
          {{ t('profile.available') }}
        </p>

        <p class="profile-bio" v-html="t('profile.sergio.bio')" />

        <div class="profile-tags">
          <span class="ptag">Angular</span>
          <span class="ptag">Vue / Nuxt</span>
          <span class="ptag">NestJS</span>
          <span class="ptag">TypeScript</span>
          <span class="ptag">PostgreSQL</span>
        </div>

        <div class="profile-socials">
          <a href="https://github.com/sergiobytes" target="_blank" rel="noopener noreferrer" class="social-btn" :aria-label="t('profile.aria.github', { name })">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://sergiobytes.netlify.app/" target="_blank" rel="noopener noreferrer" class="social-btn" :aria-label="t('profile.aria.portfolio', { name })">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/sergio-barreras" target="_blank" rel="noopener noreferrer" class="social-btn" :aria-label="t('profile.aria.linkedin', { name })">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <EmailLink :encoded="ENCODED_EMAILS.sergio" class="social-btn" :aria-label="t('profile.aria.email', { name })">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>
            </svg>
          </EmailLink>
        </div>
      </div>

      <!-- ── Right: visual ── -->
      <div class="profile-right">
        <div class="avatar-scene">
          <img
            src="/team/SergioBarreras-600.webp"
            srcset="/team/SergioBarreras-600.webp 600w, /team/SergioBarreras-1200.webp 1200w"
            sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 480px"
            fetchpriority="high"
            :alt="name"
            class="profile-photo"
          />
          <div class="exp-pill">{{ t('profile.expPill', { n: 5 }) }}</div>
        </div>
      </div>

    </main>

    <!-- ── About Me ── -->
    <section class="about-me">
      <div class="about-me-inner">

        <div class="about-me-header">
          <h2 class="about-me-title">{{ t('profile.about') }}</h2>
          <div class="about-me-line" />
        </div>

        <div class="about-me-body">
          <div class="about-me-text">
            <p v-for="(para, i) in about" :key="i" v-html="rt(para)" />
          </div>

          <div class="about-me-stats">
            <div class="stat-card">
              <span class="stat-num">5<span class="stat-plus">+</span></span>
              <span class="stat-label">{{ t('profile.stats.years') }}</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">15<span class="stat-plus">+</span></span>
              <span class="stat-label">{{ t('profile.stats.projects') }}</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">30<span class="stat-plus">+</span></span>
              <span class="stat-label">{{ t('profile.stats.certs') }}</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">2</span>
              <span class="stat-label">{{ t('profile.stats.languages') }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── Experience ── -->
    <section class="xp">
      <div class="section-inner">
        <div class="about-me-header">
          <h2 class="about-me-title">{{ t('profile.experience') }}</h2>
          <div class="about-me-line" />
        </div>

        <ol class="timeline">
          <li v-for="(job, i) in experience" :key="i" class="tl-item">
            <span class="tl-node" :class="{ 'tl-node--now': i === 0 }" aria-hidden="true" />
            <div class="tl-card">
              <div class="tl-head">
                <div>
                  <h3 class="tl-role">{{ rt(job.role) }}</h3>
                  <p class="tl-company">{{ rt(job.company) }}</p>
                </div>
                <span class="tl-date" :class="{ 'tl-date--now': i === 0 }">{{ rt(job.period) }}</span>
              </div>
              <ul class="tl-points">
                <li v-for="(p, j) in job.points" :key="j">{{ rt(p) }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- ── Stack ── -->
    <section class="stack">
      <div class="section-inner">
        <div class="about-me-header">
          <h2 class="about-me-title">{{ t('profile.stack') }}</h2>
          <div class="about-me-line" />
        </div>

        <div class="stack-grid">
          <div v-for="group in stack" :key="group.key" class="stack-card">
            <h3 class="stack-name">{{ t(`profile.sergio.stackGroups.${group.key}`) }}</h3>
            <div class="stack-items">
              <span v-for="item in group.items" :key="item" class="ptag">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Featured projects ── -->
    <section class="featured">
      <div class="section-inner">
        <div class="about-me-header">
          <h2 class="about-me-title">{{ t('profile.featured') }}</h2>
          <div class="about-me-line" />
        </div>

        <div class="featured-grid">
          <NuxtLinkLocale v-for="(p, i) in projects" :key="i" :to="{ path: '/', hash: '#work' }" class="featured-card">
            <span class="featured-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="featured-name">{{ rt(p.name) }}</h3>
            <p class="featured-desc">{{ rt(p.description) }}</p>
            <span class="featured-arrow" aria-hidden="true">↗</span>
          </NuxtLinkLocale>
        </div>

        <div class="featured-cta">
          <NuxtLinkLocale :to="{ path: '/', hash: '#contact' }" class="cta-btn">{{ t('profile.workTogether') }}</NuxtLinkLocale>
        </div>
      </div>
    </section>

    <SiteFooter />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm, rt } = useI18n()
const name = 'Sergio Barreras'

useHead({ title: `${name} — DevCrafters` })

// Copy lives in i18n/locales/*.json under profile.sergio; tech names stay untranslated.
const about = computed(() => tm('profile.sergio.about') as unknown as any[])
const experience = computed(() => tm('profile.sergio.experience') as unknown as any[])
const projects = computed(() => tm('profile.sergio.projects') as unknown as any[])

const stack = [
  { key: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Dart', 'Java'] },
  { key: 'frontend', items: ['Angular', 'Vue.js', 'Nuxt', 'React', 'Astro', 'Tailwind CSS', 'Material UI'] },
  { key: 'backend', items: ['NestJS', 'Node.js', 'Express', 'Django', '.NET'] },
  { key: 'databases', items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'SQLite'] },
  { key: 'devops', items: ['Docker', 'Kubernetes', 'GCP', 'Azure', 'GitHub Actions', 'Render', 'Firebase'] },
  { key: 'tools', items: ['Jest', 'Vitest', 'Postman', 'SonarQube', 'Git', 'RxJS', 'GraphQL', 'Stripe', 'Twilio', 'n8n'] },
]
</script>
<style scoped>
/* ── Layout ── */
.profile-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0e0e0e;
}

/* ── Nav ── */
.profile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 24px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(14, 14, 14, 0.85);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.brand-accent { color: #8b4df6; }
.brand-dot { color: #ddf53d; }

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: #6a6a6a;
}

.bc-link {
  color: #6a6a6a;
  text-decoration: none;
  transition: color 0.2s;
}
.bc-link:hover { color: #a3a3a3; }
.bc-sep { color: #3a3a3a; }
.bc-current { color: #a3a3a3; }

.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

/* ── Hero ── */
.profile-hero {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "greeting photo"
    "info     photo";
  column-gap: 80px;
  row-gap: 0;
  padding: 160px 60px 80px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* ── Left ── */
.name-last { position: relative; }
.name-dot { color: #ddf53d; }

.greeting {
  grid-area: greeting;
  align-self: end;
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  font-weight: 400;
  color: #a3a3a3;
  margin-bottom: 6px;
}

.profile-name {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(3.2rem, 6vw, 6.5rem);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: -0.04em;
  color: #8b4df6;
  margin-bottom: 28px;
}

.profile-role {
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 24px;
}

.profile-bio {
  font-size: clamp(0.88rem, 1.2vw, 1rem);
  line-height: 1.9;
  color: #a3a3a3;
  max-width: 500px;
  margin-bottom: 32px;
}

.profile-bio :deep(strong) {
  color: #ffffff;
  font-weight: 600;
}

.profile-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
}

.ptag {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid #2a2a2a;
  color: #6a6a6a;
  background: transparent;
  transition: border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
}

.ptag:hover {
  border-color: #ddf53d;
  color: #ddf53d;
  box-shadow: 0 0 10px rgba(221, 245, 61, 0.2);
}

.profile-socials {
  display: flex;
  gap: 12px;
}

.social-btn {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
  background: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6a6a6a;
  text-decoration: none;
  transition: border-color 0.25s, color 0.25s, background 0.25s, transform 0.25s;
}

.social-btn:hover {
  border-color: #8b4df6;
  color: #8b4df6;
  background: rgba(139, 77, 246, 0.08);
  transform: translateY(-2px);
}

/* ── Right: Avatar scene ── */
.profile-left {
  grid-area: info;
  align-self: start;
}

.profile-right {
  grid-area: photo;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-scene {
  position: relative;
  width: 480px;
  height: 560px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

/* The actual PNG photo */
.profile-photo {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top;
  animation: contour-pulse 5s ease-in-out infinite;
}

@keyframes contour-pulse {
  0%, 100% {
    filter:
      drop-shadow(0 0 12px rgba(139, 77, 246, 0.9))
      drop-shadow(0 0 40px rgba(139, 77, 246, 0.55))
      drop-shadow(0 0 80px rgba(139, 77, 246, 0.25));
  }
  50% {
    filter:
      drop-shadow(0 0 8px rgba(139, 77, 246, 0.55))
      drop-shadow(0 0 28px rgba(139, 77, 246, 0.32))
      drop-shadow(0 0 60px rgba(139, 77, 246, 0.15));
  }
}

/* Contour rings — removed */

.exp-pill {
  position: absolute;
  bottom: 40px;
  right: 0px;
  z-index: 4;
  background: rgba(14, 14, 14, 0.9);
  border: 1px solid rgba(139, 77, 246, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 14px 26px;
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #c4a7f7;
  letter-spacing: 0.04em;
}

.hl-purple { color: #8b4df6; font-weight: 600; }
.hl-yellow  { color: #ddf53d; font-weight: 600; }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .profile-nav { padding: 20px 36px; }

  .profile-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 140px 36px 80px;
    gap: 0;
  }

  .greeting { order: 1; margin-bottom: 20px; align-self: center; }
  .profile-right { order: 2; }
  .profile-left { order: 3; margin-top: 20px; }

  .status-badge { margin: 0 auto 40px; }
  .profile-bio { margin: 0 auto 32px; }
  .profile-tags { justify-content: center; }
  .profile-socials { justify-content: center; }

  .avatar-scene { width: 320px; height: 360px; }
  .exp-pill {
    bottom: 20px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  .profile-nav { padding: 18px 20px; }
  .breadcrumb { display: none; }
  .profile-hero { padding: 110px 24px 60px; }
  .greeting { font-size: 1.15rem; margin-bottom: 14px; }
  .profile-left { margin-top: 12px; }
  .avatar-scene { width: 240px; height: 280px; }
  .exp-pill {
    bottom: 16px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.82rem;
    padding: 9px 18px;
  }
}

/* ── About Me ── */
.about-me {
  border-top: 1px solid #1f1f1f;
  padding: 100px 60px;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(circle, rgba(139, 77, 246, 0.07) 1px, transparent 1px);
  background-size: 28px 28px;
}

.about-me::before {
  content: '';
  position: absolute;
  inset: -40%;
  background:
    radial-gradient(ellipse 55% 45% at 25% 35%, rgba(139, 77, 246, 0.18) 0%, transparent 60%),
    radial-gradient(ellipse 45% 40% at 75% 65%, rgba(221, 245, 61, 0.07) 0%, transparent 60%);
  animation: aurora-drift 10s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

@keyframes aurora-drift {
  0%, 100% {
    transform: translate(0%, 0%) rotate(0deg);
    opacity: 1;
  }
  33% {
    transform: translate(4%, 3%) rotate(3deg);
    opacity: 0.75;
  }
  66% {
    transform: translate(-3%, -4%) rotate(-2deg);
    opacity: 0.9;
  }
}

.about-me-inner {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-me-header {
  text-align: center;
  margin-bottom: 64px;
}

.about-me-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

.about-me-line {
  width: 52px;
  height: 3px;
  background: linear-gradient(90deg, #8b4df6, #ddf53d);
  border-radius: 2px;
  margin: 0 auto;
}

.about-me-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.about-me-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.about-me-text p {
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  line-height: 1.9;
  color: #a3a3a3;
}

.about-me-text :deep(strong) {
  color: #ffffff;
  font-weight: 600;
}

.about-me-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-card {
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  cursor: default;
}

.stat-card:hover {
  border-color: #ddf53d;
  box-shadow: 0 0 20px rgba(221, 245, 61, 0.1);
}

.stat-num {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 900;
  color: #8b4df6;
  line-height: 1;
  letter-spacing: -0.03em;
}

.stat-plus {
  font-size: 0.65em;
  color: #ddf53d;
}

.stat-label {
  font-size: 0.82rem;
  color: #6a6a6a;
  font-weight: 500;
  line-height: 1.3;
}

@media (max-width: 1024px) {
  .about-me { padding: 80px 36px; }
  .about-me-body { grid-template-columns: 1fr; gap: 52px; }
}

@media (max-width: 768px) {
  .about-me { padding: 60px 24px; }
  .about-me-stats { gap: 12px; }
  .stat-card { padding: 22px 18px; }
}

/* ── Role line & availability ── */
.role-sep { color: #3a3a3a; margin: 0 6px; }
.role-loc { color: #a3a3a3; font-weight: 400; }

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #ddf53d;
  border: 1px solid rgba(221, 245, 61, 0.3);
  background: rgba(221, 245, 61, 0.05);
  padding: 7px 16px;
  border-radius: 100px;
  margin-bottom: 28px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ddf53d;
  box-shadow: 0 0 10px rgba(221, 245, 61, 0.8);
  animation: status-pulse 2s ease-in-out infinite;
}

@keyframes status-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}

/* ── Shared section shell ── */
.xp,
.stack,
.featured {
  border-top: 1px solid #1f1f1f;
  padding: 100px 60px;
}

.section-inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* ── Experience timeline ── */
.timeline {
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-left: 36px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(to bottom, #8b4df6, #2a2a2a 70%, transparent);
}

.tl-item { position: relative; }

.tl-node {
  position: absolute;
  left: -36px;
  top: 30px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #0e0e0e;
  border: 2px solid #3a3a3a;
}

.tl-node--now {
  border-color: #ddf53d;
  box-shadow: 0 0 14px rgba(221, 245, 61, 0.55);
}

.tl-card {
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 20px;
  padding: 26px 28px;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.tl-card:hover {
  border-color: #8b4df6;
  transform: translateX(4px);
}

.tl-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.tl-role {
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.tl-company {
  font-size: 0.9rem;
  font-weight: 500;
  color: #c4a7f7;
  margin-top: 4px;
}

.tl-date {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #a3a3a3;
  border: 1px solid #2a2a2a;
  padding: 5px 12px;
  border-radius: 100px;
  white-space: nowrap;
}

.tl-date--now {
  color: #ddf53d;
  border-color: rgba(221, 245, 61, 0.35);
}

.tl-points {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tl-points li {
  position: relative;
  padding-left: 18px;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #a3a3a3;
}

.tl-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8b4df6;
}

/* ── Stack ── */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stack-card {
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 20px;
  padding: 26px 24px;
  transition: border-color 0.25s ease;
}

.stack-card:hover { border-color: #3a3a3a; }

.stack-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.stack-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-items .ptag { color: #a3a3a3; }

/* ── Featured projects ── */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.featured-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 20px;
  padding: 28px 26px;
  text-decoration: none;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.featured-card:hover {
  border-color: #8b4df6;
  transform: translateY(-4px);
  box-shadow: 0 18px 50px rgba(139, 77, 246, 0.14);
}

.featured-num {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #8b4df6;
}

.featured-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.featured-desc {
  font-size: 0.88rem;
  line-height: 1.7;
  color: #a3a3a3;
}

.featured-arrow {
  position: absolute;
  top: 24px;
  right: 24px;
  color: #3a3a3a;
  transition: color 0.25s ease, transform 0.25s ease;
}

.featured-card:hover .featured-arrow {
  color: #ddf53d;
  transform: translate(2px, -2px);
}

.featured-cta {
  margin-top: 56px;
  text-align: center;
}

.cta-btn {
  display: inline-flex;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 15px 34px;
  border-radius: 100px;
  background: #8b4df6;
  color: #ffffff;
  border: 2px solid #8b4df6;
  transition: all 0.25s ease;
}

.cta-btn:hover {
  background: #a06cff;
  border-color: #a06cff;
  transform: translateY(-2px);
  box-shadow: 0 14px 44px rgba(139, 77, 246, 0.4);
}

@media (max-width: 1024px) {
  .xp, .stack, .featured { padding: 80px 36px; }
  .stack-grid { grid-template-columns: 1fr 1fr; }
  .featured-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
}

@media (max-width: 768px) {
  .xp, .stack, .featured { padding: 60px 24px; }
  .stack-grid { grid-template-columns: 1fr; }
  .timeline { padding-left: 28px; }
  .tl-node { left: -28px; }
  .tl-card { padding: 22px 20px; }
  .tl-head { flex-direction: column; gap: 10px; }
  .tl-card:hover { transform: none; }
}
</style>
