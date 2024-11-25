<template>
  <div class="person">
    <h2>当前求和为{{sum}}  放大10倍后：{{bigSum}}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
  
</template>

<script lang="ts" setup name="Person">
  /* 
    什么是hooks？
    ---本质是一个函数，把setup函数中使用的compositionAPI封装起来，类似于vue2中的mixin
    ---自定义hooks的优势：复用代码，让setup中的逻辑更清醒易懂
  */
  import useSum from "@/hooks/useSum"
  import useDog from "@/hooks/useDog"

  const {sum,bigSum,add}=useSum()
  const {dogList,getDog}=useDog()

</script>

<style scoped>
/* scoped局部样式 */
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
  img {
    height: 100px;
    margin-right: 10px;
  }
</style>