import {createRouter,createWebHashHistory} from 'vue-router'
import BookList from '../components/BookList.vue'
import BookForm from '../components/BookForm.vue'
import SearchBar from '../components/SearchBar.vue'

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:BookList
        },
        {
            path:'/bookform',
            component:BookForm
        },
        {
            path:'/search',
            component:SearchBar
        }
    ]
})