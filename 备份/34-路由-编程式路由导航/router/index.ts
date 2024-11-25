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
import Detail from '@/pages/Detail.vue'

/*
创建路由的步骤：
    1. 创建路由对象
    2. 配置路由规则
    3. 创建路由出口
    4. 挂载路由对象到Vue实例中 
*/

//第二步：创建一个路由器
const router = createRouter({
    history: createWebHistory(),//路由器的工作模式
    routes: [//一个一个的路由规则
        {
            name:"zhuye",
            path: '/home',
            component: Home
        },
        {
            name:"xinwen",
            path: '/news',
            component: News,
            children:[
                {
                    name:'xiangqing',
                    path:'detail',
                    component:Detail,

                    //第一种写法：将路由收到的所有params参数作为props传给路由组件
                    //// 用params传参要用这个path:'detail/'
                    // props:true

                   // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                    // 用query传参要用这个path:'detail/'
                    props(route){
                      return route.query
                    }

                    // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
                    // props:{
                    //   a:100,
                    //   b:200,
                    //   c:300
                    //  }
                } 
            ]
        },
        {
            name:"guanyu",
            path: '/about',
            component: About
        }
    ]
})

//暴露出去
export default router