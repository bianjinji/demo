<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h3>欢迎来到：{{school }}, 坐落于：{{address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>

</template>

<script setup lang="ts" name="Count">
import { ref} from 'vue'
import {storeToRefs} from 'pinia'
// 引入useCountStore
import { useCountStore } from '@/store/count'


// 使用useCountStore，得到一个专门保存count相关的store
const countStore = useCountStore()

//变成响应式的对象---storeToRefs只会把countStore中的属性变成响应式的对象
const {sum,school,address}=storeToRefs(countStore)

//数据
let n = ref(1)//用户选择的数字

//方法
function add() {
  // countStore.sum += n.value

  //第一种修改方式
  //  countStore.sum+=1

  //第二种修改方式
  // countStore.$patch({
  //     sum:888,
  //     school:'尚硅谷',
  //     address:'北京'
  // })

  //第三种修改方式
  countStore.increment(n.value)
  // if (countStore.sum < 10) {
  //   countStore.sum += 1
  // }
}

function minus() {
  countStore.sum -= n.value
}

</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>