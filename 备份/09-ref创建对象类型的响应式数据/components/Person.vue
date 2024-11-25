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
  </div>
</template>

<script lang="ts" setup name="Person">  
//深层式的响应式数据,只能定义对象类型响应式数据
  import { ref,reactive } from 'vue'

  //数据
  let car=ref({brand:'奔驰',price:100})
  let games=ref([
    {id:'bjj01',name:'csgo'},
    {id:'bjj02',name:'lol'},
    {id:'bjj03',name:'apex'}
  ])

  let obj = reactive({x:999})
  console.log(car)
  console.log(obj)
  //方法
  function changePrice(){
    car.value.price+=10
    console.log(car.value.price);
  }

  function changeFirstGame(){
    games.value[0].name='王者荣耀'
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