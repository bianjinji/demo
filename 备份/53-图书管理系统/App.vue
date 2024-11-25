<template>
    <div class="app-header">
        <h1>图书管理系统</h1>
    </div>
        <!-- 导航区 -->
        <router-link to="/" class="no-underline">图书列表</router-link> |
        <router-link to="/search" class="no-underline">搜索图书</router-link> |
        <router-link to="/bookform" class="no-underline">编辑图书</router-link>
        <!-- 展位 展示区 -->
        <router-view ></router-view>

</template>

<script setup>
import { RouterView } from 'vue-router';

</script>

<style scoped>
.app-header h1{
    font-family:Helvetica, Arial,sans-serif;
    text-align: center;
    color: #2c3e50;
    font-size: 30px;
    background-color: antiquewhite;
}
.no-underline {
  text-decoration: none;
  color: #000;
}

</style>