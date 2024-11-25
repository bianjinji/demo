<template>
    <div class="header-info">
        <!-- 小图标 -->
        <div class="operation">
            <span>
                <el-icon><Bell /></el-icon>
            </span>
            <span>
                <el-icon><ChatDotRound /></el-icon>
            </span>
            <span>
                <el-icon><Postcard /></el-icon>
            </span>
        </div>
        <!-- 个人信息 -->
         <div class="info">
            <el-dropdown>
                <span class="user-info">
                    <span class="name">admin</span>
                    <el-avatar
                    :size="30"
                    class="avatar"
                    src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
                    />
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <el-icon><CircleCloseFilled /></el-icon>
                    退出系统
                  </el-dropdown-item>
                  <el-dropdown-item divided>
                    <el-icon><InfoFilled /></el-icon>
                    个人信息
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-icon><Unlock /></el-icon>
                    修改密码
                  </el-dropdown-item>
                </el-dropdown-menu>
                      </template>
            </el-dropdown>
         </div>
    </div>
</template>

<script setup lang="ts">
import { Bell, ChatDotRound, Postcard,CircleCloseFilled,InfoFilled,Unlock } from '@element-plus/icons-vue'
</script>
<style scoped>
.header-info {
    display: flex;
    align-items: center;
    margin-right: -35px;
    justify-content: flex-end; /* 使操作区域和个人信息区域在容器的右侧对齐 */
    padding: 10px 20px; /* 调整内边距 */
}

.operation {
    display: inline-flex;
    align-items: center;
    margin-right: 20px; /* 调整与个人信息区域的间距 */
    gap: 10px; /* 为图标之间添加间距 */
}

.operation span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px; /* 图标容器的宽度 */
    height: 24px; /* 图标容器的高度 */
    border-radius: 50%; /* 圆形效果 */
    color: #333; /* 图标颜色 */
    transition: background-color 0.3s; /* 鼠标悬停时的背景色变化过渡效果 */
}

.operation span:hover {
    background-color: #ebeef5; /* 鼠标悬停时的背景色 */
}

/* 为不同的图标添加不同的颜色 */
.operation span:first-child {
    color:black; /* 消息图标颜色 */
}

.operation span:nth-child(2) {
    color: black; /* 聊天图标颜色 */
}

.operation span:nth-child(3) {
    color: black; /* 邮件图标颜色 */
}

.info {
    display: flex;
    align-items: center; /* 确保用户名和头像在同一行对齐 */
    gap: 10px; /* 调整用户名和头像之间的间距 */
}

.user-info {
    display: flex;
    align-items: center;
}

.name {
    margin-right: 8px; /* 调整用户名和头像之间的间距 */
    font-weight: 500; /* 加粗用户名字体 */
}

.avatar {
    margin-left: auto; /* 将头像推到右边 */
    margin-right: 0; /* 清除原有的负外边距 */
    outline: none; /* 去掉点击时的边框 */
}

/* 去掉 el-dropdown 点击时的边框 */
.el-dropdown {
    outline: none;
}

/* 去掉 el-dropdown-menu 点击时的边框 */
.el-dropdown-menu {
    outline: none;
}

/* 去掉 el-dropdown-item 点击时的边框 */
.el-dropdown-item {
    outline: none;
}

</style>