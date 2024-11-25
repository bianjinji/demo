<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  //ref可以定义基本类型的响应式数据，也可以定义对象类型的响应式数据
  import {ref} from 'vue'
  // 数据，原来是写在data中的，此时的name、age、tel都不是响应式的数据

  // 响应式数据
  let name = ref('张三')
  let age = ref(18)
  let tel = '13888888888'
  let address = '北京昌平区宏福苑·宏福科技园'

  console.log(1,name);
  console.log(2,age);
  console.log(3,tel);
  console.log(4,address);
  

  // 方法
  function changeName() {
    name.value = 'zhang-san' //注意：这样修改name，页面是没有变化的
    console.log(name) //name确实改了，但name不是响应式的
  }
  function changeAge() {
    age.value += 1 //注意：这样修改age，页面是没有变化的
    console.log(age) //age确实改了，但age不是响应式的
  }
  function showTel() {
    alert(tel)
  }
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