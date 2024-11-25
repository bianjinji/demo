<template>
	<div class="child">
		<h3>子组件</h3>
        <!-- $attrs 用于实现当前组件的父钻进，向当前组件的子组件通信  祖孙通信-->
        <GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>