<script setup>
        import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

        // 消息
        const openMsg = () => {
            ElMessage({
                type: 'success', // success | warning | info | error
                message: 'dengruicode.com',
                showClose: true
            })
        }

        // 确认框
        const openConfirm = () => {
            ElMessageBox.confirm('确认删除?', '标题', {
                type: 'warning',
                confirmButtonText: '确认',
                cancelButtonText: '取消'
            }).then(() => {
                console.log('确认')
            }).catch(() => {
                console.log('取消')
            })
        }

        // 通知
        const openNotify = () => {
            ElNotification({
                title: '标题',
                message: '边锦吉编程',
                duration: 1500 // 展示时间 [单位:毫秒]
            })
        }

        // 通知2
        const openNotify2 = () => {
            ElNotification({
                type: 'success', // success | warning | info | error
                title: '标题',
                message: 'bianjinji.com',
                duration: 1500,
                position: 'bottom-right'
            })
        }
    </script>

    <template>
        <el-button @click="openMsg">消息</el-button>
        <el-button @click="openConfirm">确认框</el-button>
        <el-button @click="openNotify">通知</el-button>
        <el-button @click="openNotify2">通知2</el-button>
    </template>

    <style scoped>
    
    </style>
