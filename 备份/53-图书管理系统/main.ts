// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'

// //引入createPinia用于创建pinia
import {createPinia} from 'pinia'

import router from './router'

//整体导入 ElementPlus 组件库
import ElementPlus from 'element-plus' //导入 ElementPlus 组件库的所有模块和功能 
import 'element-plus/dist/index.css' //导入 ElementPlus 组件库所需的全局 CSS 样式


// 创建应用
const app = createApp(App)
//创建pinia
const pinia = createPinia()

//将 ElementPlus 插件注册到 Vue 应用中
app.use(ElementPlus) 
// 安装 Pinia
app.use(pinia)
// 安装路由器
app.use(router)
// 挂载应用
app.mount('#app')


