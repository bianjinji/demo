<template>
  <div class="app">
    <h1 ref="title2">你好！！！</h1>
    <button @click="showLog">测试</button>
    <Person ref="ren"/>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue';
  import {ref} from 'vue'

  let title2=ref()
  let ren=ref()

  function showLog(){
    console.log(ren.value);
  }
  
</script>