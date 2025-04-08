<template>
  <div class="bg-white shadow-lg rounded-xl overflow-hidden">
    <img :src="image" :alt="title" class="w-full h-48 object-cover">
    <div class="p-4">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <span :class="['text-sm font-semibold px-2 py-1 rounded-full', badgeColor]">
          {{ badge }}
        </span>
      </div>
      
      <!-- Fitur dengan ikon checklist -->
      <ul class="text-sm text-gray-600 mb-3 space-y-1">
        <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-2">
          <svg class="w-4 h-4 mt-1 text-green-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>

      <div class="text-xl font-bold text-green-700 mb-2">{{ price }}</div>
      <Link
        :href="`/adopttreeform?tree=${encodeURIComponent(title)}`"
        class="block mt-3 bg-green-700 hover:bg-green-800 text-white text-center py-2 rounded-lg"
      >
        🌱 Adopsi Sekarang
      </Link>
    </div>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
  title: String,
  image: String,
  badge: String,
  badgeColor: String,
  features: Array,
  price: String
})
</script>
