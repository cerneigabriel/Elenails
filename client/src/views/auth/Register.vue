<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="Email..." />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="******"
    />

    <ul v-for="item in errors" v-bind:key="item.type" type="none">
      <li class="error" v-html="item.message" />
    </ul>

    <br />
    <button v-on:click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      errors: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        }).then(() => (this.email = this.password = ""));
      } catch (error) {
        this.errors = error.response.data.error.details;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  font-size: 0.8rem;
  color: rgb(170, 49, 49);
}
</style>
