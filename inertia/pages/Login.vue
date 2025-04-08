<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-xl">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username" class="input" required />
      <input v-model="password" type="password" placeholder="Password" class="input" required />
      <button type="submit" class="btn">Login</button>
      <p v-if="message" class="text-red-500 mt-2">{{ message }}</p>
    </form>
    <p class="mt-4 text-sm">
      Belum punya akun? 
      <a href="/register" class="text-blue-600 underline">Daftar di sini</a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'

const username = ref('')
const password = ref('')
const message = ref('')

function login() {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(u => u.username === username.value && u.password === password.value)

  if (user) {
    localStorage.setItem('loggedInUser', username.value)
    router.visit('/dashboard') // Navigasi dengan Inertia
  } else {
    message.value = 'Username atau password salah!'
  }
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.btn {
  background-color: #3B82F6;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
