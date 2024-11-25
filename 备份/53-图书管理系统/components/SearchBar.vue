<template>
    <div class="">
        <!-- 使用 v-model 指令来创建双向数据绑定，意味着输入框中的任何自动储存到searchQuer里并且更改都会自动更新searchQuer的值 -->
        <el-input v-model="searchQuer" clearable placeholder="搜索书籍" />
        <!-- <el-button @click="searchBooks">搜索</el-button> -->
        <!-- 通过v-if渲染div 当数组为空且searchQuer有值时 显示没有找到图书-->
        <div v-if="searchResults.length === 0 && searchQuer">没有找到图书</div>
        <ul>
            <li v-for="book in searchResults" :key="book.id">
                {{ book.id }}--{{ book.title }}
            </li>
        </ul>
    </div>

</template>

<script setup name="SearchBar">
import { ref } from 'vue'
import { watch } from 'vue'
import { useBookStore } from '@/store/BookList'
//数据
const searchQuer = ref('')//存储用户的搜索查询
const searchResults = ref([])//存储搜索结果
// const hasSearched = ref(false)//标记是否已执行搜索

// 假设有一个 allbooks 数组，用于存储所有书籍
const allbooks = useBookStore()

// 使用 watch 监听 searchQuer 的变化，并触发搜索
watch(searchQuer, (newQuery) => {
    if (newQuery) {
        searchResults.value = searchBooksQuery(newQuery)
    } else {
        searchResults.value = []
    }
})

// 搜索书籍的逻辑
function searchBooksQuery(query) {
    return allbooks.bookList.filter(book => book.title.includes(query))
}
// 搜索书籍函数
// function searchBooks() {
//   const query = searchQuer.value;
//   if (query) {
//     searchResults.value = searchBooksQuery(query);
//     // 只有当搜索结果准备好后，才设置 hasSearched
//     if (searchResults.value.length === 0) {
//       hasSearched.value = true;
//     } else {
//       hasSearched.value = false;
//     }
//   } else {
//     searchResults.value = [];
//     hasSearched.value = false;
//   }
// }
</script>


<style scoped>
</style>