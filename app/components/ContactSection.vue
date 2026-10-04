<template>
  <section class="contact" id="contact" :aria-label="t('contact.label')">
    <div class="contact-inner">
      <!-- Left: pitch -->
      <div class="contact-pitch">
        <div class="section-label">
          <span class="deco-dot" />
          <span>{{ t('contact.label') }}</span>
        </div>
        <h2 class="section-title">
          {{ t('contact.title1') }}<br />
          {{ t('contact.title2') }} <span class="c-purple">{{ t('contact.title3') }}</span><span class="c-yellow">.</span>
        </h2>
        <p class="section-desc">{{ t('contact.desc') }}</p>

        <EmailLink v-slot="{ email }" class="contact-mail" :encoded="ENCODED_EMAILS.devcrafters" reveal>
          <span class="mail-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
            </svg>
          </span>
          <span class="mail-text">
            <span class="mail-label">{{ t('contact.mailLabel') }}</span>
            <span class="mail-address">{{ email || t('contact.mailReveal') }}</span>
          </span>
          <span class="mail-arrow" aria-hidden="true">↗</span>
        </EmailLink>

        <ul class="contact-points">
          <li v-for="(point, i) in points" :key="i"><span class="point-dot" />{{ rt(point) }}</li>
        </ul>
      </div>

      <!-- Right: form -->
      <form class="contact-form" @submit.prevent="onSubmit" novalidate>
        <Transition name="fade" mode="out-in">
          <div v-if="status === 'success'" key="ok" class="form-success" role="status">
            <span class="success-icon" aria-hidden="true">✦</span>
            <h3>{{ t('contact.success.title') }}</h3>
            <p>
              <i18n-t keypath="contact.success.text" scope="global">
                <template #name>{{ sentName }}</template>
                <template #email><strong>{{ sentEmail }}</strong></template>
              </i18n-t>
            </p>
            <button type="button" class="btn btn--outline" @click="reset">{{ t('contact.success.again') }}</button>
          </div>

          <div v-else key="form" class="form-fields">
            <div class="field-row">
              <label class="field">
                <span class="field-label">{{ t('contact.form.name') }} *</span>
                <input v-model.trim="form.name" type="text" name="name" autocomplete="name" :placeholder="t('contact.form.namePh')" :aria-invalid="!!errors.name" />
                <span v-if="errors.name" class="field-error">{{ t(errors.name) }}</span>
              </label>
              <label class="field">
                <span class="field-label">{{ t('contact.form.email') }} *</span>
                <input v-model.trim="form.email" type="email" name="email" autocomplete="email" :placeholder="t('contact.form.emailPh')" :aria-invalid="!!errors.email" />
                <span v-if="errors.email" class="field-error">{{ t(errors.email) }}</span>
              </label>
            </div>

            <div class="field-row">
              <label class="field">
                <span class="field-label">{{ t('contact.form.company') }}</span>
                <input v-model.trim="form.company" type="text" name="company" autocomplete="organization" :placeholder="t('contact.form.optional')" />
              </label>
              <label class="field">
                <span class="field-label">{{ t('contact.form.phone') }}</span>
                <input v-model.trim="form.phone" type="tel" name="phone" autocomplete="tel" :placeholder="t('contact.form.optional')" />
              </label>
            </div>

            <fieldset class="field">
              <legend class="field-label">{{ t('contact.form.needs') }}</legend>
              <div class="chips">
                <button
                  v-for="(opt, i) in serviceOptions"
                  :key="i"
                  type="button"
                  class="chip"
                  :class="{ 'chip--on': form.services.includes(i) }"
                  :aria-pressed="form.services.includes(i)"
                  @click="toggleService(i)"
                >
                  {{ opt }}
                </button>
              </div>
            </fieldset>

            <label class="field">
              <span class="field-label">{{ t('contact.form.message') }} *</span>
              <textarea v-model.trim="form.message" name="message" rows="5" :placeholder="t('contact.form.messagePh')" :aria-invalid="!!errors.message" />
              <span v-if="errors.message" class="field-error">{{ t(errors.message) }}</span>
            </label>

            <!-- Honeypot: bots fill it, humans never see it -->
            <input v-model="form.honey" type="text" name="_honey" class="honey" tabindex="-1" autocomplete="off" aria-hidden="true" />

            <p v-if="status === 'error'" class="form-error" role="alert">
              {{ t('contact.errors.send') }}
              <a href="#" rel="nofollow" @click.prevent="openMailFallback">{{ t('contact.errors.fallback') }}</a>
            </p>

            <button type="submit" class="btn btn--primary" :disabled="status === 'sending'">
              <span v-if="status === 'sending'" class="spinner" aria-hidden="true" />
              {{ status === 'sending' ? t('contact.form.sending') : t('contact.form.submit') }}
            </button>
          </div>
        </Transition>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const { t, tm, rt, locale } = useI18n()

// FormSubmit relays the form to the inbox without needing our own backend.
// The very first submission triggers an activation email that must be confirmed;
// that email also gives a random alias — set it in NUXT_PUBLIC_FORMSUBMIT_ID so
// the real address stops travelling in the request URL.
const { public: { formsubmitId } } = useRuntimeConfig()
const endpoint = () =>
  `https://formsubmit.co/ajax/${formsubmitId || decodeEmail(ENCODED_EMAILS.devcrafters)}`

const points = computed(() => tm('contact.points') as unknown as any[])
const serviceOptions = computed(() => (tm('contact.form.options') as unknown as any[]).map((o) => rt(o)))

// Services are stored by index so the selection survives a language switch.
const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  services: [] as number[],
  message: '',
  honey: '',
})

// Errors hold message keys, so they re-translate when the language changes.
const errors = reactive<{ name?: string; email?: string; message?: string }>({})
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const sentName = ref('')
const sentEmail = ref('')

const selectedServices = () => form.services.map((i) => serviceOptions.value[i]).join(', ')

function toggleService(i: number) {
  const pos = form.services.indexOf(i)
  if (pos === -1) form.services.push(i)
  else form.services.splice(pos, 1)
}

function validate() {
  errors.name = form.name ? undefined : 'contact.errors.name'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? undefined : 'contact.errors.email'
  errors.message = form.message.length >= 10 ? undefined : 'contact.errors.message'
  return !errors.name && !errors.email && !errors.message
}

function openMailFallback() {
  const subject = encodeURIComponent(`Nuevo proyecto — ${form.name || 'Contacto web'}`)
  const lines = [form.message, '', `Nombre: ${form.name}`, `Correo: ${form.email}`]
  if (form.company) lines.push(`Empresa: ${form.company}`)
  if (form.phone) lines.push(`Teléfono: ${form.phone}`)
  if (form.services.length) lines.push(`Servicios: ${selectedServices()}`)
  const body = encodeURIComponent(lines.join('\n'))
  window.location.href = `mailto:${decodeEmail(ENCODED_EMAILS.devcrafters)}?subject=${subject}&body=${body}`
}

async function onSubmit() {
  if (status.value === 'sending' || !validate()) return

  // Silently drop bot submissions.
  if (form.honey) {
    status.value = 'success'
    return
  }

  status.value = 'sending'
  try {
    // The notification email stays in Spanish for the team; "Idioma" tells
    // which language to reply in.
    const res = await fetch(endpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Nuevo contacto desde la web — ${form.name}`,
        _template: 'table',
        _replyto: form.email,
        Nombre: form.name,
        Correo: form.email,
        Empresa: form.company || '—',
        Teléfono: form.phone || '—',
        Servicios: selectedServices() || '—',
        Idioma: locale.value === 'en' ? 'Inglés' : 'Español',
        Mensaje: form.message,
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || String(data.success) !== 'true') {
      throw new Error(data.message || 'FormSubmit rejected the message')
    }
    sentName.value = form.name
    sentEmail.value = form.email
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}

function reset() {
  Object.assign(form, { name: '', email: '', company: '', phone: '', services: [], message: '', honey: '' })
  status.value = 'idle'
}
</script>
<style scoped>
.contact {
  position: relative;
  z-index: 2;
  padding: 140px 60px;
  border-top: 1px solid #1f1f1f;
}

.contact-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: start;
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
  max-width: 460px;
  font-size: clamp(0.9rem, 1.3vw, 1.05rem);
  line-height: 1.85;
  color: #a3a3a3;
  margin-bottom: 40px;
}

.c-purple { color: #8b4df6; }
.c-yellow { color: #ddf53d; }

/* Direct email card */
.contact-mail {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  border: 1px solid #2a2a2a;
  border-radius: 18px;
  background: #111111;
  max-width: 440px;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.contact-mail:hover {
  border-color: #ddf53d;
  transform: translateY(-2px);
}

.mail-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(139, 77, 246, 0.1);
  color: #c4a7f7;
  flex-shrink: 0;
}

.mail-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.mail-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6a6a6a;
}

.mail-address {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  overflow-wrap: anywhere;
}

.mail-arrow {
  color: #3a3a3a;
  font-size: 1.1rem;
  transition: color 0.25s ease, transform 0.25s ease;
}

.contact-mail:hover .mail-arrow {
  color: #ddf53d;
  transform: translate(2px, -2px);
}

.contact-points {
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-points li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: #d8d8d8;
}

.point-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8b4df6;
  box-shadow: 0 0 8px rgba(139, 77, 246, 0.7);
  flex-shrink: 0;
}

/* Form */
.contact-form {
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 28px;
  padding: 40px;
  position: relative;
  overflow: hidden;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: -120px;
  right: -120px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: #8b4df6;
  filter: blur(90px);
  opacity: 0.18;
  pointer-events: none;
}

.form-fields {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 0;
  min-width: 0;
}

.field-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a3a3a3;
  padding: 0;
  margin-bottom: 0;
}

fieldset.field .field-label { margin-bottom: 8px; }

.field input,
.field textarea {
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #ffffff;
  background: #0b0b0b;
  border: 1px solid #2a2a2a;
  border-radius: 14px;
  padding: 14px 16px;
  outline: none;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field input::placeholder,
.field textarea::placeholder { color: #4a4a4a; }

.field input:focus,
.field textarea:focus {
  border-color: #8b4df6;
  box-shadow: 0 0 0 3px rgba(139, 77, 246, 0.18);
}

.field [aria-invalid='true'] { border-color: #ff6b6b; }

.field-error {
  font-size: 0.78rem;
  color: #ff8a8a;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #a3a3a3;
  background: transparent;
  border: 1px solid #2a2a2a;
  border-radius: 100px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chip:hover { border-color: #3a3a3a; color: #ffffff; }

.chip--on,
.chip--on:hover {
  border-color: rgba(221, 245, 61, 0.55);
  color: #ddf53d;
  background: rgba(221, 245, 61, 0.07);
}

.honey {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.form-error {
  font-size: 0.85rem;
  line-height: 1.6;
  color: #ff8a8a;
  background: rgba(255, 107, 107, 0.06);
  border: 1px solid rgba(255, 107, 107, 0.25);
  border-radius: 12px;
  padding: 12px 16px;
}

.form-error a {
  color: #ddf53d;
  font-weight: 600;
  margin-left: 4px;
}

/* Buttons (mirrors the landing hero buttons) */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  align-self: flex-start;
  background: #8b4df6;
  color: #ffffff;
  border: 2px solid #8b4df6;
}

.btn--primary:hover:not(:disabled) {
  background: #a06cff;
  border-color: #a06cff;
  transform: translateY(-2px);
  box-shadow: 0 14px 44px rgba(139, 77, 246, 0.4);
}

.btn--primary:disabled { opacity: 0.7; cursor: wait; }

.btn--outline {
  background: transparent;
  color: #ffffff;
  border: 2px solid #3a3a3a;
}

.btn--outline:hover {
  border-color: #ddf53d;
  color: #ddf53d;
}

.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* Success */
.form-success {
  position: relative;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
}

.success-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(221, 245, 61, 0.4);
  color: #ddf53d;
  font-size: 1.4rem;
  box-shadow: 0 0 40px rgba(221, 245, 61, 0.15);
}

.form-success h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.form-success p {
  max-width: 340px;
  color: #a3a3a3;
  line-height: 1.7;
  margin-bottom: 8px;
}

.form-success strong { color: #ffffff; }

.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; transform: translateY(8px); }

@media (max-width: 1024px) {
  .contact { padding: 100px 36px; }
  .contact-inner { grid-template-columns: 1fr; gap: 56px; }
}

@media (max-width: 768px) {
  .contact { padding: 80px 24px; }
  .contact-form { padding: 28px 20px; border-radius: 22px; }
  .field-row { grid-template-columns: 1fr; }
  .btn--primary { align-self: stretch; }
}
</style>
