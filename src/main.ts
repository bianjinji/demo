import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//全局注册element-plus：方便简洁
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入createPinia用于创建pinia
import {createPinia} from 'pinia'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //导入 ElementPlus 组件库的中文语言包
const app = createApp(App)
//创建pinia
const pinia=createPinia()

//先使用路由
app.use(router)
app.use(ElementPlus, {
  locale: zhCn // 设置 ElementPlus 组件库的区域语言为中文简体
})
//安装pinia
app.use(pinia)

//再挂载整个应用到app容器中
app.mount('#app')

