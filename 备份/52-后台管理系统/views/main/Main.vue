<template>
    <div class="main">主要页面</div>
    <h2>main:{{counterstore.count}}-{{counterstore.doubleCounter}}</h2>
    <button @click="changeCounter">修改</button>

</template>

<script setup lang="ts">
  import useCounterStore from '@/store/counters'
  const counterstore=useCounterStore()

  //方法
  function changeCounter(){
    counterstore.changeCounterAction(99)
  }
</script>

<style scoped>
    .main {
  color: red;
}
</style>