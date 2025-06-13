<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signUp">
      <input type="text" placeholder="name" v-model="name" />
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue"
import useSignup from "../composables/useSignup"
export default {
  setup() {
    let name = ref("");
    let password = ref("");
    let email = ref("");
    let {error,createAccount} = useSignup();
    let signUp = async () => {
        let res = await createAccount(name.value,email.value,password.value);
        console.log(res);
    };
    return { name, password, email, signUp ,error};
  },
};
</script>

<style></style>
