//引入createPinia用于创建pinia
import {defineStore} from 'pinia'

import axios from 'axios'
import {nanoid} from 'nanoid'
import { parse } from 'vue/compiler-sfc'
import {reactive} from 'vue'

//定义并暴露一个store
// export const useTalkStore=defineStore('talk',{
//     //动作---actions里面放置的是一个一个的方法，用于响应组件中的“动作”
//     actions:{
//         async getATalk(){
//         //发送请求，下面这行的写法：连续解构赋值+重命名
//         let {data:{content:title}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//         //把请求回来的字符串，包装成一个对象
//         let obj={id:nanoid(),title}
//         //放在数组中
//         this.talkList.unshift(obj)
//         }
//     },
//     //状态---真正存储数据的地方
//     state(){
//         return {
//             talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
//         }
//     },
//     //计算
//     getters:{}
// })

//组合式写法
export const useTalkStore=defineStore('talk',()=>{
    //talkList就是state
    const talkList=reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || []
    )

    async function getATalk(){
        //发送请求，下面这行的写法：连续解构赋值+重命名
        let {data:{content:title}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //把请求回来的字符串，包装成一个对象
        let obj={id:nanoid(),title}
        //放在数组中
        talkList.unshift(obj)
    }
    return {talkList,getATalk}
})