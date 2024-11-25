/*
    Store是一个保存：状态，业务逻辑的实体，每一个组件都可以读取，写入它。
    他有三个概念：state，action，getter 相当于组件中的：data，computed，methods
*/ 

//引入createPinia用于创建pinia
import {defineStore} from 'pinia'

//定义并暴露一个store
export const useCountStore=defineStore('count',{
    //动作
    actions:{},
    //状态---真正存储数据的地方
    state(){
        return{
            sum:6
        }
    },
    //计算
    getters:{}
})