import {createRouter, createWebHistory} from "vue-router";
import page from "../views/index.vue"
import Home from "../views/home/index.vue"
import Article from "../views/article/index.vue"
import Login from "../views/login.vue"
import Register from "../views/register.vue"

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
            },
            {
                path: 'article',
                component: Article
            }

        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router