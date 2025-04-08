<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-xl">
    <h2 class="text-2xl font-bold mb-4">Daftar Akun</h2>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="Username" class="input" required />
      <input v-model="password" type="password" placeholder="Password" class="input" required />
      <button type="submit" class="btn">Daftar</button>
      <p v-if="message" class="text-red-500 mt-2">{{ message }}</p>
    </form>
    <p class="mt-4 text-sm">
      Sudah punya akun?
      <Link href="/login" class="text-blue-600">Login di sini</Link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { router, Link } from '@inertiajs/vue3'

const username = ref('')
const password = ref('')
const message = ref('')

function register() {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const userExists = users.find(u => u.username === username.value)

  if (userExists) {
    message.value = 'Username sudah terdaftar!'
    return
  }

  users.push({
    username: username.value,
    password: password.value,
    adoptedTrees: []
  })

  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('loggedInUser', username.value)

  router.visit('/dashboard')
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
  background-color: #4CAF50;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
