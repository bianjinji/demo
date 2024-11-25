<template>
    <!-- 等待异步组件时渲染一些额外内容应用有更好的用户体现，也就是说在等待请求的时候呈现数据 -->
    <div class="child">
        <h2>我是child组件</h2>
        <h3>当前求和为{{sum}}</h3>
    </div>
</template>

<script setup lang="ts" name="child">
    import {ref} from 'vue'
    import axios from 'axios'

    let sum=ref(0)
    let {data:{content}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    console.log(content);
    

</script>


<style scoped>
  .child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>