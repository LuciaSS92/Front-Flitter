<template>
    <div class="login">
      <h1 class="title">Login</h1>
      <form action="" class="form" @submit.prevent="submitLogin">
        <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="Password"
      />
      <input class="form-submit" type="submit" value="Login" />
      <router-link class="form-submit" to="/forgot">Forgot password?</router-link>
    </form>
    <p class="form">
      <label class="form-label" for="#password">Don't have an account?</label>
      <router-link class="form-submit" to="/signup">Signup</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import axios from 'axios';
import store from "@/store";

export default defineComponent({
    name: 'LogIn',
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async submitLogin() {
            var data = JSON.stringify({
                "email": this.email,
                "password": this.password,
            });

            var config = {
                method: 'post',
                url: 'http://localhost:3000/users/login',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + store.getters.getToken
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    localStorage.setItem("token", response.data.authToken);
                    store.commit("setToken", response.data.authToken);
                    console.log(response.data);
                    alert("You have successfully logged it");
                    router.push({ name: "for-you" });
                })
                .catch(function (error) {
                    alert("Email and password do not match")
                    console.log(error);
                });
        }
    },
})
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
