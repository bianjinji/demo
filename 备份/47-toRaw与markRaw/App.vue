  <template>
    <div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<button @click="person.age += 1">修改年龄</button>
		<hr>
		<h2>{{ car2 }}</h2>
		<button @click="car2.price += 10">点我价格+10</button>
	</div>
  </template>
  
  <script setup lang="ts" name="App">
    import {ref,reactive,toRaw,markRaw} from 'vue'
    import mockjs from 'mockjs'
    //数据

    //toRaw
    let person=reactive({
      name:'张三',
      age:18
    })

    //用于获取一个响应式对象的原始对象
    let rawPerson=toRaw(person)
    console.log('响应式对象',person)
	  console.log('原始对象',rawPerson)


    //markRaw--标记一个对象，使其永远不会变成响应式
    let car=markRaw({brand:'奔驰',price:100})
    let car2=reactive(car)
    console.log(car)
	  console.log(car2)


    //例如使用mockjs时，为了防止误把mockjs对象作为响应式对象使用，可以给mockjs对象使用markRaw标记
    let mockJs=markRaw(mockjs)
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