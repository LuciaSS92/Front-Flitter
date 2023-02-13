<!--need to add router-link to front login page-->

<template>
  <h3 class="title">Forgot Password</h3>
  <form @submit.prevent="handleSubmit" class="form">
    <div v-if="message" class="alert alert-success" role="alert">
      {{ message }}
    </div>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <p class="instructions">Please enter the email address associated to your Flitter account and we'll send you a link to reset your password</p>
    <div class="form-group">
      <label class="form-label">Email: </label>
      <input type="email" class="form-input" v-model="email" placeholder="Email" />
    </div>
    <button class="form-submit">Continue</button>
    <p>Don't have an account?</p><router-link to="/signup">Sign Up</router-link>
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

<style scoped>
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

.instructions {
  color: white;
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

</style>