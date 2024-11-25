import {createRouter,createWebHashHistory} from 'vue-router'
import Login from '../views/login/Login.vue'
import Main from '../views/main/Main.vue'
import NotFound from '../views/not-found/NotFound.vue'

// 映射关系: path => component 还可以这样写
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            //重定向作用：将特定的路径，重新定向到已有路由。
            path: '/',
            redirect: '/main'
          },
          {
            name: 'login',
            path: '/login',
            component: Login
          },
          {
            name: 'main',
            path: '/main',
            component:Main
          },
          {
            name: 'notFound',
            path: '/:pathMatch(.*)',
            component: NotFound
          }
    ]
})


//暴露出去
export default router
