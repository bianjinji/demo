import {defineStore} from 'pinia'

export const useUserStore=defineStore('user',{
    state:()=>({
        username:'',
        password:'',
    }),
    actions:{
        setUsername(username:string){
            this.username=username
            localStorage.setItem('username',username)//保存username到本地储存
        },
        setPassword(password:string){
            this.password=password
            localStorage.setItem('password',password)//保存password到本地储存
        },
        getUsername(){
            return localStorage.getItem('username')
        },
        getPassword(){
            return localStorage.getItem('password')
        }
    }
})