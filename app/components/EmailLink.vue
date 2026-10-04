<template>
  <a :href="href" rel="nofollow" @click="onClick">
    <slot :email="email" />
  </a>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// Link to an encoded address. Nothing readable is rendered until the user clicks:
// with `reveal`, the first click only shows the address (exposed via the slot);
// otherwise the click opens the mail client straight away.
const props = defineProps<{ encoded: string; reveal?: boolean }>()

const email = ref('')
const href = computed(() => (email.value ? `mailto:${email.value}` : '#'))

function onClick(e: MouseEvent) {
  if (email.value) return
  e.preventDefault()
  email.value = decodeEmail(props.encoded)
  if (!props.reveal) window.location.href = `mailto:${email.value}`
}
</script>
