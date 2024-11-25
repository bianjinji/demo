import {defineStore} from 'pinia'

const useCounterStore=defineStore('counter',{
    //数据
    state:()=>({
        count:100
    }),
    getters:{
        doubleCounter(state){
            return state.count*2
        }
    },
    actions:{
        changeCounterAction(newCount:number){
            this.count=newCount
        }
    }
})


export default useCounterStore