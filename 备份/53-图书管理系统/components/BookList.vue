<template>
    <div class="app_3">
        <h1>图书列表</h1>
        <ul>
            <li v-for="talk in talkList.bookList" :key="talk.id">
                {{talk.id}}--{{talk.title}}
            </li>
        </ul>
    </div>

</template>

<script setup>
import {useBookStore} from '@/store/BookList'

const talkList = useBookStore()

</script>

<style scoped>
</style>