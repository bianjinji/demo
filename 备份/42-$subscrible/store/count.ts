/*
    Store是一个保存：状态，业务逻辑的实体，每一个组件都可以读取，写入它。
    他有三个概念：state，action，getter 相当于组件中的：data，computed，methods
*/ 

//引入createPinia用于创建pinia
import {defineStore} from 'pinia'

//定义并暴露一个store
export const useCountStore=defineStore('count',{
    //动作---actions里面放置的是一个一个的方法，用于响应组件中的“动作”
    actions:{
        increment(value: number){
            if(this.sum<10){
                //修改数据（this是当前的store）
                this.sum+=value
            }
        }
    },
    //状态---真正存储数据的地方
    state(){
        return{
            sum:1,
            school:'atguigu',
            address:'宏福科技园'
        }
    },
    //计算---对数据的追加和修改
    getters:{
        bigSum():number{
            return this.sum*10
        },
        upperSchool():string{
            return this.school.toUpperCase()
        }
    } 
})