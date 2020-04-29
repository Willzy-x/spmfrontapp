import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [

    //
    {
        path: '/',
        name: 'Introduction',
        component: () => import('../views/Introduction')
    },

    {
        path: '/student/login',
        name: 'StudentLogin',
        component: () => import('../views/Login')
    },

    {
        path: '/student/home',
        name: 'StudentHome',
        component: () => import('../views/StudentInterface')
    }
];

const router = new VueRouter({
    routes
});

export default router;