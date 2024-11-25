<template>
<div class="category">
    <slot name="s1">默认内容</slot>
    <slot name="s2">默认内容</slot>
  </div>

</template>


<script setup lang="ts" name="category">
</script>

<style scoped>
  .category {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
  }
</style>