<template>
  <div class="person">
    <h2>汽车信息：一辆{{car.brand}}车，价值{{car.price}}万元</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="b in games":key="b.id">{{b.name}}</li>
    </ul>
    <button @click="changeFirstGame">修改汽车的名字</button>
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">  
//深层式的响应式数据,reactive只能定义对象类型响应式数据
  import { reactive } from 'vue'

  //数据
  let car=reactive({brand:'奔驰',price:100})
  let games=reactive([
    {id:'bjj01',name:'csgo'},
    {id:'bjj02',name:'lol'},
    {id:'bjj03',name:'apex'}
  ])
  let obj=reactive({
    a:{
      b:{
        c:666
    }
  }
})

  //方法
  function changePrice(){
    car.price+=10
    console.log(car.price);
  }

  function changeFirstGame(){
    games[0].name='王者荣耀'
  }

  function changeObj(){
    obj.a.b.c=888
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