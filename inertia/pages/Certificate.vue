<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <!-- Certificate Container -->
    <div class="relative max-w-2xl w-full bg-white rounded-lg shadow-lg border-4 border-green-200 overflow-hidden">
      <!-- Decorative Leaf Corner Elements -->
      <div class="absolute top-0 left-0 w-24 h-24">
        <svg viewBox="0 0 100 100" class="text-green-100">
          <path fill="currentColor" d="M50 0 Q70 40 100 50 Q70 60 50 100 Q30 60 0 50 Q30 40 50 0" />
        </svg>
      </div>
      <div class="absolute bottom-0 right-0 w-24 h-24 transform rotate-180">
        <svg viewBox="0 0 100 100" class="text-green-100">
          <path fill="currentColor" d="M50 0 Q70 40 100 50 Q70 60 50 100 Q30 60 0 50 Q30 40 50 0" />
        </svg>
      </div>

      <!-- Certificate Content -->
      <div class="relative z-10 p-8 md:p-12 text-center">
        <!-- Header -->
        <h1 class="text-3xl font-bold text-green-800 mb-2 border-b-2 border-green-200 pb-2">CERTIFICATE</h1>
        <h2 class="text-xl text-green-600 mb-8">of Tree Adoption</h2>

        <!-- Presentation Text -->
        <p class="text-lg italic text-gray-700 mb-12">THIS CERTIFICATE IS PROUDLY PRESENTED TO:</p>

        <!-- Recipient Name -->
        <div class="mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-green-900 underline decoration-green-300 decoration-2 underline-offset-8">
            {{ name || '[Recipient Name]' }}
          </h3>
        </div>

        <!-- Appreciation Text -->
        <div class="text-gray-700 mb-10 text-left mx-auto max-w-lg">
          <p class="mb-4">Sebagai bentuk apresiasi atas partisipasi dan kepedulian dalam melestarikan lingkungan melalui program Adopsi Pohon.</p>
          <p class="mb-4">Pohon yang diadopsi akan dirawat sebagai bagian dari upaya penghijauan dan konservasi alam.</p>
          <p>Semoga langkah kecil ini menjadi kontribusi besar bagi bumi dan generasi masa depan 🌱</p>
        </div>

        <!-- Tree Details -->
        <div class="bg-green-50 rounded-lg p-4 mb-8 text-left max-w-md mx-auto">
          <div class="flex items-start mb-2">
            <span class="text-green-600 mr-2 mt-1">📍</span>
            <div>
              <p class="font-semibold text-gray-800">Lokasi:</p>
              <p>{{ location || 'Lokasi Konservasi Cisarua, Jawa Barat' }}</p>
            </div>
          </div>
          <div class="flex items-start mb-2">
            <span class="text-green-600 mr-2 mt-1">🌳</span>
            <div>
              <p class="font-semibold text-gray-800">Jenis Pohon:</p>
              <p>{{ tree || 'Mahoni (Swietenia macrophylla)' }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">📅</span>
            <div>
              <p class="font-semibold text-gray-800">Tanggal Adopsi:</p>
              <p>{{ adoptionDate || today }}</p>
            </div>
          </div>
        </div>

        <!-- Signature -->
        <div class="mt-8 pt-4 border-t-2 border-green-200">
          <div class="h-16 mb-2 mx-auto w-48">
            <img src="../images/signature.png" alt="Tanda Tangan" class="h-full mx-auto" />
          </div>
          <p class="font-semibold text-gray-700">Koordinator Program</p>
          <p class="text-sm text-gray-500">TreeAdopt Foundation</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const urlParams = new URLSearchParams(window.location.search)

const name = computed(() => {
  const nameParam = urlParams.get('name')
  return nameParam ? decodeURIComponent(nameParam) : null
})

const tree = computed(() => {
  const treeParam = urlParams.get('tree')
  return treeParam ? decodeURIComponent(treeParam) : null
})

const location = computed(() => {
  const locParam = urlParams.get('location')
  return locParam ? decodeURIComponent(locParam) : null
})

const adoptionDate = computed(() => {
  const dateParam = urlParams.get('date')
  return dateParam ? decodeURIComponent(dateParam) : null
})

const today = new Date().toLocaleDateString('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
</script>

<style scoped>
/* Smooth transitions */
.leaf-corner {
  transition: all 0.3s ease;
}

/* Hover effects */
.certificate-container:hover .leaf-corner {
  transform: scale(1.05);
  opacity: 0.8;
}
</style>