import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import NotTelegram from '@/pages/NotTelegram.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/not-tg', component: NotTelegram }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router