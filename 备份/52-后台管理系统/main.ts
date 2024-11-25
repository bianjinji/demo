import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import router from './router'
import pinia from './store'
//全局注册element-plus：方便简洁
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

//先使用路由
app.use(router)
app.use(pinia)
app.use(ElementPlus)
//再挂载整个应用到app容器中
app.mount('#app')
