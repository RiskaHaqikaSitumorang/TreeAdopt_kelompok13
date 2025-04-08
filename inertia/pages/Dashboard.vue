<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4">🌳 Dashboard Pohon Saya</h2>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-green-50 p-4 rounded shadow text-center">
        <p class="text-sm text-gray-600">Pohon Teradopsi</p>
        <p class="text-2xl font-bold text-green-700">{{ trees.length }}</p>
      </div>
      <div class="bg-green-50 p-4 rounded shadow text-center">
        <p class="text-sm text-gray-600">CO₂ Terserap</p>
        <p class="text-2xl font-bold text-green-700">{{ totalCO2 }} kg</p>
      </div>
    </div>

    <div v-for="tree in trees" :key="tree.id" class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 class="text-xl font-semibold mb-2">{{ tree.name }} - {{ tree.code }}</h3>
      <span class="text-sm text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">{{ tree.status }}</span>

      <div class="flex items-center mt-4 gap-4">
        <div class="w-24 h-24 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">100x100</div>
        <div class="flex-1 space-y-3">
          <div>
            <p class="text-sm text-gray-700">Tinggi</p>
            <div class="w-full bg-gray-200 rounded h-2.5">
              <div class="bg-green-700 h-2.5 rounded" :style="{ width: (tree.height / 5) * 100 + '%' }"></div>
            </div>
            <p class="text-xs text-right text-gray-500 mt-1">{{ tree.height }} meter</p>
          </div>
          <div>
            <p class="text-sm text-gray-700">Diameter Batang</p>
            <div class="w-full bg-gray-200 rounded h-2.5">
              <div class="bg-green-700 h-2.5 rounded" :style="{ width: (tree.diameter / 30) * 100 + '%' }"></div>
            </div>
            <p class="text-xs text-right text-gray-500 mt-1">{{ tree.diameter }} cm</p>
          </div>
        </div>
      </div>

      <p class="text-sm text-gray-500 mt-3">📅 Update terakhir: {{ tree.updatedAt }}</p>

      <div class="mt-4">
        <div class="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400">600 × 400</div>
      </div>
    </div>

    <button class="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded">
      Lihat Semua Pohon Saya
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const trees = ref([
  {
    id: 1,
    name: 'Pohon Jati',
    code: 'J12784',
    height: 2.4,
    diameter: 18,
    status: 'Sehat',
    updatedAt: '12 Maret 2025',
    co2: 50,
  },
  {
    id: 2,
    name: 'Pohon Mahoni',
    code: 'M09123',
    height: 3.1,
    diameter: 22,
    status: 'Sehat',
    updatedAt: '10 Maret 2025',
    co2: 60,
  },
  {
    id: 3,
    name: 'Pohon Trembesi',
    code: 'T00789',
    height: 1.8,
    diameter: 15,
    status: 'Sehat',
    updatedAt: '11 Maret 2025',
    co2: 35,
  },
])

const totalCO2 = computed(() =>
  trees.value.reduce((acc, tree) => acc + tree.co2, 0)
)
</script>
