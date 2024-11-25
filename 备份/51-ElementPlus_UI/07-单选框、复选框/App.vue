<script setup>
        import { ref } from 'vue'
        
        //单选框
        const radio = ref("3")
        const radio2 = ref("b")
        const radio3 = ref("C")

        const radioChange = (val) => {
            console.log("radioChange:", val)
        }

        const radioGroupChange = (val) => {
            console.log("radioGroupChange:", val)
        }

        //复选框
        const checked = ref(["1", "2"])
        const checked2 = ref([])

        const checkboxGroupChange = (val) => {
            console.log("checkboxGroupChange", val)
        }
    </script>

    <template>
        <h3>单选框</h3>
        <el-radio v-model="radio" value="1">前端</el-radio>
        <el-radio v-model="radio" value="2">后端</el-radio>
        <el-radio v-model="radio" value="3">服务端</el-radio>

        <h3>单选框 - 事件绑定</h3>
        <el-radio v-model="radio2" value="a" @change="radioChange">前端</el-radio>
        <el-radio v-model="radio2" value="b" @change="radioChange">后端</el-radio>
        <el-radio v-model="radio2" value="c" @change="radioChange">服务端</el-radio>

        <h3>单选框组</h3>
        <el-radio-group v-model="radio3" @change="radioGroupChange">
            <el-radio value="A">前端</el-radio>
            <el-radio value="B">后端</el-radio>
            <el-radio value="C">服务端</el-radio>
        </el-radio-group>

        <h3>复选框</h3>
        <el-checkbox-group v-model="checked">
            <el-checkbox value="1">前端</el-checkbox>
            <el-checkbox value="2">后端</el-checkbox>
            <el-checkbox value="3">服务端</el-checkbox>
        </el-checkbox-group>

        <h3>事件绑定</h3>
        <el-checkbox-group v-model="checked2" @change="checkboxGroupChange">
            <el-checkbox value="1">前端</el-checkbox>
            <el-checkbox value="2">后端</el-checkbox>
            <el-checkbox value="3">服务端</el-checkbox>
        </el-checkbox-group>
    </template>

    <style scoped>

    </style>