import Vue from 'vue'
import VueRouter from 'vue-router'
import Select from "./components/Select";
import QrCode from "./components/QrCode";
import Profile from "./components/Profile";
import LastPage from "./components/LastPage";



Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/last',
            name: 'lastPage',
            component: LastPage
        },
        {
            path: '/profile/:id?',
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