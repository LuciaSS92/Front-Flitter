<!--need to add router-link to front login page-->

<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="message" class="alert alert-success" role="alert">
      {{ message }}
    </div>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <h3>Forgot Password</h3>
    <p>Please enter the email address associated to your Flitter account and we'll send you a link to reset your password</p>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email" />
    </div>
    <button class="btn btn-primary btn block">Continue</button>
    <p>Don't have an account?</p><router-link to="/register">Sign Up</router-link>
  </form>
</template>



<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
  name: "ForgotPassword",
  data() {
    return {
      email: '',
      message: '',
      error: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('forgotPassword', {
        email: this.email
      });

      this.message = `The email is on it's way to your inbox!`;
      this.error = '';
      console.log(response)
      } catch (e) {
        this.error = 'Oops, that seems to be the wrong email, please try again!';
        this.message = ''
      }
    }
  }
});

</script>