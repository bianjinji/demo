<template>
    <Person/>
</template>

<script lang="ts">
    import Person from './components/Person.vue'

    export default{
        name:'App',//组件名
        compoents:{Person}//注册组件
    }
</script>