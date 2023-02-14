<!--need to add router-link to front login page-->

<template>
  <h1 class="title">Forgot Password</h1>
  <form @submit.prevent="handleSubmit" class="form">
    <div v-if="message" class="alert alert-success" role="alert">
      {{ message }}
    </div>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <p class="instructions">Please enter the email address associated to your Flitter account and we'll send you a link
      to reset your password</p>
    <div class="form-group">
      <label class="form-label">Email: </label>
      <input type="email" class="form-input" v-model="email" placeholder="Email" />
    </div>
    <button class="form-submit">Continue</button>

  </form>
  <p class="form">
    <label class="form-label" for="#password">Don't have an account?</label>
    <router-link class="form-submit" to="/signup">Signup</router-link>
  </p>
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

<style scoped>
.title {
  padding: 2rem;
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
  background: #EEF1FF;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.instructions {
  color: black;
}

.form-label {
  margin-top: 2rem;
  color: black;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid black;
  color: black;
}

.form-submit {
  background: #B1B2FF;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
}
</style>