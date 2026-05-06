<template>
  <div class="profile-page">

    <header class="profile-nav">
      <a href="/" class="brand">
        Dev<span class="brand-accent">Crafters</span><span class="brand-dot">.</span>
      </a>
      <div class="breadcrumb">
        <a href="/#team" class="bc-link">Equipo</a>
        <span class="bc-sep" aria-hidden="true">/</span>
        <span class="bc-current">Monica Chavez</span>
      </div>
    </header>

    <main class="profile-hero">

      <!-- ── Left ── -->
      <div class="profile-left">
        <p class="greeting">Hola, soy</p>
        <h1 class="profile-name">Monica<br /><span class="name-last">Chavez<span class="name-dot">.</span></span></h1>
        <p class="profile-role">Frontend Developer &amp; Design</p>

        <p class="profile-bio">
          Combina desarrollo frontend con pensamiento estratégico de producto.
          Especializada en <strong>UX</strong>, arquitectura de información
          y diseño de experiencias digitales centradas en el usuario.
        </p>

        <div class="profile-tags">
          <span class="ptag">Vue.js</span>
          <span class="ptag">Tailwind</span>
          <span class="ptag">Figma</span>
          <span class="ptag">CSS</span>
          <span class="ptag">UX Design</span>
        </div>

        <div class="profile-socials">
          <a href="https://www.linkedin.com/in/monica-alejandra-chavez-lugo-5a3a43290/" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn de Mónica Chávez">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub de Mónica Chávez">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- ── Right: visual ── -->
      <div class="profile-right">
        <div class="avatar-scene">
          <div class="avatar-glow" />
          <div class="avatar-circle">MC</div>
          <div class="exp-pill">2+ años exp.</div>
        </div>
      </div>

    </main>

    <!-- ── About Me ── -->
    <section class="about-me">
      <div class="about-me-inner">

        <div class="about-me-header">
          <h2 class="about-me-title">Sobre mí</h2>
          <div class="about-me-line" />
        </div>

        <div class="about-me-body">
          <div class="about-me-text">
            <p>
              Soy <span class="hl-purple">Frontend Developer</span> con enfoque en diseño de
              experiencias digitales que <span class="hl-yellow">conectan con las personas</span>.
              Combino desarrollo y pensamiento de producto para crear interfaces que
              no solo funcionan, sino que se sienten bien.
            </p>
            <p>
              Me especializo en <span class="hl-purple">Vue.js</span>,
              <span class="hl-purple">Tailwind</span> y
              <span class="hl-purple">Figma</span>, trabajando de cerca con equipos
              para alinear diseño, <span class="hl-yellow">usabilidad</span> y objetivos de negocio.
            </p>
            <p>
              Co-fundadora de <span class="hl-yellow">DevCrafters</span>, donde construimos
              productos digitales que transforman la manera en que las empresas
              <span class="hl-purple">operan y crecen</span>.
            </p>
          </div>

          <div class="about-me-stats">
            <div class="stat-card">
              <span class="stat-num">2<span class="stat-plus">+</span></span>
              <span class="stat-label">Años de experiencia</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">4<span class="stat-plus">+</span></span>
              <span class="stat-label">Proyectos completados</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">8<span class="stat-plus">+</span></span>
              <span class="stat-label">Diseños de producto</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">100<span class="stat-plus">%</span></span>
              <span class="stat-label">Compromiso</span>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Mónica Chávez — DevCrafters' })
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

/* ── Hero ── */
.profile-hero {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 80px;
  padding: 160px 60px 80px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* ── Left ── */
.name-last { position: relative; }
.name-dot { color: #ddf53d; }

.greeting {
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

.profile-bio strong {
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
.profile-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-scene {
  position: relative;
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Main purple glow — animated pulse */
.avatar-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(139, 77, 246, 0.65) 0%,
    rgba(139, 77, 246, 0.35) 28%,
    rgba(139, 77, 246, 0.12) 52%,
    rgba(139, 77, 246, 0.03) 70%,
    transparent 82%
  );
  pointer-events: none;
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.38; transform: scale(0.88); }
}

/* Lime secondary accent — more visible since Monica's avatar is lime */
.avatar-glow::after {
  content: '';
  position: absolute;
  width: 45%;
  height: 45%;
  bottom: 5%;
  right: 5%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(221, 245, 61, 0.3) 0%, transparent 70%);
  filter: blur(18px);
}

/* Lime avatar with dark text */
.avatar-circle {
  position: relative;
  z-index: 2;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 3.8rem;
  font-weight: 900;
  letter-spacing: 0.02em;
  color: #0e0e0e;
  background: linear-gradient(135deg, #ddf53d, #b8cc1a);
  box-shadow:
    0 0 0 8px rgba(221, 245, 61, 0.08),
    0 0 0 20px rgba(139, 77, 246, 0.05),
    0 24px 80px rgba(139, 77, 246, 0.35);
}

.exp-pill {
  position: absolute;
  bottom: 68px;
  right: 24px;
  z-index: 3;
  background: rgba(14, 14, 14, 0.88);
  border: 1px solid rgba(139, 77, 246, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #c4a7f7;
  letter-spacing: 0.03em;
}

.hl-purple { color: #8b4df6; font-weight: 600; }
.hl-yellow  { color: #ddf53d; font-weight: 600; }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .profile-nav { padding: 20px 36px; }

  .profile-hero {
    grid-template-columns: 1fr;
    padding: 140px 36px 80px;
    text-align: center;
    gap: 52px;
  }

  .status-badge { margin: 0 auto 40px; }
  .profile-bio { margin: 0 auto 32px; }
  .profile-tags { justify-content: center; }
  .profile-socials { justify-content: center; }
  .profile-right { order: -1; }

  .avatar-scene { width: 300px; height: 300px; }
  .avatar-circle { width: 165px; height: 165px; font-size: 2.8rem; }
  .exp-pill { bottom: 48px; right: 10px; }
}

/* ── About Me ── */
.about-me {
  border-top: 1px solid #1f1f1f;
  padding: 100px 60px;
}

.about-me-inner {
  max-width: 1100px;
  margin: 0 auto;
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

.about-me-text strong {
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
</style>
