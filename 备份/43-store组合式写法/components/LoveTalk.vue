<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
        </ul>
    </div>

</template>

<script setup lang="ts" name="LoveTalk">
import {useTalkStore} from "@/store/loveTalk";
import {storeToRefs} from 'pinia'

const talkStore=useTalkStore()

//变成响应式的对象---storeToRefs只会把countStore中的属性变成响应式的对象
const {talkList}=storeToRefs(talkStore)
// subscribe---监听数据是否发生变化
//mutate--本次修改的信息  state--store中的数据
talkStore.$subscribe((mutate,state)=>{
  console.log('talkStore发生了变化',mutate,state);
  //刷新数据还在
  localStorage.setItem('talkList',JSON.stringify(state.talkList))
})

//方法
function getLoveTalk(){
  talkStore.getATalk()
}

</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>