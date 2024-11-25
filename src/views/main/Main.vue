<template>
    <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="common-aside"><MainMenu/></el-aside>
      <el-container>
        <el-header class="common-header"><Header/></el-header>
        <el-main class="common-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    </div>
  </template>
  
  <script setup lang="ts">
  import MainMenu from '@/components/main-menu/main-menu.vue'
  import Header from '@/components/main-header/main-header.vue'
  </script>
  
  <style scoped lang="css">
  .common-layout{
    width: 100%;
    height: 100%;
}
  .common-aside{
    background-color:white;
    height: 600px;
}
  .common-header{
    background-color:white;
    height: 30px;
}
  .common-main{
    background-color:#f5f5f5;
}
  </style>