<template>
  <section class="work" id="work" :aria-label="t('projects.label')">
    <div class="work-header">
      <div class="section-label">
        <span class="deco-dot" />
        <span>{{ t('projects.label') }}</span>
      </div>
      <h2 class="section-title">
        {{ t('projects.title1') }}<br />
        <span class="c-purple">{{ t('projects.title2') }}</span><span class="c-yellow">.</span>
      </h2>
      <p class="section-desc">{{ t('projects.desc') }}</p>
    </div>

    <div class="work-list">
      <article
        v-for="(p, i) in projects"
        :key="p.slug"
        class="project"
        :class="{ 'project--alt': p.accent === 'yellow' }"
      >
        <div class="project-info">
          <div class="project-meta">
            <span class="project-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="project-cat">{{ t(`projects.items.${p.slug}.category`) }}</span>
          </div>

          <h3 class="project-name">{{ nameOf(p) }}<span class="c-yellow">.</span></h3>
          <p class="project-tagline">{{ t(`projects.items.${p.slug}.tagline`) }}</p>
          <p class="project-desc">{{ t(`projects.items.${p.slug}.description`) }}</p>

          <ul class="project-features">
            <li v-for="(f, j) in featuresOf(p)" :key="j">
              <span class="feature-dot" aria-hidden="true" />
              {{ rt(f) }}
            </li>
          </ul>
        </div>

        <div class="project-visual" aria-hidden="true">
          <div class="window">
            <div class="window-bar">
              <span /><span /><span />
              <span class="window-title">{{ p.slug }}.config.ts</span>
            </div>
            <pre class="window-code"><code><span class="k">export default</span> {
  <span class="p">name</span>: <span class="s">'{{ nameOf(p) }}'</span>,
  <span class="p">platform</span>: [<template v-for="(pl, j) in p.platform" :key="pl"><span class="s">'{{ pl }}'</span><template v-if="j < p.platform.length - 1">, </template></template>],
  <span class="p">stack</span>: {
<template v-for="(val, key) in p.stack" :key="key">    <span class="p">{{ key }}</span>: <span class="s">'{{ val }}'</span>,
</template>  },
  <span class="p">status</span>: <span class="ok">'{{ p.status }}'</span>,
}</code></pre>
          </div>
          <div class="visual-glow" />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, te, tm, rt } = useI18n()

// Copy (category, tagline, description, features) lives in i18n/locales/*.json
// under projects.items.<slug>; the code window is intentionally kept in English.
interface Project {
  slug: 'botbite' | 'magnolias' | 'diocesis'
  name: string
  platform: string[]
  stack: Record<string, string>
  status: string
  accent: 'purple' | 'yellow'
}

const projects: Project[] = [
  {
    slug: 'botbite',
    name: 'BotBite',
    platform: ['WhatsApp', 'Web'],
    stack: {
      frontend: 'Angular + Tailwind',
      backend: 'NestJS + PostgreSQL',
      realtime: 'Socket.IO',
      ai: 'OpenAI + Twilio',
    },
    status: 'live',
    accent: 'purple',
  },
  {
    slug: 'magnolias',
    name: 'Magnolias',
    platform: ['Web', 'Admin panel'],
    stack: {
      frontend: 'Nuxt 4 + Tailwind',
      backend: 'NestJS + TypeORM',
      database: 'PostgreSQL',
      cloud: 'Render',
    },
    status: 'live',
    accent: 'yellow',
  },
  {
    slug: 'diocesis',
    name: 'Diócesis de Cd. Obregón',
    platform: ['Web', 'Admin panel'],
    stack: {
      frontend: 'Angular 21 + Tailwind',
      backend: 'NestJS (from Django)',
      database: 'PostgreSQL',
    },
    status: 'live',
    accent: 'purple',
  },
]

const nameOf = (p: Project) => {
  const key = `projects.items.${p.slug}.name`
  return te(key) ? t(key) : p.name
}

const featuresOf = (p: Project) => tm(`projects.items.${p.slug}.features`) as unknown as any[]
</script>
<style scoped>
.work {
  position: relative;
  z-index: 2;
  padding: 140px 60px;
  border-top: 1px solid #1f1f1f;
}

.work-header {
  max-width: 1200px;
  margin: 0 auto 80px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  max-width: 520px;
  font-size: clamp(0.9rem, 1.3vw, 1.05rem);
  line-height: 1.85;
  color: #a3a3a3;
}

.c-purple { color: #8b4df6; }
.c-yellow { color: #ddf53d; }

/* List */
.work-list {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.project {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 56px;
  align-items: center;
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 28px;
  padding: 52px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.project:hover {
  border-color: #8b4df6;
  box-shadow: 0 24px 70px rgba(139, 77, 246, 0.12);
}

.project--alt:hover {
  border-color: #ddf53d;
  box-shadow: 0 24px 70px rgba(221, 245, 61, 0.08);
}

/* Alternate layout: visual on the left */
.project:nth-child(even) .project-info { order: 2; }
.project:nth-child(even) .project-visual { order: 1; }

.project-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.project-num {
  font-size: 0.68rem;
  font-weight: 600;
  color: #8b4df6;
  letter-spacing: 0.1em;
}

.project-cat {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a3a3a3;
  border: 1px solid #2a2a2a;
  padding: 5px 12px;
  border-radius: 100px;
}

.project-name {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.9rem, 3.4vw, 3rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 14px;
}

.project-tagline {
  font-size: clamp(0.98rem, 1.3vw, 1.1rem);
  font-weight: 600;
  color: #c4a7f7;
  line-height: 1.5;
  margin-bottom: 16px;
}

.project--alt .project-tagline { color: #ddf53d; }

.project-desc {
  font-size: 0.93rem;
  line-height: 1.85;
  color: #a3a3a3;
  margin-bottom: 24px;
}

.project-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-features li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #d8d8d8;
}

.feature-dot {
  width: 6px;
  height: 6px;
  margin-top: 8px;
  border-radius: 50%;
  background: #8b4df6;
  box-shadow: 0 0 8px rgba(139, 77, 246, 0.7);
  flex-shrink: 0;
}

.project--alt .feature-dot {
  background: #ddf53d;
  box-shadow: 0 0 8px rgba(221, 245, 61, 0.6);
}

/* Visual: code window */
.project-visual {
  position: relative;
  min-width: 0;
}

.visual-glow {
  position: absolute;
  inset: 15% 10%;
  background: #8b4df6;
  filter: blur(80px);
  opacity: 0.22;
  z-index: 0;
  transition: opacity 0.4s ease;
}

.project--alt .visual-glow { background: #ddf53d; opacity: 0.1; }
.project:hover .visual-glow { opacity: 0.35; }
.project--alt:hover .visual-glow { opacity: 0.16; }

.window {
  position: relative;
  z-index: 1;
  background: #0b0b0b;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.4s ease;
}

.project:hover .window { transform: translateY(-4px) rotate(-0.4deg); }

.window-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  border-bottom: 1px solid #1f1f1f;
  background: #121212;
}

.window-bar > span:not(.window-title) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2a2a2a;
}

.window-bar > span:nth-child(1) { background: #8b4df6; }
.window-bar > span:nth-child(2) { background: #ddf53d; }

.window-title {
  margin-left: 10px;
  font-size: 0.72rem;
  color: #6a6a6a;
  font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
}

.window-code {
  margin: 0;
  padding: 22px 22px 26px;
  font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
  font-size: 0.8rem;
  line-height: 1.75;
  color: #d8d8d8;
  overflow-x: auto;
  white-space: pre;
}

.k { color: #8b4df6; }
.p { color: #c4a7f7; }
.s { color: #a3a3a3; }
.ok { color: #ddf53d; }

@media (max-width: 1024px) {
  .work { padding: 100px 36px; }
  .project {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 32px;
  }
  .project:nth-child(even) .project-info { order: 1; }
  .project:nth-child(even) .project-visual { order: 2; }
}

@media (max-width: 768px) {
  .work { padding: 80px 24px; }
  .work-header {
    margin-bottom: 52px;
    text-align: left;
    align-items: flex-start;
  }
  .project { padding: 32px 22px; border-radius: 22px; }
  .window-code { font-size: 0.72rem; padding: 18px; }
}
</style>
