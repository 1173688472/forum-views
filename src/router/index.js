import {createRouter, createWebHistory} from "vue-router";
import page from "../views/index.vue"
import Home from "../views/home/index.vue"

const routes = [
    {
        path: '/',
        redirect: '/page'
    },
    {
        path: '/page',
        redirect: '/page/home',
        component: page,
        children:[
            {
                path: 'home',
                component: Home
            }
        ]
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router