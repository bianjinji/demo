<template>
    <div class="father">
        <!-- v-model实现父子相互通信 -->
        <h3>父组件</h3>
        <h4>{{username}}</h4>
        <h4>{{password}}</h4>

        <BianjinjiInpui v-model:ming="username" v-model:mima="password"/>
    </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import BianjinjiInpui from './BianjinjiInput.vue'

//数据
let username = ref('bianjinji')
let password=ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>