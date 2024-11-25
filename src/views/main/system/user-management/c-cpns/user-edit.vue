<template>
    <div class="edit">
        <el-dialog v-model="centerDialogVisible" title="编辑用户" width="450" center>
            <div class="form">
                <el-form :model="editData" label-width="auto" style="max-width: 350px">
                    <el-form-item label="姓名" prop="newName">
                        <el-input v-model="editData.editName" placeholder="请输入新的姓名" />
                    </el-form-item>
                    <el-form-item label="电子邮件" prop="neweMail">
                        <el-input v-model="editData.editMail" placeholder="请输入新的电子邮件" />
                    </el-form-item>
                    <el-form-item label="电话号码" prop="editPhone">
                        <el-input v-model="editData.editPhone" placeholder="请输入新的电话号码" />
                    </el-form-item>
                    <el-form-item label="用户名" prop="editUsername">
                        <el-input v-model="editData.editUsername" placeholder="请输入新的用户名" />
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="submitUpdate">
                        确定
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserList } from '@/store/main/user-list';

const userStore = useUserList()
const editData = ref({
    id: 1,
    editName: '',
    editMail: '',
    editPhone: '',
    editUsername: ''
})
// 清空表单
function clearForm() {
    editData.value = {
        id: 0,
        editName: '',
        editMail: '',
        editPhone: '',
        editUsername: ''
    };
}

const centerDialogVisible = ref(false)

function setEditVisible() {
    centerDialogVisible.value = true;
}
async function submitUpdate() {
    await userStore.updateUser(editData.value);
    clearForm();
    centerDialogVisible.value = false;
}
//暴露方法和属性
defineExpose({ setEditVisible })
</script>

<style scoped>
.form {
    padding: 0px 35px;
}
</style>