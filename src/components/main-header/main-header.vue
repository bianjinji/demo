<template>
    <div class="main_header">
        <div class="menu_icon">
            <el-icon><Operation /></el-icon>
        </div>
        <div class="content">
            <div class="breadcrumb">
                <headerCrumb/>
            </div>
            <div class="user_info">
                <HeaderInfo />
            </div>
        </div>
    </div>
</template>

 <script setup lang="ts">
 import {Operation} from '@element-plus/icons-vue'
 import HeaderInfo from './c-cpns/header-info.vue'
 import headerCrumb from './c-cpns/header-crumb.vue';

</script>

<style scoped>
.main_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px -5px;
    height: 100%;
    width: 100%;
    /* background-color: #f5f5f5; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.menu_icon {
    line-height: 30px;
    cursor: pointer;
    font-size: 18px;
    margin-top: 5px;
    margin-left: -10px;
    color: #333;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.breadcrumb {
    margin-left: 20px;
    font-size: 14px;
    color: #333;
}

.user_info {
    position: relative;
    margin-right: 15px;
    display: flex;
    font-size: 14px;
    color: #333;
}
</style>