<template>
    <div class="home">
        <!-- 1.输入搜索关键词表单 -->
        <el-form :model="form" style="max-width: 1600px">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="姓名">
                        <el-input v-model="form.user" placeholder="请输入姓名" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="电子邮件">
                        <el-input v-model="form.email" placeholder="请输入电子邮件" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="电话号码">
                        <el-input v-model="form.phone" placeholder="请输入电话号码" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username" placeholder="请输入用户名" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="创建时间">
                        <el-date-picker v-model="form.date" type="date" placeholder="请选择时间" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <!-- 2.重置和搜索的按钮 -->
        <div class="btns">
            <el-button type="" @click="handleResetClick">重置</el-button>
            <el-button type="primary" @click="handleQueryClick">查询</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useUserList } from '@/store/main/user-list';
import axios from 'axios';

const userStore = useUserList();
const form = reactive({
    user: '',
    email: '',
    phone: '',
    username: '',
    date: '',
});

// 重置
function handleResetClick() {
    form.user = '';
    form.email = '';
    form.phone = '';
    form.username = '';
    form.date = '';
}

// 搜索用户
function handleQueryClick() {
    userStore.getUserList(form);
}

// 添加用户
function addUser() {

}
</script>

<style scoped>
.home {
    color: red;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
}

.el-form-item {
    padding: 10px;
}

.btns {
    margin-left: 920px;
}

.el-button {
    width: 65px;
    height: 30px;
}
</style>