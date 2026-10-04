<template>
  <div class="page">
    <!-- Interactive background orbs -->
    <div class="orb orb--primary" ref="orbPrimary" />
    <div class="orb orb--secondary" ref="orbSecondary" />

    <!-- ─── Navbar ─────────────────────────────────── -->
    <header class="navbar" :style="navStyle">
      <NuxtLinkLocale class="logo" to="/">
        Dev<span class="logo-accent">Crafters</span><span class="logo-dot">.</span>
      </NuxtLinkLocale>

      <nav class="nav" :aria-label="t('nav.ariaMain')">
        <a v-for="s in sections" :key="s.id" :href="`#${s.id}`">{{ t(s.label) }}</a>
      </nav>

      <div class="navbar-right">
        <LangSwitch />
        <a class="nav-cta" href="#contact">{{ t('nav.cta') }}</a>
        <button
          class="burger"
          :class="{ 'burger--open': menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          :aria-label="t('nav.toggleMenu')"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>

    <!-- ─── Drawer Backdrop ──────────────────────── -->
    <Transition name="backdrop">
      <div
        v-if="menuOpen"
        class="drawer-backdrop"
        @click="menuOpen = false"
        aria-hidden="true"
      />
    </Transition>

    <!-- ─── Mobile Drawer ────────────────────────── -->
    <Transition name="drawer">
      <div
        v-if="menuOpen"
        class="drawer"
        role="dialog"
        aria-modal="true"
        :aria-label="t('nav.ariaMain')"
      >
        <!-- Drawer header -->
        <div class="drawer-header">
          <NuxtLinkLocale class="logo" to="/" @click="menuOpen = false">
            Dev<span class="logo-accent">Crafters</span><span class="logo-dot">.</span>
          </NuxtLinkLocale>
          <button class="drawer-close" @click="menuOpen = false" :aria-label="t('nav.closeMenu')">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Drawer links -->
        <nav class="drawer-nav">
          <a
            v-for="(s, i) in sections"
            :key="s.id"
            :href="`#${s.id}`"
            class="drawer-link"
            @click="menuOpen = false"
          >
            <span class="drawer-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="drawer-label">{{ t(s.label) }}</span>
            <span class="drawer-arrow">↗</span>
          </a>
        </nav>

        <!-- Drawer footer -->
        <div class="drawer-footer">
          <a class="btn btn--primary" href="#contact" @click="menuOpen = false">{{ t('nav.cta') }}</a>
          <p class="drawer-tagline">{{ t('nav.tagline') }}</p>
        </div>
      </div>
    </Transition>

    <!-- ─── Hero ──────────────────────────────────── -->
    <section class="hero" aria-label="Hero">
      <!-- Left side decorators -->
      <div class="side-deco side-deco--left" aria-hidden="true">
        <div class="deco-item">
          <span class="deco-label">{{ t('hero.tags.web') }}</span>
          <span class="deco-dot" />
          <span class="deco-line" />
        </div>
        <div class="deco-item">
          <span class="deco-label">{{ t('hero.tags.mobile') }}</span>
          <span class="deco-dot" />
          <span class="deco-line" />
        </div>
      </div>

      <!-- Main content -->
      <div class="hero-content">
        <span class="hero-badge">
          <span class="badge-star">✦</span>
          {{ t('hero.badge') }}
          <span class="badge-star">✦</span>
        </span>

        <h1 class="hero-title">
          <span class="title-sm"><span class="c-yellow">{{ t('hero.line1') }}</span><br />{{ t('hero.line2') }}</span>
          <span class="c-purple">{{ t('hero.line3') }}</span><span class="c-yellow">.</span>
        </h1>

        <p class="hero-desc">{{ t('hero.desc') }}</p>

        <div class="hero-actions">
          <a href="#contact" class="btn btn--primary">{{ t('hero.ctaPrimary') }}</a>
          <a href="#work" class="btn btn--outline">{{ t('hero.ctaSecondary') }}</a>
        </div>

        <!-- Mobile-only service tags -->
        <div class="mobile-tags" aria-hidden="true">
          <span v-for="tag in heroTags" :key="tag" class="mobile-tag"><span class="mobile-tag-dot" />{{ t(`hero.tags.${tag}`) }}</span>
        </div>
      </div>

      <!-- Right side decorators -->
      <div class="side-deco side-deco--right" aria-hidden="true">
        <div class="deco-item deco-item--r">
          <span class="deco-label">{{ t('hero.tags.software') }}</span>
          <span class="deco-dot" />
          <span class="deco-line" />
        </div>
        <div class="deco-item deco-item--r">
          <span class="deco-label">{{ t('hero.tags.design') }}</span>
          <span class="deco-dot" />
          <span class="deco-line" />
        </div>
      </div>

    </section>

    <!-- ─── Services ─────────────────────────────────── -->
    <ServicesSection />

    <!-- ─── Projects ─────────────────────────────────── -->
    <ProjectsSection />

    <!-- ─── About ────────────────────────────────────── -->
    <section class="about" id="about" :aria-label="t('nav.about')">

      <!-- Section label -->
      <div class="about-label">
        <span class="deco-dot" />
        <span>{{ t('about.label') }}</span>
      </div>

      <!-- Vision & Mission cards -->
      <div class="about-cards">
        <div class="about-card">
          <span class="about-card-num">01</span>
          <h3 class="about-card-title">{{ t('about.visionTitle') }}</h3>
          <p class="about-card-text" v-html="t('about.vision')" />
        </div>
        <div class="about-card">
          <span class="about-card-num">02</span>
          <h3 class="about-card-title">{{ t('about.missionTitle') }}</h3>
          <p class="about-card-text" v-html="t('about.mission')" />
        </div>
      </div>

      <!-- Manifesto -->
      <div class="manifesto">
        <h2 class="manifesto-title">{{ t('about.manifestoTitle1') }}<br /><span class="c-purple">{{ t('about.manifestoTitle2') }}</span><span class="c-yellow">.</span></h2>

        <div class="manifesto-body">
          <p class="manifesto-line manifesto-lead" v-html="t('about.manifesto.lead')" />
          <p class="manifesto-line" v-html="t('about.manifesto.l1')" />

          <div class="manifesto-divider" />

          <p class="manifesto-line manifesto-quiet" v-html="t('about.manifesto.l2')" />
          <p class="manifesto-line" v-html="t('about.manifesto.l3')" />

          <div class="manifesto-divider" />

          <p class="manifesto-line manifesto-quiet" v-html="t('about.manifesto.l4')" />
          <p class="manifesto-closer" v-html="t('about.manifesto.closer')" />
        </div>
      </div>

    </section>

    <!-- ─── Team ─────────────────────────────────────── -->
    <section class="team" id="team" :aria-label="t('nav.team')">
      <div class="team-header">
        <div class="about-label">
          <span class="deco-dot" />
          <span>{{ t('team.label') }}</span>
        </div>
        <h2 class="team-title">
          {{ t('team.title1') }}<br />
          {{ t('team.title2') }} <span class="c-purple">{{ t('team.title3') }}</span><span class="c-yellow">.</span>
        </h2>
        <p class="team-desc">{{ t('team.desc') }}</p>
      </div>

      <div class="team-grid">
        <NuxtLinkLocale
          v-for="m in members"
          :key="m.slug"
          class="member-card"
          :to="`/equipo/${m.slug}`"
          :aria-label="t('team.portfolioOf', { name: m.name })"
        >
          <div class="member-photo-wrap">
            <img
              :src="`/team/${m.photo}-600.webp`"
              :srcset="`/team/${m.photo}-600.webp 600w, /team/${m.photo}-1200.webp 1200w`"
              sizes="(max-width: 1024px) 480px, 360px"
              class="member-photo"
              :alt="m.name"
              loading="lazy"
              decoding="async"
            />
            <div class="member-photo-fade" />
          </div>
          <div class="member-glow" :class="`member-glow--${m.slug[0]}`" />
          <div class="member-body">
            <div class="member-top">
              <span class="member-arrow">↗</span>
            </div>
            <div class="member-info">
              <span class="member-name">{{ m.name }}</span>
              <span class="member-role">{{ t(`team.roles.${m.slug}`) }}</span>
            </div>
            <div class="member-tags">
              <span v-for="tag in m.tags" :key="tag" class="member-tag">{{ tag }}</span>
            </div>
          </div>
        </NuxtLinkLocale>
      </div>
    </section>

    <!-- ─── Contact ──────────────────────────────────── -->
    <ContactSection />

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { t } = useI18n()

const sections = [
  { id: 'services', label: 'nav.services' },
  { id: 'work', label: 'nav.work' },
  { id: 'about', label: 'nav.about' },
  { id: 'team', label: 'nav.team' },
  { id: 'contact', label: 'nav.contact' },
]

const heroTags = ['web', 'mobile', 'software', 'design']

const members = [
  { slug: 'sergio', name: 'Sergio Barreras', photo: 'SergioBarreras', tags: ['Angular', 'Vue', 'NestJS'] },
  { slug: 'monica', name: 'Mónica Chávez', photo: 'MonicaChavez', tags: ['UX', 'Frontend', 'Strategy'] },
  { slug: 'cristian', name: 'Cristian Corona', photo: 'CristianCorona', tags: ['React', 'UI', 'CSS'] },
]

const orbPrimary = ref<HTMLElement | null>(null)
const orbSecondary = ref<HTMLElement | null>(null)
const scrollY = ref(0)
const menuOpen = ref(false)

// Progressive navbar: smoothstep interpolation over 80px
// Padding is handled via CSS to avoid SSR/hydration flash
const navStyle = computed(() => {
  const t = Math.min(scrollY.value / 80, 1)
  const ease = t * t * (3 - 2 * t) // smoothstep
  const bgAlpha = ease * 0.92
  const borderAlpha = ease * 0.07
  return {
    background: `rgba(14, 14, 14, ${bgAlpha})`,
    borderBottom: `1px solid rgba(255, 255, 255, ${borderAlpha})`,
    backdropFilter: ease > 0.05 ? 'blur(18px)' : 'none',
    WebkitBackdropFilter: ease > 0.05 ? 'blur(18px)' : 'none',
  }
})

let rafId = 0
let tx = 0, ty = 0, cx = 0, cy = 0
let tx2 = 0, ty2 = 0, cx2 = 0, cy2 = 0

function onMouseMove(e: MouseEvent) {
  tx = e.clientX
  ty = e.clientY
  tx2 = e.clientX
  ty2 = e.clientY
}

function onScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  // Default position: bottom-center
  tx = cx = window.innerWidth / 2
  ty = cy = window.innerHeight * 0.75
  tx2 = cx2 = window.innerWidth / 2
  ty2 = cy2 = window.innerHeight * 0.68

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('scroll', onScroll, { passive: true })

  function tick() {
    cx += (tx - cx) * 0.04
    cy += (ty - cy) * 0.04
    cx2 += (tx2 - cx2) * 0.022
    cy2 += (ty2 - cy2) * 0.022

    if (orbPrimary.value) {
      orbPrimary.value.style.transform = `translate(${cx - 450}px, ${cy - 450}px)`
    }
    if (orbSecondary.value) {
      orbSecondary.value.style.transform = `translate(${cx2 - 300}px, ${cy2 - 300}px)`
    }

    rafId = requestAnimationFrame(tick)
  }

  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
/* ─── Page ──────────────────────────────────────────── */
.page {
  position: relative;
  min-height: 100vh;
  background: #0e0e0e;
  overflow: hidden;
}

/* ─── Orbs ──────────────────────────────────────────── */
.orb {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  will-change: transform;
}

.orb--primary {
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle,
    rgba(139, 77, 246, 0.24) 0%,
    rgba(139, 77, 246, 0.07) 42%,
    transparent 70%
  );
  filter: blur(48px);
}

.orb--secondary {
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(221, 245, 61, 0.15) 0%,
    rgba(221, 245, 61, 0.04) 45%,
    transparent 70%
  );
  filter: blur(56px);
}

/* ─── Navbar ────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  /* padding controlled here — NOT in JS — to avoid hydration flash */
  padding: 28px 60px;
}

.logo {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #ffffff;
}

.logo-accent {
  color: #8b4df6;
}

.logo-dot {
  color: #ddf53d;
}

.nav {
  display: flex;
  gap: 44px;
  align-items: center;
}

.nav a {
  font-size: 0.875rem;
  font-weight: 500;
  color: #a3a3a3;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
  position: relative;
  padding-bottom: 2px;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #ddf53d;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav a:hover {
  color: #ffffff;
}

.nav a:hover::after {
  transform: scaleX(1);
}

/* Right-side slot — holds CTA + burger, aligns to end */
.navbar-right {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-cta {
  font-size: 0.85rem;
  font-weight: 600;
  color: #ddf53d;
  border: 1px solid rgba(221, 245, 61, 0.32);
  padding: 10px 24px;
  border-radius: 100px;
  letter-spacing: 0.01em;
  transition: all 0.22s ease;
}

.nav-cta:hover {
  background: rgba(221, 245, 61, 0.08);
  border-color: rgba(221, 245, 61, 0.7);
  box-shadow: 0 0 24px rgba(221, 245, 61, 0.14);
}

/* ─── Burger Button ────────────────────────────────────── */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid #3a3a3a;
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
  transition: border-color 0.2s ease;
}

.burger:hover {
  border-color: #8b4df6;
}

.burger span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: #ffffff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
  transform-origin: center;
}

/* X state */
.burger--open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.burger--open span:nth-child(2) {
  opacity: 0;
  width: 0;
}
.burger--open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ─── Drawer Backdrop ───────────────────────────────── */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.35s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* ─── Drawer Panel ──────────────────────────────────── */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 102;
  width: min(300px, 82vw);
  background: #111111;
  border-left: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 36px;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.38s cubic-bezier(0.32, 0, 0.15, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

/* Drawer header */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
}

.drawer-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: transparent;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  color: #a3a3a3;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.drawer-close:hover {
  border-color: #8b4df6;
  color: #ffffff;
}

/* Drawer nav links */
.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 0;
  border-bottom: 1px solid #1f1f1f;
  text-decoration: none;
  color: #ffffff;
  transition: color 0.2s ease;
  /* Staggered entrance animation */
  opacity: 0;
  animation: linkIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.drawer-link:nth-child(1) { animation-delay: 0.08s; }
.drawer-link:nth-child(2) { animation-delay: 0.14s; }
.drawer-link:nth-child(3) { animation-delay: 0.20s; }
.drawer-link:nth-child(4) { animation-delay: 0.26s; }
.drawer-link:nth-child(5) { animation-delay: 0.32s; }

@keyframes linkIn {
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
}

.drawer-link:hover {
  color: #ddf53d;
}

.drawer-link:hover .drawer-arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

.drawer-num {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  color: #8b4df6;
  letter-spacing: 0.08em;
  min-width: 24px;
}

.drawer-label {
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  flex: 1;
}

.drawer-arrow {
  font-size: 1.1rem;
  color: #a3a3a3;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

/* Drawer footer */
.drawer-footer {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 24px;
}

.drawer-tagline {
  font-size: 0.75rem;
  color: #3a3a3a;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
}

/* ─── Hero ──────────────────────────────────────────── */
.hero {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 160px 60px 96px;
}

.hero-content {
  text-align: center;
  max-width: 960px;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.775rem;
  font-weight: 500;
  color: #d8d8d8;
  border: 1px solid #3a3a3a;
  padding: 8px 22px;
  border-radius: 100px;
  letter-spacing: 0.08em;
  background: rgba(255, 255, 255, 0.025);
  margin-bottom: 48px;
}

.badge-star {
  color: #ddf53d;
  font-size: 0.6rem;
}

/* Title */
.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(3.2rem, 9.5vw, 9rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 32px;
}

.title-sm {
  display: block;
  font-size: clamp(2.4rem, 7vw, 7rem);
  line-height: 1.05;
  margin-bottom: 0.1em;
}

.c-yellow {
  color: #ddf53d;
}

.c-purple {
  color: #8b4df6;
}

/* Description */
.hero-desc {
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  font-weight: 400;
  color: #a3a3a3;
  line-height: 1.8;
  margin-bottom: 52px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Buttons */
.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 15px 34px;
  border-radius: 100px;
  letter-spacing: 0.01em;
  transition: all 0.25s ease;
  cursor: pointer;
}

.btn--primary {
  background: #8b4df6;
  color: #ffffff;
  border: 2px solid #8b4df6;
}

.btn--primary:hover {
  background: #a06cff;
  border-color: #a06cff;
  transform: translateY(-2px);
  box-shadow: 0 14px 44px rgba(139, 77, 246, 0.4);
}

.btn--outline {
  background: transparent;
  color: #ffffff;
  border: 2px solid #3a3a3a;
}

.btn--outline:hover {
  border-color: #ddf53d;
  color: #ddf53d;
  transform: translateY(-2px);
  box-shadow: 0 14px 44px rgba(221, 245, 61, 0.1);
}

/* ─── Side Decorators ───────────────────────────────── */
.side-deco {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 54px;
  z-index: 3;
}

.side-deco--left {
  left: 60px;
}

.side-deco--right {
  right: 60px;
}

.deco-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Right-side items: reverse visual order (label outer, line inner) */
.deco-item--r {
  flex-direction: row-reverse;
}

.deco-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: #a3a3a3;
  letter-spacing: 0.12em;
  text-transform: uppercase;
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

.deco-line {
  display: block;
  width: 52px;
  height: 1px;
  flex-shrink: 0;
}

/* Left: line fades from solid (near dot) → transparent (toward center) */
.side-deco--left .deco-line {
  background: linear-gradient(to right, #3a3a3a, transparent);
}

/* Right: line fades from transparent (toward center) → solid (near dot) */
.side-deco--right .deco-line {
  background: linear-gradient(to left, #3a3a3a, transparent);
}

/* ─── Scroll Indicator ──────────────────────────────── */
.scroll-ind {
  position: absolute;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.scroll-text {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  color: #a3a3a3;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.scroll-line {
  display: block;
  width: 1px;
  height: 56px;
  background: linear-gradient(to bottom, #3a3a3a, transparent);
}

/* ─── Responsive ────────────────────────────────────── */
@media (max-width: 1024px) {
  .side-deco {
    display: none;
  }

  .hero {
    padding: 100px 36px 80px;
  }
}

/* Mobile tags — hidden by default, shown only on mobile */
.mobile-tags {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    grid-template-columns: 1fr auto;
    padding: 16px 20px;
  }

  /* Hide desktop nav and CTA, show burger */
  .nav {
    display: none;
  }

  .nav-cta {
    display: none;
  }

  .burger {
    display: flex;
  }

  .navbar-right {
    gap: 12px;
  }

  /* Hide badge, show mobile tags */
  .hero-badge {
    display: none;
  }

  .mobile-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-top: 28px;
  }

  .mobile-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.7rem;
    font-weight: 500;
    color: #a3a3a3;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: 1px solid #2a2a2a;
    padding: 6px 14px;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.02);
  }

  .mobile-tag-dot {
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ddf53d;
    box-shadow: 0 0 6px rgba(221, 245, 61, 0.7);
    flex-shrink: 0;
  }

  .hero {
    padding: 96px 24px 72px;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .scroll-ind {
    display: none;
  }
}

/* ─── About ─────────────────────────────────────────── */
.about {
  position: relative;
  z-index: 2;
  padding: 140px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.about-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a3a3a3;
  margin-bottom: 72px;
}

/* Vision & Mission grid */
.about-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 120px;
}

.about-card {
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 20px;
  padding: 40px 36px;
  position: relative;
  transition: border-color 0.3s ease;
}

.about-card:hover {
  border-color: #3a3a3a;
}

.about-card-num {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  color: #8b4df6;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 16px;
}

.about-card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 16px;
}

.about-card-text {
  font-size: 0.95rem;
  line-height: 1.85;
  color: #a3a3a3;
}

/* Highlight helpers */
.hl-purple {
  color: #8b4df6;
  font-weight: 600;
}

.hl-yellow {
  color: #ddf53d;
  font-weight: 600;
}

.hl-strike {
  text-decoration: line-through;
  text-decoration-color: #ddf53d;
  text-decoration-thickness: 2px;
  color: #a3a3a3;
}

.c-white {
  color: #ffffff;
  font-weight: 700;
}

/* Manifesto */
.manifesto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.manifesto-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: #ffffff;
  position: sticky;
  top: 120px;
}

.manifesto-body {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.manifesto-line {
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
  line-height: 1.8;
  color: #d8d8d8;
}

.manifesto-lead {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.manifesto-quiet {
  color: #a3a3a3;
}

.manifesto-closer {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  font-weight: 700;
  line-height: 1.5;
  color: #ffffff;
  letter-spacing: -0.01em;
  border-left: 3px solid #8b4df6;
  padding-left: 20px;
}

.manifesto-divider {
  width: 48px;
  height: 1px;
  background: linear-gradient(to right, #3a3a3a, transparent);
}

/* About responsive */
@media (max-width: 1024px) {
  .about {
    padding: 100px 36px;
  }

  .manifesto {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .manifesto-title {
    position: static;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 80px 24px;
  }

  .about-cards {
    grid-template-columns: 1fr;
    margin-bottom: 72px;
  }
}

/* ─── Team ──────────────────────────────────────────── */
.team {
  position: relative;
  z-index: 2;
  padding: 140px 60px;
  border-top: 1px solid #1f1f1f;
}

.team-header {
  max-width: 700px;
  margin: 0 auto 80px;
  text-align: center;
}

.team-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.6rem, 5vw, 5.2rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 20px 0 24px;
}

.team-desc {
  font-size: clamp(0.9rem, 1.3vw, 1.05rem);
  line-height: 1.85;
  color: #a3a3a3;
}

/* Grid */
.team-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Member card */
.member-card {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid #2a2a2a;
  background: #100c1e;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  aspect-ratio: 3 / 4;
}

.member-card:hover {
  border-color: #8b4df6;
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(139, 77, 246, 0.15);
}

.member-card:nth-child(2):hover {
  border-color: #ddf53d;
  box-shadow: 0 20px 60px rgba(221, 245, 61, 0.1);
}

/* Photo fills card */
.member-photo-wrap {
  position: absolute;
  inset: 0;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s ease;
}

.member-card:hover .member-photo {
  transform: scale(1.06);
}

.member-photo-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 20%,
    rgba(0, 0, 0, 0.45) 52%,
    rgba(0, 0, 0, 0.88) 72%,
    #0e0e0e 100%
  );
  pointer-events: none;
}

/* Cristian — no photo yet */
.member-photo-wrap--c {
  background: linear-gradient(180deg, #2a1a4a 0%, #0d0820 100%);
}

.member-initials {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  color: #2e2e2e;
  letter-spacing: 0.04em;
  user-select: none;
}

.member-photo-fade--c {
  background: linear-gradient(
    to bottom,
    transparent 20%,
    rgba(0, 0, 0, 0.6) 55%,
    #111111 80%,
    #111111 100%
  );
}

/* Ambient glow behind card */
.member-glow {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  filter: blur(60px);
}

.member-card:hover .member-glow { opacity: 1; }
.member-glow--s { background: #8b4df6; }
.member-glow--m { background: #ddf53d; }
.member-glow--c { background: #8b4df6; }

/* Body */
.member-body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 24px 24px;
  z-index: 2;
}

.member-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.member-arrow {
  font-size: 1.1rem;
  color: #3a3a3a;
  transition: color 0.25s ease, transform 0.25s ease;
}

.member-card:hover .member-arrow {
  color: #8b4df6;
  transform: translate(3px, -3px);
}

.member-card:nth-child(2):hover .member-arrow { color: #ddf53d; }

.member-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.member-name {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.member-role {
  font-size: 0.8rem;
  font-weight: 500;
  color: #a3a3a3;
  letter-spacing: 0.02em;
}

.member-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.member-tag {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 100px;
  border: 1px solid rgba(221, 245, 61, 0.35);
  color: #ddf53d;
  background: rgba(221, 245, 61, 0.06);
  transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
}

.member-card:hover .member-tag {
  border-color: rgba(221, 245, 61, 0.6);
  color: #eeff66;
  background: rgba(221, 245, 61, 0.1);
}

/* Monica (2nd card) — lilac chips */
.member-card:nth-child(2) .member-tag {
  border: 1px solid rgba(196, 167, 247, 0.35);
  color: #c4a7f7;
  background: rgba(139, 77, 246, 0.08);
}

.member-card:nth-child(2):hover .member-tag {
  border-color: rgba(196, 167, 247, 0.6);
  color: #d9c2ff;
  background: rgba(139, 77, 246, 0.13);
}

/* Team responsive */
@media (max-width: 1024px) {
  .team { padding: 100px 36px; }
  .team-grid { grid-template-columns: 1fr; gap: 16px; max-width: 480px; }
  .member-card { flex-direction: row; align-items: center; gap: 24px; padding: 24px; }
  .member-body { gap: 8px; }
  .member-top { display: none; }
}

@media (max-width: 768px) {
  .team { padding: 80px 24px; }
  .team-header { margin-bottom: 52px; }
}
</style>
