import Router from 'vue-router'
import Vue from 'vue'
import Index from '../views/index'
import Register from '../views/register'
import Login from '../views/login'
import Demo from '../views/demo'
// import Test from '../views/test'
import BlogIndex from '../views/blog/index'

Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            name: 'index',
            component: Index
        },
        {
            path:'/register',
            name: 'register',
            component: Register
        },
        {
            path:'/login',
            name: 'login',
            component: Login
        },
        {
            path:'/demo',
            name: 'demo',
            component: Demo
        },
        // {
        //     path:'/',
        //     name: 'blogIndex',
        //     component: Test
        // },
        {
            path:'/index/blogIndex',
            name: 'blogIndex',
            component: BlogIndex
        },
        
      
    ]
})