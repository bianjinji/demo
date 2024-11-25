//创建一个路由器，并暴露出去

//第一步：导入createRouter
/*
    history模式:--createWebHistory
        优点：`URL`更加美观，不带有`#`，更接近传统的网站`URL`。   
        缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有`404`错误。


    hash模式:--createWebHashHistory
        优点：兼容性更好，因为不需要服务器端处理路径。
        缺点：`URL`带有`#`不太美观，且在`SEO`优化方面相对较差。

*/ 
import { createRouter, createWebHistory ,createWebHashHistory} from "vue-router";

//引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

/*
创建路由的步骤：
    1. 创建路由对象
    2. 配置路由规则
    3. 创建路由出口
    4. 挂载路由对象到Vue实例中 
*/

//第二步：创建一个路由器
const router = createRouter({
    history: createWebHashHistory(),//路由器的工作模式
    routes: [//一个一个的路由规则
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        }
    ]
})

//暴露出去
export default router