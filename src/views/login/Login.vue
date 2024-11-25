<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form :model="ruleForm" ref="ruleFormRef" label-width="auto" style="max-width: 600px "
        :rules="rules" status-icon>
        <el-form-item label="帐户" prop="name" class="svg-container">
          <div class="input-with-icon">
            <el-input v-model="ruleForm.name" type="text" autocomplete="off"/>
          </div>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="svg-container">
          <div class="input-with-icon">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { type ElForm, type FormRules,ElMessage } from 'element-plus'
import router from '@/router';
import {useUserStore} from '@/store/login/login'
import axios from 'axios';

//模拟的用户数据
const mockUsers = [
  { name: 'user1', password: 'password1' },
  { name: 'admin', password: 'admin123' }
]

const userStore = useUserStore()
//Form验证
const ruleFormRef = ref<InstanceType<typeof ElForm>>()

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入账户名'))
  } else if (value.length < 3) {
    callback(new Error('必须是6~12位字母和数字!'))
    }
    callback()
  }

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 3) {
    callback(new Error("必须是3位以上字母和数字!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  name: '',
  password: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  name: [{ required:true, validator: validatePass, trigger: 'blur' }],
  password: [{ required:true,validator: validatePass2, trigger: 'blur' }],
})

//登录按钮---登录逻辑和请求登录接口
const submitForm = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value?.validate(async (valid) => {
    if (valid) {
      /*
      
      // 这里可以调用登录接口，进行实际的登录逻辑 
      try {
        const response = await login(ruleForm.name, ruleForm.password);
        if (response.success) {
          ElMessage.success('登录成功');
          userStore.setUsername(ruleForm.name);
          userStore.setToken(response.token);
          router.push({ name: 'main' }); // 跳转到主页
        } else {
          ElMessage.error(response.message || '登录失败');
        }
      } catch (error) {
        ElMessage.error(error.message || '登录请求失败');
      }

      */
      // 模拟登录 这里可以调用登录接口，进行实际的登录逻辑
      const user = mockUsers.find(u => u.name === ruleForm.name && u.password === ruleForm.password)
      if (user) {
        ElMessage.success('登录成功')
        userStore.setUsername(ruleForm.name);
        userStore.setPassword(ruleForm.password);
         // 使用编程式导航跳转到主页
         router.push({ name: 'user-management' }); // 或者使用router.push('/')
      } else {
        ElMessage.error('登录失败，用户名或密码错误')
      }
    } else {
      ElMessage.error('验证失败! 请输入正确格式后再操作~')
    }
  })
}

</script>

<style scoped lang="css">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh; 
  background-color: #f5f5f5;
  /*浅灰色背景*/
  /* background-image: url('../../assets/img/login_2.jpg'); */
}

.login-container {
  text-align: center;
  padding-left: 100px;
  padding: 40px;
  margin: auto;
  position:relative;
  margin-left: 800px;
  /* background-color:#f5f5f5; */
  border-radius: 0; /* 去掉圆角 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 300px;
}

.title-container {
  margin-bottom: 24px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.input-with-icon {
  display: flex;
  align-items: center;
  margin-top: -10px;
  width: 100%;
}

.svg-container {
  margin-right: 10px;
  color: #888;
}

.el-input {
  flex-grow: 1;
  border-radius: 4px;
  padding: 12px;
}

.el-button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #409eff;
  border-color: #409eff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
