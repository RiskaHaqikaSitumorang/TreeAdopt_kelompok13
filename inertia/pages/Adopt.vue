<template>
  <div class="bg-gray-100 min-h-screen py-10 px-4">
    <h2 class="text-center text-2xl font-bold mb-8">🌳 Adopsi Pohon Sekarang</h2>
    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <TreeCard
        title="Pohon Jati"
        image="inertia/assets/images/pohon-jati.jpg"
        badge="Terlaris"
        badgeColor="bg-green-100 text-green-700"
        :features="['Penyerap CO₂ tinggi', 'Umur hingga 100 tahun', 'Hutan Kota Jakarta']"
        price="Rp250.000"
      />
      <TreeCard
        title="Pohon Mangrove"
        image="inertia/assets/images/pohon mangrove.jpg"
        badge="Ekosistem Vital"
        badgeColor="bg-blue-100 text-blue-700"
        :features="['Pencegah abrasi pantai', 'Habitat biota laut', 'Pesisir Utara Jakarta']"
        price="Rp175.000"
      />
      <TreeCard
        title="Pohon Buah Lokal"
        image="inertia/assets/images/pohon buah lokal.jpg"
        badge="Menghasilkan Buah"
        badgeColor="bg-yellow-100 text-yellow-700"
        :features="['Panen buah organik', 'Penyerapan air hujan', 'Lahan Mitra Petani']"
        price="Rp300.000"
      />
      <TreeCard
        title="Pohon Cemara"
        image="inertia/assets/images/pohon cemara.jpg"
        badge="Penghijauan Dataran Tinggi"
        badgeColor="bg-green-200 text-green-800"
        :features="['Tahan angin kencang dan cuaca ekstrem', 'Cocok untuk penghijauan pegunungan', 'Area Taman Kota & Lereng Gunung']"
        price="Rp225.000"
      />
      <TreeCard
        title="Pohon Pinus"
        image="inertia/assets/images/pohon pinus.jpg"
        badge="Konservasi Alam"
        badgeColor="bg-blue-200 text-blue-800"
        :features="['Penyerap polusi udara', 'Cocok untuk konservasi tanah', 'Area Pegunungan Jawa Barat']"
        price="Rp200.000"
      />
      <TreeCard
        title="Pohon Damar"
        image="inertia/assets/images/pohon damar.jpg"
        badge="Hutan Konservasi"
        badgeColor="bg-amber-100 text-amber-700"
        :features="['Cocok untuk hutan lindung dan konservasi', 'Penghasil getah alami', 'Area Hutan Pegunungan']"
        price="Rp290.000"
      />
      <TreeCard
        title="Pohon Ketapang Kencana"
        image="inertia/assets/images/pohon kencana.jpg"
        badge="Penghijauan Kota"
        badgeColor="bg-yellow-200 text-yellow-800"
        :features="['Teduh dan rindang, cocok di area urban', 'Daya serap polusi tinggi', 'Area Sekolah & Jalan Perkotaan']"
        price="Rp180.000"
      />
      <TreeCard
        title="Pohon Trembesi"
        image="inertia/assets/images/pohon trembesi.jpg"
        badge="Penyerap Emisi"
        badgeColor="bg-green-300 text-green-900"
        :features="['Penyerap CO₂ sangat tinggi (1 pohon bisa 28 ton/tahun)', 'Membantu menurunkan suhu kota', 'Cocok untuk area taman & pinggir jalan']"
        price="Rp275.000"
      />
      <TreeCard
        title="Pohon Mahoni"
        image="inertia/assets/images/pohon mahoni.jpg"
        badge="Penghijauan Kota"
        badgeColor="bg-red-100 text-red-700"
        :features="['Penyerap CO₂ sangat tinggi', 'Mengurangi polusi udara kota', 'Ditanam di Taman Kota & Pinggir Jalan']"
        price="Rp275.000"
      />
    </div>
  </div>
</template>

<script>
import TreeCard from "../components/TreeCard.vue";

export default {
  name: "Adopt",
  components: { TreeCard }
};
</script>
