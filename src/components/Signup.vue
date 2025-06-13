<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="Signup">
      <input type="text" placeholder="name" v-model="name" />
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import {ref} from"vue"
export default {
  setup() {
    let name = ref("");
    let password = ref("");
    let email = ref("");
    let Signup = () => {
      console.log("Signup");
    };
    return { name, password, email, Signup };
  },
};
</script>

<style></style>
