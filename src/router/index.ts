import buttton from '../views/button.vue'
import collapse from '../views/collapse.vue'
import icon from '../views/icon.vue'
import tooltip from '../views/tooltip.vue'
import dropdown from '../views/dropdown.vue'
import message from '../views/message.vue'
import input from '../views/input.vue'
import Switch from '../views/switch.vue'
import select from '../views/select.vue'
import {createRouter, createWebHistory} from "vue-router";

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
    },
    {
        path: '/message',
        component: message
    },
    {
        path: '/input',
        component: input
    },
    {
        path: '/switch',
        component: Switch
    },
    {
        path: '/select',
        component: select
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router