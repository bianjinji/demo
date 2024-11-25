// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'

//引入createPinia用于创建pinia
import {createPinia} from 'pinia'

import router from './router'

// 创建应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()

// 安装插件
app.use(pinia)
// 安装路由器
app.use(router)
// 挂载应用
app.mount('#app')


