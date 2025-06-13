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
export default {
  setup() {
    let password = ref("");
    let email = ref("");
    let Login = () => {
      console.log("Signup");
    };
    return { password, email, Signup };
  },
};
</script>

<style></style>
