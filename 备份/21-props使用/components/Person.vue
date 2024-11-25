<template>
  <div class="person">
    <!-- 务必看懂下面这一行代码 -->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">测试</h2> -->
    <!-- <h2>{{a}}</h2> -->
    <ul>
      <li v-for="p in list" :key="p.id">
        {{p.name}} -- {{p.age}}
      </li>
    </ul>
  </div>
  
</template>

<script lang="ts" setup name="Person">
  /*Props用途：
      用于组件间的数据通信。
      可以传递任意类型的数据（字符串、数字、对象、数组等）。
      保证了组件之间的单向数据流，增强了组件的可维护性和可复用性。
  */
  import { withDefaults } from 'vue'
  import {type Persons} from '@/types'

  //只接收list
  // defineProps(['list','a'])   

  //接收list+限制类型
  // defineProps<{list:Persons}>()

  //在没有传值的情况下:接收list+限制类型+限制必要性+指定默认值
  withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[{id:'ausydgyu01',name:'康师傅·王麻子·特仑苏',age:19}]
  })
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
</style>