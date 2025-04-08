<template>
  <div class="min-h-screen flex flex-col w-full">
    <Navbar />
    <main class="flex-grow w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/Components/Navbar.vue'
import Footer from '@/Components/Footer.vue'
</script>

<style>
/* Reset default margin and padding */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

/* Ensure all direct children take full width */
#app > div {
  width: 100%;
}
</style>