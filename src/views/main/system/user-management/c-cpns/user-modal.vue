<template>
  <div class="modal">
    <el-dialog v-model="centerDialogVisible" @close="clearForm" title="新建用户" width="450" ru>
      <div class="form">
        <el-form :model="formData" label-width="auto" style="max-width: 350px" >
          <el-form-item label="姓名" prop="newName">
            <el-input v-model="formData.newName" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="电子邮件" prop="neweMail">
            <el-input v-model="formData.neweMail" placeholder="请输入电子邮件" />
          </el-form-item>
          <el-form-item label="电话号码" prop="newPhone">
            <el-input v-model="formData.newPhone" placeholder="请输入电话号码" />
          </el-form-item>
          <el-form-item label="用户名" prop="newUsername">
            <el-input v-model="formData.newUsername" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="创建时间" prop="newCreaedAt">
            <el-date-picker v-model="formData.newCreaedAt"  placeholder="请选择时间" style="width: 100%"/>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">
            新建
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useUserList } from '@/store/main/user-list';
import type { FormInstance, FormRules } from 'element-plus'

const userStore = useUserList();

//定义内部属性
const centerDialogVisible = ref(false)
const formData = reactive({
  newName: '',
  neweMail: '',
  newPhone: '',
  newUsername: '',
  newCreaedAt:''
})



// const validatePass = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('请输入姓名'))
//   }
// }

// const validatePass2 = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('请输入电子邮件'))
//   }
// }
// const validatePass3 = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('请输入电话号码'))
//   }
// }
// const validatePass4 = (rule: any, value: any, callback: any) => {
//   if (value === '') {
//     callback(new Error('请输入用户号'))
//   }
// }

// const rules = reactive<FormRules<typeof formData>>({
//   newName: [{ required: true, validator: validatePass, trigger: 'blur' }],
//   neweMail: [{ required: true, validator: validatePass2, trigger: 'blur' }],
//   newPhone: [{ required: true, validator: validatePass3, trigger: 'blur' }],
//   newId: [{ validator: validatePass4, trigger: 'blur' }],
// })
//清理表单
function clearForm() {
  formData.newName = '',
    formData.neweMail = '',
    formData.newPhone = '',
    formData.newUsername = ''
    formData.newCreaedAt = ''
}
// 提交表单
async function submitForm() {
  try {
    console.log("Sending data to server:", formData); // 添加日志以检查发送的数据
    await userStore.addUser(formData); // 调用 store 中的 addUser 方法
    centerDialogVisible.value = false; // 关闭对话框
    clearForm(); // 清空表单
  } catch (error) {
    console.error('添加用户失败:', error);
  }
}
// 内部方法
function setModalVisible() {
  centerDialogVisible.value = true
}

//暴露属性和方法
defineExpose({ setModalVisible })

</script>

<style scoped>
.form {
  padding: 0px 40px;
}
</style>