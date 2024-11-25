  <template>
    <div class="app">
      <h2>当前sum1为：{{sum1}}</h2>
      <h2>当前sum2为：{{sum2}}</h2>
      <h2>当前car1为：{{car1}}</h2>
      <h2>当前car2为：{{car2}}</h2>
      <button @click="changeSum1">点击我sum1+1</button>
      <button @click="changeSum2">点击我sum2+1</button>
      <button @click="changeBrand2">修改品牌(car2)</button>
      <button @click="changeColor2">修改颜色(car2)</button>
      <button @click="changePrice2">修改价格(car2)</button>
    </div>
  </template>
  
  <script setup lang="ts" name="App">
  /*
    readonly是用于创建一个对象的深只读属性
    shallowReadonly是只对对象第一层属性进行只读，对象内部属性还是可以修改的

    作用：
    1.防止数据被修改
    2.浅层只读，只对第一层属性进行只读，对象内部属性还是可以修改的
    3.保护数据
  */
    import {ref,reactive,readonly,shallowReadonly} from 'vue'

    //数据
    let sum1=ref(10)
    let sum2=readonly(sum1)
    let car1=reactive({
      brand:'奔驰',
      options:{
        color:'红色',
        price:100
      }
    })
    let car2=shallowReadonly(car1)

    //方法
    function changeSum1(){
      sum1.value += 1
    }

    function changeSum2(){
      sum2.value+=1//sum2是只读的，不能修改
    }

    function changeBrand2(){
      car2.barnd='特斯拉'
    }

    function changeColor2(){
      car2.options.color='蓝色'
    }

    function changePrice2(){
      car2.options.price += 100
    }

  </script>
  

<style scoped>
	.app {
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
	button {
		margin:0 5px;
	}
</style>