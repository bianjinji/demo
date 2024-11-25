<template>
    <div class="main_menu">
      <div class="logo">
        <img src="@/assets/img/logo.svg" alt="" class="logo_img"></img>
        <h2 class="title">后台管理系统</h2>
        <div class="collapse">
          <el-menu default-active="2-1">
            <!-- 遍历菜单项 -->
            <template v-for="menu in menuStore.menus" :key="menu.index">
              <el-sub-menu v-if="menu.children" :index="menu.index">
                <template #title>
                  <!-- 使用 Pinia store 中的方法来获取正确的组件 -->
                  <el-icon v-if="menu.icon">
                    <component :is="menu.icon" />
                  </el-icon>
                  <span>{{ menu.title }}</span>
                </template>
                <!-- 遍历子菜单项 -->
                <el-menu-item
                  v-for="item in menu.children"
                  :key="item.index"
                  :index="item.index"
                  @click="navigateTo(item.name)"
                >
                  {{ item.title }}
                </el-menu-item>
              </el-sub-menu>
            </template>
          </el-menu>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useMenuStore } from '@/store/main/menu'; // 确保路径正确
  
  const router = useRouter();
  const menuStore = useMenuStore();
  
  // 定义一个方法来处理菜单项的点击事件
  const navigateTo = (name: string) => {
    router.push({ name });
  };
  </script>
  
  <style scoped>
  .main_menu {
    color: black;
  }
  .logo_img {
    margin-top: 5px;
    margin-left: 5px;
    width: 35px;
    height: 35px;
  }
  .title {
    margin-left: 50px;
    margin-top: -30px;
    font-weight: 700;
    font-size: 15px;
  }
  </style>