<template>
    <div class="login">
      <h1>Login</h1>
      <form action="" class="login-form" @submit.prevent="handleSubmit">        
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
  
  
  export default defineComponent ({
    name: 'LogIn',
    data() {    
      return {      
        email: "",
        password: "",
      }       
    },
    methods: {
      async handleSubmit() {


        const response = await axios.post('http://localhost:3000/users/login', {
          email: this.email,
          password: this.password               
        });    
        console.log(response);        
        localStorage.setItem('access_token', response.data.access_token);               
        alert("You have successfully logged it");
        router.push({ name: "home" });      
      }
    },
})
</script>