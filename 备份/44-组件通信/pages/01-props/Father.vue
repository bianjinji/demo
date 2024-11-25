<template>
<div class="father">
    <!-- props是使用频率最高的一种通信方式，常用与：父组件向子组件传值，子组件向父组件传值 -->
    <!--如果父传子:属性值是非函数
        如果子传父:属性值是函数
    -->
    <h3>父组件</h3>
    <h4>汽车：{{car}}</h4>
    <Child :car="car" :sendToy="getToy"/>
    <h4 v-show="toy">子给的玩具:{{toy}}</h4>
</div>

</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import {ref} from 'vue'

//数据
let car=ref('奔驰')
let toy=ref('')

//方法
function getToy(value:string){
    toy.value=value
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>