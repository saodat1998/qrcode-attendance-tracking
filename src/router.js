import Vue from 'vue'
import VueRouter from 'vue-router'
import Timer from "./components/Timer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Select from "./components/Select";
import QrCode from "./components/QrCode";
import Profile from "./components/Profile";



Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'navbar',
            component: Navbar
        },
        {
            path: '/',
            name: 'profile',
            component: Profile
        },
        {
            path: '/select',
            name: 'select',
            component: Select
        },
        {
            path: '/qrCode',
            name: 'qrCode',
            component: QrCode
        },

    ]
})
