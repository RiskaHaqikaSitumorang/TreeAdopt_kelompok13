<template>
  <div class="h-screen w-full overflow-hidden">
    <!-- Hero Section with Nature Background -->
    <section class="relative h-full w-full flex items-center justify-center px-6 bg-gray-900">
      <!-- Background image with overlay -->
      <div class="absolute inset-0">
        <img 
          src= "../assets/background.png"
          alt="Forest background"
          class="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div class="relative max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white animate-fadein">
          Selamat Datang di <span class="text-green-300">TreeAdopt</span>
        </h1>
        <p class="text-xl text-green-100 max-w-2xl mx-auto mb-8">
          Bersama, kita bisa menghijaukan bumi dengan mengadopsi pohon dan menjaga lingkungan.
        </p>
        <Link 
          href="/adopt" 
          class="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
        >
          🌱 Adopsi Pohon Sekarang
        </Link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<style scoped>
@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadein {
  animation: fadein 0.8s ease-out forwards;
}

/* Ensure no scrolling */
html, body {
  overflow: hidden;
}
</style>