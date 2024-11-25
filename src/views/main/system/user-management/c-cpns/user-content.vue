<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <div class="btn">
        <el-button type="primary" size="small" @click="addUser">新建用户</el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="userStore.users">
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="email" label="电子邮件" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话号码" width="180"></el-table-column>
        <el-table-column prop="username" label="用户号" width="180"></el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="180"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template #default="{ row }">
            <el-button type="danger" size="small" @click="deleteUser(row.id)">删除</el-button>
            <el-button type="primary" size="small" @click="editUser">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 10, 15, 20]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userStore.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserList } from '@/store/main/user-list';
import type { ComponentSize } from 'element-plus'
import { ref } from 'vue'

const userStore = useUserList();
const currentPage = ref(4)
const pageSize = ref(20)
const background = ref(false)
const disabled = ref(false)
const size = ref<ComponentSize>('default')

//定义事件
const emit = defineEmits(['newClick', 'newEdit'])

// 组件创建时获取用户数据
onMounted(() => {
  userStore.getAllUser();
});

//获取用户列表
async function fetchUsers(){
  const params = {
    pageNo: currentPage.value,
    pageSize: pageSize.value,
  };
  await userStore.getUserList(params);
}
const handleSizeChange = (val: number) => {
  pageSize.value = val;
  currentPage.value = 1;//重置为第一页
  fetchUsers();
}
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  fetchUsers();
}
// 添加用户的函数
function addUser() {
  emit('newClick')
}
// 删除用户的函数
function deleteUser(id: number) {
  userStore.deleteUser(id);
}
// 编辑用户的函数
function editUser() {
  emit('newEdit')
}
</script>

<style scoped>
.content {
  margin-top: 10px;
  padding: 15px;
  background-color: white;
}

.header {
  display: flex;
  justify-content: space-between;
}

.el-button {
  width: 65px;
  height: 30px;
}

.title {
  margin-top: 1px;
}

.edit {
  display: flex;
  margin-left: 750px;
}

.btn {
  margin-top: 10px;
  margin-right: 30px;
}

.table {
  max-height: 265px;
  /* 可以根据您的需求调整高度 */
  overflow: auto;
  /* 这将确保滚动条只在 .table 容器内部显示 */
}

</style>