<template>
  <nav class="flex items-center justify-between px-8 py-4 shadow bg-white">
    <!-- Brand Logo - FIXED -->
    <div class="flex items-center space-x-2">
      <img 
        src="../assets/logo pohon.png" 
        alt="Logo TreeAdopt" 
        class="h-8 w-auto"
      />
      <span class="text-green-700 font-bold text-xl">TreeAdopt</span>
    </div>

    <!-- NAV MENU -->
    <div class="flex items-center space-x-8">
      <ul class="flex space-x-6 text-sm font-medium text-gray-600">
        <li>
          <Link
            href="/"
            class="hover:text-green-700 relative"
            :class="{ 'text-black font-semibold': $page.url === '/' }"
          >
            Beranda
            <span v-if="$page.url === '/'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded"></span>
          </Link>
        </li>
        <li>
          <Link
            href="/adopt"
            class="hover:text-green-700"
            :class="{ 'text-black font-semibold': $page.url.startsWith('/adopt') }"
          >
            Adopsi Pohon
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            class="hover:text-green-700"
            :class="{ 'text-black font-semibold': $page.url.startsWith('/dashboard') }"
          >
            Dashboard Saya
          </Link>
        </li>
        <li>
          <Link
            href="/education"
            class="hover:text-green-700"
            :class="{ 'text-black font-semibold': $page.url.startsWith('/education') }"
          >
            Edukasi
          </Link>
        </li>
      </ul>

      <!-- Tombol Masuk -->
      <Link href="/login">
        <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow">
          Masuk
        </button>
      </Link>
    </div>
  </nav>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
</script>