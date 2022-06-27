import Index from '@/components/Index.vue'

const routes = [{
    path: "/",
    name: "index",
    component: Index,
    redirect: 'home',
    children: [
        {
            path: 'home',
            name: 'home',
            component: () => import('@/views/Home.vue')
        }
    ]
}];

export default routes;