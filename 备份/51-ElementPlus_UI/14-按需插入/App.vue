<script setup>
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
        const openNotifiy = () => {
            ElNotification({
                title: '标题',
                message: '邓瑞编程',
                duration: 1500 // 展示时间 [单位:毫秒]
            })
        }

        // 通知2
        const openNotifiy2 = () => {
            ElNotification({
                type: 'success', // success | warning | info | error
                title: '标题',
                message: 'dengruicode.com',
                duration: 1500,
                position: 'bottom-right'
            })
        }

        const url = ref('dengruicode.com')
    </script>

    <template>
        <h3>按钮</h3>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>

        <h3>图标</h3>
        <!-- <el-icon><Plus /></el-icon> -->
        <el-icon><i-ep-Plus /></el-icon> <!-- i-ep- -->
        <el-icon><IEpEdit /></el-icon> <!-- IEp- -->
        <el-icon><IEpDelete /></el-icon>
        <el-icon class="is-loading"><IEpLoading /></el-icon>

        <h3>提示框</h3>
        <el-button @click="openMsg">消息</el-button>
        <el-button @click="openConfirm">确认框</el-button>
        <el-button @click="openNotifiy">通知</el-button>
        <el-button @click="openNotifiy2">通知2</el-button>

        <h3>输入框</h3>
        <el-input v-model="url" placeholder="请输入网址" />
    </template>

    <style scoped>
    
    </style>