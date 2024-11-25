<template>
  <div class="person">
    !!!!
  </div>
  
</template>

<script lang="ts" setup name="Person">
  //在项目中@是直接定位到src文件夹 
  import {type PersonInter,type Persons} from '@/types'

  let personList:Persons=[
    {id:'asyud7asfd01',name:'张三',age:60},
    {id:'asyud7asfd02',name:'李四',age:50},
    {id:'asyud7asfd03',name:'王五',age:30}
  ]
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