<script setup>
import { useForm } from '@inertiajs/vue3'
import { onMounted } from 'vue'

// Inisialisasi form
const form = useForm({
  name: '',
  email: '',
  phone: '',
  address: '',
  treeType: '',
  treeCount: 1,
  packageType: '',
  paymentMethod: '',
  message: ''
})

// Ambil jenis pohon dari query param (misalnya: ?tree=Jati)
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const tree = params.get('tree')
  if (tree) {
    form.treeType = decodeURIComponent(tree)
  }
})

// Kirim form ke route Laravel
function handleSubmit() {
  form.post('/adopttree', {
    onSuccess: () => {
      alert(`Terima kasih, ${form.name}! Formulir adopsi berhasil dikirim 🌱`)
    },
    onError: (errors) => {
      console.error(errors)
    }
  })
}
</script>

<template>
  <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
    <h2 class="text-2xl font-bold mb-6 text-center">Formulir Adopsi Pohon</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input v-model="form.name" required class="w-full mt-1 p-2 border rounded-md" type="text" placeholder="Masukkan nama lengkap" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input v-model="form.email" required class="w-full mt-1 p-2 border rounded-md" type="email" placeholder="Masukkan email aktif" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Nomor Telepon</label>
        <input v-model="form.phone" required class="w-full mt-1 p-2 border rounded-md" type="tel" placeholder="Contoh: 0812xxxxxxx" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
        <textarea v-model="form.address" required class="w-full mt-1 p-2 border rounded-md" rows="3" placeholder="Tuliskan alamat lengkap Anda"></textarea>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Jenis Pohon</label>
        <input :value="form.treeType" disabled class="w-full mt-1 p-2 border rounded-md bg-gray-100 text-gray-500" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Jumlah Pohon</label>
        <input v-model.number="form.treeCount" required min="1" class="w-full mt-1 p-2 border rounded-md" type="number" placeholder="Contoh: 3" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Pilih Paket Adopsi</label>
        <select v-model="form.packageType" required class="w-full mt-1 p-2 border rounded-md">
          <option disabled value="">-- Pilih Paket --</option>
          <option value="individu">Individu</option>
          <option value="korporat">Korporat</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Metode Pembayaran</label>
        <select v-model="form.paymentMethod" required class="w-full mt-1 p-2 border rounded-md">
          <option disabled value="">-- Pilih Metode --</option>
          <option>Transfer Bank</option>
          <option>QRIS</option>
          <option>Dompet Digital</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Ucapan atau Pesan (Opsional)</label>
        <textarea v-model="form.message" class="w-full mt-1 p-2 border rounded-md" rows="2" placeholder="Tuliskan pesan yang ingin disertakan di sertifikat"></textarea>
      </div>

      <div class="text-center mt-6">
        <button type="submit" class="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg">
          Kirim & Lanjutkan Pembayaran
        </button>
      </div>
    </form>
  </div>
</template>
