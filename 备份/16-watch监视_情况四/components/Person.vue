<template>
  <div class="person">
    <h2>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h2>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>汽车：{{person.car.c1}} {{person.car.c2}}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台汽车</button>
    <button @click="changeC2">修改第二台汽车</button>
    <button @click="changeCar">修改汽车</button>
  </div>
  
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'

  //数据
  let person=reactive({
    name:"张三",
    age:18,
    car:{
      c1:"奔驰",
      c2:"宝马"
    }
  })
  //方法
  function changeName(){
    person.name+='~'
  }

  function changeAge(){
    person.age+=1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '特斯拉'
  }
  function changeCar(){
    person.car = {c1:'奔驰',c2:'宝马'}
  }

  //监视
  //1.监视reactive定义的对象中的某个属性，且该属性是基本类型的，要写成函数式
  // watch(()=>person.name,(newValue,oldValue)=>{
  //   console.log('person.name改变了',newValue,oldValue)
  // })

  //2.监视reavtive定义的对象中的某个属性，且该属性是对象类型的，可以直接写，也可以写函数，更推荐写函数式
  watch(()=>person.car,(newValue,oldValue)=>{
    console.log('person.car改变了',newValue,oldValue);
  },{deep:true})


  /*
    结论：监视的要是对象里的属性，那么写函数式最好，注意点：如果是对象监视的是地址值，需要关注对象内部，需要关注对象内部，需要手动开启深度监视。
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