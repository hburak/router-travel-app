<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Enter username...</label>
      <input name="username" v-model="username" id="username" type="text" class="input" />
      <label for="password">Enter password...</label>
      <input name="password" v-model="password" id="password" type="text" class="input" />
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login() {
      store.user = this.username;
      this.$router.push("/user");
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>