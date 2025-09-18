<template>
  <div
    class="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-yellow-200"
  >
    <div class="relative">
      <div
        class="flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-white to-yellow-100 rounded-3xl shadow-xl p-4 sm:p-10 md:p-16 max-w-xs sm:max-w-md md:max-w-2xl w-full mx-4 sm:mx-6 relative z-20 border-4 border-purple-500 animate-border-pulse"
        style="overflow: visible"
      >
        <div class="mb-6 sm:mb-8">
          <img
            src="/devcrafters.svg"
            alt="DevCrafters Logo"
            class="h-20 sm:h-28 md:h-32 mx-auto"
          />
        </div>
        <h1
          class="text-3xl sm:text-5xl md:text-6xl font-extrabold text-purple-500 mb-2 sm:mb-4 tracking-wide text-center"
        >
          Próximamente
        </h1>
        <p
          class="text-base sm:text-xl md:text-2xl text-gray-800 opacity-80 text-center"
        >
          Estamos trabajando en algo increíble para ti.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes border-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 #8b5cf6;
    border-color: #8b5cf6;
  }
  50% {
    box-shadow: 0 0 16px 4px #8b5cf6;
    border-color: #a78bfa;
  }
}
.animate-border-pulse {
  animation: border-pulse 1.5s infinite;
}
</style>
