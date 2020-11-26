import Router from 'vue-router'
import Vue from 'vue'
import Index from '../views/index'
import Register from '../views/register'
import Login from '../views/login'
import Demo from '../views/demo'
import BlogHeader from "@/components/blog/BlogHeader";
import BlogIndex from '../views/blog/index'
import Article from "@/views/blog/article";

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
        {
            path:'/test',
            name: 'blogIndex',
            component: BlogHeader
        },
        {
            path:'/index/blogIndex',
            name: 'blogIndex',
            component: BlogIndex
        },
        {
            path:'/index/articleDetail/:id',
            name: 'article',
            component: Article
        }
        
      
    ]
})
