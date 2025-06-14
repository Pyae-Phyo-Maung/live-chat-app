<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ChatWindow from '../components/ChatWindow.vue'
import NewChatForm from '../components/NewChatForm.vue'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
import {watch} from 'vue'

export default {
    components:{
        ChatWindow,NewChatForm, Navbar
    },
    setup(){
        let {user} = getUser();
        let router=useRouter();
        watch(user,()=>{
            if(!user.value){
                router.push('/');
            }
        })
    }

}
</script>

<style>

</style>