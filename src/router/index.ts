import buttton from '../views/button.vue'
import collapse from '../views/collapse.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/button',
        component: buttton,
    },
    {
        path: '/collapse',
        component: collapse,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router