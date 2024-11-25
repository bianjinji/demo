//概述：与消息订阅与发布（pubsub）类似，可以实现任意组件间的通信

//引入mitt
import mitt from 'mitt'

//调用mitt得到emitter,emitter能：绑定事件、触发事件
const emitter=mitt()
// 绑定事件
emitter.on('test1',()=>{
    console.log('test1被调用了')
})
emitter.on('test2',()=>{
    console.log('test2被调用了')
})

//触发事件
// setInterval(()=>{
//     emitter.emit('test1')
//     emitter.emit('test2')
// },1000)

// setTimeout(()=>{
//     emitter.off('test1')
//     emitter.off('test2')
// },3000)
//暴露emitter，让外部使用
export default emitter