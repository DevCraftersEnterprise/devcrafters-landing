<template>
  <div class="page">
    <!-- Interactive background orbs -->
    <div class="orb orb--primary" ref="orbPrimary" />
    <div class="orb orb--secondary" ref="orbSecondary" />

    <!-- ─── Navbar ─────────────────────────────────── -->
    <header class="navbar" :style="navStyle">
      <a class="logo" href="/">
        Dev<span class="logo-accent">Crafters</span><span class="logo-dot">.</span>
      </a>

      <nav class="nav" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="navbar-right">
        <a class="nav-cta" href="#contact">Let's Talk →</a>
        <button
          class="burger"
          :class="{ 'burger--open': menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
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
        aria-label="Navigation"
      >
        <!-- Drawer header -->
        <div class="drawer-header">
          <a class="logo" href="/" @click="menuOpen = false">
            Dev<span class="logo-accent">Crafters</span><span class="logo-dot">.</span>
          </a>
          <button class="drawer-close" @click="menuOpen = false" aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Drawer links -->
        <nav class="drawer-nav">
          <a href="#services" class="drawer-link" @click="menuOpen = false">
            <span class="drawer-num">01</span>
            <span class="drawer-label">Services</span>
            <span class="drawer-arrow">↗</span>
          </a>
          <a href="#work" class="drawer-link" @click="menuOpen = false">
            <span class="drawer-num">02</span>
            <span class="drawer-label">Work</span>
            <span class="drawer-arrow">↗</span>
          </a>
          <a href="#about" class="drawer-link" @click="menuOpen = false">
            <span class="drawer-num">03</span>
            <span class="drawer-label">About</span>
            <span class="drawer-arrow">↗</span>
          </a>
          <a href="#contact" class="drawer-link" @click="menuOpen = false">
            <span class="drawer-num">04</span>
            <span class="drawer-label">Contact</span>
            <span class="drawer-arrow">↗</span>
          </a>
        </nav>

        <!-- Drawer footer -->
        <div class="drawer-footer">
          <a class="btn btn--primary" href="#contact" @click="menuOpen = false">Let's Talk →</a>
          <p class="drawer-tagline">We build. We ship. We scale.</p>
        </div>
      </div>
    </Transition>

    <!-- ─── Hero ──────────────────────────────────── -->
    <section class="hero" aria-label="Hero">
      <!-- Left side decorators -->
      <div class="side-deco side-deco--left" aria-hidden="true">
        <div class="deco-item">
          <span class="deco-label">Web Dev</span>
          <span class="deco-dot" />
          <span class="deco-line" />
        </div>
        <div class="deco-item">
          <span class="deco-label">Mobile</span>
          <span class="deco-dot" />
          <span class="deco-line" />
        </div>
      </div>

      <!-- Main content -->
      <div class="hero-content">
        <span class="hero-badge">
          <span class="badge-star">✦</span>
          Tu próximo proyecto en las mejores manos
          <span class="badge-star">✦</span>
        </span>

        <h1 class="hero-title">
          <span class="title-sm"><span class="c-yellow">PENSAMOS</span><br />Y CONSTRUIMOS</span>
          <span class="c-purple">DIFERENTE</span><span class="c-yellow">.</span>
        </h1>

        <p class="hero-desc">
          Ingeniería creativa con visión de negocio. Desarrollamos apps web,
          móviles y software a medida que impulsan tu empresa al siguiente nivel.
        </p>

        <div class="hero-actions">
          <a href="#contact" class="btn btn--primary">Let's Talk →</a>
          <a href="#work" class="btn btn--outline">See Our Work →</a>
        </div>
      </div>

      <!-- Right side decorators -->
      <div class="side-deco side-deco--right" aria-hidden="true">
        <div class="deco-item deco-item--r">
          <span class="deco-label">Software</span>
          <span class="deco-dot" />
          <span class="deco-line" />
        </div>
        <div class="deco-item deco-item--r">
          <span class="deco-label">Design</span>
          <span class="deco-dot" />
          <span class="deco-line" />
        </div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const orbPrimary = ref<HTMLElement | null>(null)
const orbSecondary = ref<HTMLElement | null>(null)
const scrollY = ref(0)
const menuOpen = ref(false)

// Progressive navbar: smoothstep interpolation over 80px
const navStyle = computed(() => {
  const t = Math.min(scrollY.value / 80, 1)
  const ease = t * t * (3 - 2 * t) // smoothstep
  const bgAlpha = ease * 0.92
  const borderAlpha = ease * 0.07
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const padV = isMobile ? 16 : 28
  const padH = isMobile ? 20 : 60
  return {
    background: `rgba(14, 14, 14, ${bgAlpha})`,
    borderBottom: `1px solid rgba(255, 255, 255, ${borderAlpha})`,
    backdropFilter: ease > 0.05 ? 'blur(18px)' : 'none',
    WebkitBackdropFilter: ease > 0.05 ? 'blur(18px)' : 'none',
    padding: `${padV}px ${padH}px`,
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
  /* padding & background managed by inline :style */
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
  padding: 120px 60px 96px;
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
  font-size: clamp(2.8rem, 8vw, 7.5rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 32px;
}

.title-sm {
  display: block;
  font-size: clamp(2.1rem, 6.2vw, 5.8rem);
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

@media (max-width: 768px) {
  .navbar {
    grid-template-columns: 1fr auto;
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
</style>
