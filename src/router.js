import Vue from 'vue'
import Router from 'vue-router'
import index from './lpj/index.vue'
import esj from './esj/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: index,
            meta: {
                requireAuth: true,
                title: '零配件管理'
            },
            children: [{
                    name: "lpj/add_lj",
                    path: 'add_lj',
                    meta: {
                        requireAuth: true,
                        title: '新增机型'
                    },
                    component: () =>
                        import ('@/lpj/add_lj')
            }, {
                    name: "lpj/add_lpj",
                    path: 'add_lpj',
                    meta: {
                        requireAuth: true,
                        title: '新增零件'
                    },
                    component: () =>
                        import ('@/lpj/add_lpj')
            }
            ]

        }, {
            path: '/esj',
            name: 'esj',
            component: esj,
            meta: {
                requireAuth: true,
                title: '二手机管理'
            },
            children: [{
                name: "esj/add_esj",
                path: 'add_esj',
                meta: {
                    requireAuth: true,
                    title: '新增机型'
                },
                component: () =>
                    import ('@/esj/add_esj')
            }]

        }

    ]
})
