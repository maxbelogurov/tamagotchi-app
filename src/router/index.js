import {createMemoryHistory, createRouter} from 'vue-router'

import Home from '@/pages/Home.vue'
import NotTelegram from '@/pages/NotTelegram.vue'
import CreatePet from "@/pages/CreatePet.vue";

const routes = [
  {path: '/', component: Home},
  {path: '/not-tg', component: NotTelegram},
  {path: '/create-pet', component: CreatePet },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router