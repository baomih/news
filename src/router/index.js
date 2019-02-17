import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        redirect: '/Home/__all__'
    }, {
        path: '/Home',
        redirect: '/Home/__all__'
    }, {
        path: '/Home/__all__',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_hot',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_society',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_entertainment',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_tech',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_car',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_sports',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_finance',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_military',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_world',
        name: 'Home',
        component: Home
    }, {
        path: '/Home/news_fashion',
        name: 'Home',
        component: Home
    }, {
        path: '/Search',
        name: 'Search',
        component: Search
    }]
})
