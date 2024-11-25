import {ref,onMounted,computed, Suspense} from 'vue'

//默认导出
export default function useSum(){
    //数据
    let sum=ref(0)
    let bigSum=computed(()=>{
        return sum.value*10
    })

    //方法
    function add(){
        sum.value++
    }

    //钩子
    onMounted(()=>{
        add()
    })

    //给外部提供东西
    return{sum,add,bigSum}
}