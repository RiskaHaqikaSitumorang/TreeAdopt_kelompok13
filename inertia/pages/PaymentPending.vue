<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
      <h2 class="text-2xl font-bold text-yellow-600 mb-4">Pembayaran Masih Diproses 🕒</h2>
      <p class="text-gray-700">Silakan tunggu beberapa saat atau cek kembali status pembayaran nanti.</p>
      <p class="text-sm text-gray-500 mt-4">Kamu akan diarahkan ke sertifikat secara otomatis...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { router } from '@inertiajs/vue3'

onMounted(() => {
  setTimeout(() => {
    router.visit('/certificate') // ganti path sesuai rute sertifikatmu
  }, 10000) // 10 detik
})
</script>
