import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditProduct from '@/views/EditProduct.vue'
import TableCategories from '@/views/TableCategories.vue'
import EditCategorie from '@/views/EditCategorie.vue'
import AddProduct from '@/views/AddProduct.vue'
import AddCategorie from '@/views/AddCategorie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/editproduct/:id',
      name: 'EditProduct',
      component: EditProduct
    },
    {
      path: '/addproduct',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/tablecategories',
      name: 'TableCategories',
      component: TableCategories
    },
    {
      path: '/editcategorie',
      name: 'EditCategorie',
      component: EditCategorie
    },
    {
      path: '/addcategorie',
      name: 'AddCategorie',
      component: AddCategorie
    },
  ]
})

export default router
