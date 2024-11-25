<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
    <h2>当水温：{{temp}}℃</h2>
    <h2>当水位：{{height}}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
  
</template>

<script lang="ts" setup name="Person">
  import {ref,watch,watchEffect} from 'vue'

  //数据
  let temp=ref(0)
  let height=ref(0)

  //方法
  function changeTemp(){
    temp.value+=10
  } 
  function changeHeight(){
    height.value+=10
  }

  //监视--watch实现 需要明确监视对象
  // watch([temp,height],(value)=>{
  //   let [newTemp,newHeight]=value
  //   //逻辑
  //   if(newTemp>=60||newHeight>=80){
  //     console.log('给服务器发请求')
  //   }
  // })

  //监视--watchEffect实现 不需要明确监视对象
  watchEffect(()=>{
    if(temp.value>=60||height.value>=80){
      console.log('给服务器发请求')
    }
  })

  /*
    总结：
      都能监视响应式数据变化
      监视--watch实现 需要明确监视对象
      监视--watchEffect实现 不需要明确监视对象
  */
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>