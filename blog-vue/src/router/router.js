import Router from 'vue-router'
import Vue from 'vue'

import welcome from "@/views/v1/welcome/welcome";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: welcome,
            component: welcome
        }
        // {
        //     path:'/',
        //     name: 'index',
        //     component: Index
        // },
        // {
        //     path:'/register',
        //     name: 'register',
        //     component: Register
        // },
        // {
        //     path:'/login',
        //     name: 'login',
        //     component: Login
        // },
        // {
        //     path:'/demo',
        //     name: 'demo',
        //     component: Demo
        // },
        // {
        //     path:'/test',
        //     name: 'blogIndex',
        //     component: BlogHeader
        // },
        // {
        //     path:'/index/blogIndex',
        //     name: 'blogIndex',
        //     component: BlogIndex
        // },
        // {
        //     path:'/index/articleDetail/:id',
        //     name: 'article',
        //     component: Article
        // }
        //

    ]
})
