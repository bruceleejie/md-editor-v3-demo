import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'


const routes:Array<RouteRecordRaw> = [
    {
        path: '/edit', // 配置路由地址
        name: 'edit', // 设置路由名称
        component: () => import ("../views/edit.vue"), // 设置路由页面
        meta: {
            name: '编辑',
            navId: 'edit',
        },
    }, {
        path: '/preview', // 配置路由地址
        name: 'preview', // 设置路由名称
        component: () => import ("../views/view.vue"), // 设置路由页面
        meta: {
            name: '预览',
            navId: 'preview',
        },

    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach((to, from, next)=>{
    console.log('router', 9797, to, from);
    if(to.matched.length > 0) {
        next();
    } else {
        // next({path: '/'});
        next();
    }
})

export default router;