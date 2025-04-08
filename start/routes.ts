// start/routes.ts

import router from '@adonisjs/core/services/router'

router.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})

router.get('/login', async ({ inertia }) => {
  return inertia.render('Login')
})

router.get('/register', async ({ inertia }) => {
  return inertia.render('Register')
})

router.get('/dashboard', async ({ inertia }) => {
  return inertia.render('Dashboard')
})

router.get('/adopt', async ({ inertia }) => {
  return inertia.render('Adopt')
})


router.get('/certificate', async ({ inertia }) => {
  return inertia.render('Certificate')
})

router.get('/education', async ({ inertia }) => {
  return inertia.render('Education')
})

router.get('/adopt-tree-form', async ({ inertia }) => {
  return inertia.render('AdoptTreeForm')
})

router.get('/adopttreeform', async ({ inertia }) => {
  return inertia.render('AdoptTreeForm')
})
router.post('/adopttree', async ({ request, inertia }) => {
  const data = request.only(['name', 'email', 'tree'])

  // Kamu bisa simpan data ke database di sini (opsional)

  // Lanjut ke halaman payment pending
  return inertia.render('PaymentPending', { user: data.name, email: data.email, tree: data.tree })
})

router.get('/payment/pending', async ({ inertia }) => {
  return inertia.render('Payment/Pending') // atau lokasi file Vue kamu
})


// 404 fallback bisa kamu handle dari halaman NotFound.vue secara manual kalau mau
