<template>
    <div class="app_2">
        <h1>编辑图书列表</h1>
        <el-form @submit.native.prevent="addBook">
            <el-input
                v-model="addTitle"
                clearable
                placeholder="请输入你要添加的书籍名称"
            />
            <el-button native-type="submit">添加</el-button>
        </el-form>

        <el-form @submit.native.prevent="deleteBook">
            <el-input
                v-model="deleteId"
                clearable 
                placeholder="请输入你要删除的书籍id"
            />
            <el-button native-type="submit">删除</el-button>
        </el-form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {useBookStore} from '@/store/BookList'
import { ElMessage } from 'element-plus';

const bookStore = useBookStore();
const addTitle = ref('');
const deleteId = ref('');


// 添加书籍
const addBook = () => {
  // 检查书名是否已输入
  if (!addTitle.value) {
    ElMessage.error('请输入书名');
    return;
  }

  // 调用状态管理器中的方法来添加书籍
  bookStore.addBook({ title:addTitle.value});

  //保存到本地
  // saveToLocalStorage(bookStore.bookList)

  // 清空输入
  addTitle.value = '';

  // 可选：显示成功消息
  ElMessage({
    message: '书籍添加成功',
    type: 'success',
  });
};


//删除书籍
const deleteBook = () => {
  // 检查书名是否已输入
  if (!deleteId.value) {
    ElMessage.error('请输入书籍id');
    return;
  }

  // 调用状态管理器中的方法来添加书籍
  bookStore.deleteBook(Number(deleteId.value));

  // 清空输入
  deleteId.value= '';

  // 可选：显示成功消息
  ElMessage({
    message: '书籍删除成功',
    type: 'success',
  });
};
</script>

<style scoped>
  
</style>