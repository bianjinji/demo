<template>
    <div class="user">
        <div class="search">
            <UserSearch/>
        </div>
        <div class="content">
            <UserContent @newClick="handleNewClick" @newEdit="handleEditClick"/>
        </div>
        <div class="modal">
            <UserModal ref="modalRef"/>
        </div>
        <div class="edit">
            <UserEdit ref="editRef"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserSearch from '../user-management/c-cpns/user-search.vue'
import UserContent from '../user-management/c-cpns/user-content.vue'
import UserModal from '../user-management/c-cpns/user-modal.vue';
import UserEdit from '../user-management/c-cpns/user-edit.vue'
import { ref } from 'vue'


const modalRef = ref<InstanceType<typeof UserModal>>()
const editRef = ref<InstanceType<typeof UserEdit>>()
//对modal组件进行控制
function handleNewClick() {
    modalRef.value?.setModalVisible()
}


//对edit组件进行控制
function handleEditClick() {
    editRef.value?.setEditVisible()
}
</script>

<style scoped>
</style>