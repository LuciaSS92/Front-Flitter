<template>
    <div class="login">
        <h1>Login</h1>
        <form action="" class="login-form" @submit.prevent="submitLogin">
            <input class="form-input" v-model="email" type="email" id="email" required placeholder="Email">
            <input class="form-input" v-model="password" type="password" id="password" placeholder="Password">
            <input class="login-btn" type="submit" value="Login">
        </form>
    </div>
</template>
  
<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import axios from 'axios';

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
                    'Authorization': 'Bearer ' + localStorage.getItem("auth_Token")
                },
                data: data
            };
            axios(config)
                .then(function (response) {                    
                    localStorage.setItem('auth_Token', response.data.authToken);
                    console.log(response.data);
                    alert("You have successfully logged it");
                    router.push({ name: "home" });
                })
                .catch(function (error) {
                    alert("Email and password do not match")
                    console.log(error);
                });
        }
    },
})
</script>