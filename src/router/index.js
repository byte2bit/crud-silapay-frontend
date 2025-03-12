import { createWebHistory, createRouter } from "vue-router"
import Home from '@/components/Home.vue'
import NewProduct from "../components/NewProduct.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/new",
        name: "NewProduct",
        component: NewProduct
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;