import {reactive,onMounted} from 'vue'
import axios from 'axios'
//axios 是一个基于 Promise 的 HTTP 库，可以用于浏览器和 node.js 中。
// 它提供了丰富的配置选项和拦截请求及响应的功能，
// 广泛应用于与服务器进行交互，发送 AJAX 请求等场景。

export default function useDog(){

    //数据
    let dogList=reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])

    //方法
    async function getDog(){
        try{
            let result =await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        }catch(error){
            alert(error)
        }
    }
    //挂载钩子
    onMounted(()=>{
        getDog()
    })

    //向外部提供东西
    return{dogList,getDog}
}