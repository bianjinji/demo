<script setup>
        import { ref } from 'vue'
        
        const name = ref('')
        const password = ref('')
        const content = ref('边锦吉编程')
        const url = ref('bianjinjicode.com')
        const url2 = ref('bianjinjicode')
        const email = ref('123456')

        //const selected = ref('')
        const selected = ref('2') //选中的下拉框
    </script>   

    <template>
        <div style="width: 300px;">
            <!-- clearable 可一键清空 -->
            <h3>输入框</h3>
            <el-input v-model="name" clearable placeholder="请输入用户名" />

            <!-- show-password 可切换显示隐藏密码 -->
            <h3>密码框</h3>
            <el-input v-model="password" show-password placeholder="请输入密码" />

            <h3>文本域</h3>
            <el-input type="textarea" v-model="content" :rows="2" />

            <h3>输入内容长度限制 - 输入框</h3>
            <el-input v-model="name" maxlength="10" show-word-limit />

            <h3>输入内容长度限制 - 文本域</h3>
            <el-input type="textarea" v-model="content" maxlength="20" :rows="3" show-word-limit />

            <h3>尺寸</h3>
            大 <el-input size="large" />
            默认 <el-input />
            小 <el-input size="small" />

            <h3>前置</h3>
            <el-input v-model="url">
                <template #prepend>https://</template>
            </el-input>

            <h3>后置</h3>
            <el-input v-model="email">
                <template #append>@qq.com</template>
            </el-input>

            <h3>前置后置</h3>
            <el-input v-model="url2">
                <template #prepend>https://</template>
                <template #append>.com</template>
            </el-input>

            <h3>前置后置扩展 - 搜索</h3>
            <el-input placeholder="请输入课程名称">
                <template #prepend>
                    <el-select v-model="selected" placeholder="请选择" style="width: 100px;">
                        <el-option label="前端" value="1" />
                        <el-option label="后端" value="2" />
                        <el-option label="服务端" value="3" />
                    </el-select>
                </template>
                <template #append>
                    <el-button>
                        <el-icon><Search /></el-icon>
                    </el-button>
                </template>
            </el-input>
        </div>
    </template>

    <style scoped>

    </style>
