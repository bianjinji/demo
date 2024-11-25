//引入createPinia用于创建pinia
import {defineStore} from 'pinia'

import axios from 'axios'
import {nanoid} from 'nanoid'

//定义并暴露一个store
export const useTalkStore=defineStore('talk',{
    //动作---actions里面放置的是一个一个的方法，用于响应组件中的“动作”
    actions:{
        async getATalk(){
        //发送请求，下面这行的写法：连续解构赋值+重命名
        let {data:{content:title}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //把请求回来的字符串，包装成一个对象
        let obj={id:nanoid(),title}
        //放在数组中
        this.talkList.unshift(obj)
        }
    },
    //状态---真正存储数据的地方
    state(){
        return {
            talkList:[
                {id:'ftrfasdf01',title:'今天你有点怪，哪里怪？怪好看的！'},
                {id:'ftrfasdf02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
                {id:'ftrfasdf03',title:'心里给你留了一块地，我的死心塌地'}
            ]
        }
    },
    //计算
    getters:{}
})