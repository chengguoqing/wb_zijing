import Vue from 'vue'
import Router from 'vue-router'
import index from './lpj/index.vue'
import esj from './esj/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '/',
            component: index,
            meta: {
                requireAuth: true,
                title: '零配件管理'
            },
            children: [{
                    name: "/",
                    path: 'add_lj',
                    meta: {
                        requireAuth: true,
                        title: '新增机型'
                    },
                    component: () =>
                        import ('@/lpj/add_lj')
            }, {
                    name: "/",
                    path: 'add_lpj',
                    meta: {
                        requireAuth: true,
                        title: '新增零件'
                    },
                    component: () =>
                        import ('@/lpj/add_lpj')
            }, {
                    name: "/",
                    path: 'mingxi',
                    meta: {
                        requireAuth: true,
                        title: '零配件明细'
                    },
                    component: () =>
                        import ('@/lpj/mingxi')
            }
            ]

        }, {
            path: '/esj',
            name: '/esj',
            component: esj,
            meta: {
                requireAuth: true,
                title: '二手机管理'
            },
            children: [{
                name: "/esj",
                path: 'add_esj',
                meta: {
                    requireAuth: true,
                    title: '新增机型'
                },
                component: () =>
                    import ('@/esj/add_esj')
            },{
                name: "/esj",
                path: 'xiangqing',
                meta: {
                    requireAuth: true,
                    title: '详情'
                },
                component: () =>
                    import ('@/esj/xiangqing')
            }]

        }

    ]
})
