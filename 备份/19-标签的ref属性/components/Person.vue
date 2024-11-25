<template>
  <div class="person">
    <h2>中国</h2>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
  
</template>

<script lang="ts" setup name="Person">
  /*
   标签的ref属性作用：用于注册模板引用
   用在普通DOM标签上，获取的是DOM节点
   用在组件上，获取的是组件实例对象
   */


  //子件person.vue中使用defineExpose暴露内容
  import {ref,defineExpose} from 'vue'

  //数据 创建一个title2，用于储存ref标识的内容
  let title2=ref()
  let a=ref(0)
  let b=ref(1)
  let c=ref(2)
  //方法
  function showLog(){
    console.log(title2.value);
  }
    
  //使用defineExpose将组件中的数据暴露交给外部
  defineExpose({a,b,c})
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