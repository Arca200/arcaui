import buttton from '../views/button.vue'
import collapse from '../views/collapse.vue'
import icon from '../views/icon.vue'
import tooltip from '../views/tooltip.vue'
import dropdown from '../views/dropdown.vue'
<<<<<<< HEAD
=======
import message from '../views/message.vue'
>>>>>>> 8c70f0e (message)
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/button',
        component: buttton,
    },
    {
        path: '/collapse',
        component: collapse,
    },
    {
        path: '/icon',
        component: icon,
    },
    {
        path: '/tooltip',
        component: tooltip,
    },
    {
        path: '/dropdown',
        component: dropdown
<<<<<<< HEAD
=======
    },
    {
        path: '/message',
        component: message
>>>>>>> 8c70f0e (message)
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router