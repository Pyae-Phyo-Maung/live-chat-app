<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    let password = ref("");
    let email = ref("");
    let Login = () => {
      console.log("Login");
    };
    return { password, email, Login };
  },
};
</script>

<style></style>
