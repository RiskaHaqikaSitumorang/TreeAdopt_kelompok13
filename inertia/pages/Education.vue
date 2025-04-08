<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">Artikel Edukasi</h2>
    <p class="text-center text-gray-600 mb-10">
      Pelajari lebih lanjut tentang pentingnya menanam pohon dan kontribusinya terhadap lingkungan.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(artikel, index) in articles" :key="index" class="bg-white rounded-xl shadow hover:shadow-md transition duration-300">
        <img :src="artikel.image" alt="artikel" class="w-full h-52 object-cover rounded-t-xl" />
        <div class="p-5">
          <p class="text-sm font-semibold text-green-600 uppercase mb-1">{{ artikel.kategori }}</p>
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ artikel.judul }}</h3>
          <p class="text-gray-600 mb-4">{{ artikel.deskripsi }}</p>
          <a href="#" class="text-green-600 font-semibold hover:underline">Baca Selengkapnya ⟶</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    kategori: 'Pendidikan',
    judul: 'Kenapa Menanam Pohon itu Penting?',
    deskripsi: 'Pohon tidak hanya indah dipandang, tapi memiliki peran vital dalam menjaga keseimbangan ekosistem bumi.',
    image: 'inertia/assets/images/edu-1.jpg',
  },
  {
    kategori: 'Tutorial',
    judul: 'Cara Tanam Pohon Sendiri di Rumah',
    deskripsi: 'Panduan praktis untuk menanam dan merawat pohon di pekarangan rumah Anda dengan cara yang benar.',
    image: 'inertia/assets/images/edu-2.jpg',
  },
  {
    kategori: 'Info',
    judul: 'Jenis-jenis Pohon Penyerap CO₂ Terbaik',
    deskripsi: 'Mengenal berbagai jenis pohon dengan kemampuan penyerapan karbon terbaik untuk reboisasi.',
    image: 'inertia/assets/images/edu-3.jpg',
  },
]
</script>

<style scoped>
/* Opsional: tambahan gaya jika perlu */
</style>
