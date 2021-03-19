import {createRouter, createWebHistory} from 'vue-router'

const home_page = () => import("../views/home_page.vue")
const login = () => import("../views/login.vue")
const test1 = () => import("../views/test1.vue")
const test2 = () => import("../components/test2.vue")
const test3 = () => import("../components/test3.vue")



// import HelloWorld from '../components/test1.vue'

const routerHistory = createWebHistory()


const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: login,
            name:'login'
        },
        {
            path: '/home_page',
            component: home_page,
            children: [
                {
                    path: "test1",
                    component: test1
                },
                {
                    name:'test2',
                    path: "test2",
                    component: test2,
                },
                {
                    name:'test3',
                    path: "/home_page/test2",
                    component: test3
                }

            ]
        }
    ]
})

export default router
