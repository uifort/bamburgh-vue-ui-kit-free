import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress';

Vue.use(Router);

const router = new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        {
            path: '/',
            name: 'home',
            component: () => import('./views/home.vue'),
        },
        { path: "*", component: () => import('./views/home.vue')}
    ]
});
router.beforeEach((to, from, next) => {
    NProgress.start()
    NProgress.set(0.1)
    next()
})
router.afterEach(() => {
    setTimeout(() => NProgress.done(), 500)
})

export default router