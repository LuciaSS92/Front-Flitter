<template>
  <h3 class="title">Reset Password</h3>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="form-group">
      <label class="form-label">New Password</label>
      <input type="password" class="form-input" v-model="password" placeholder="Password" />
    </div>
    <div class="form-group">
      <label class="form-label">Confirm Password</label>
      <input type="password" class="form-input" v-model="confirmed_password" placeholder="Confirm Password" />
    </div>
    <button class="form-submit">Enter</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ResetPassword',
  data() {
    return {
      password: '',
      confirmed_password: '',
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('resetPassword', {
          password: this.password,
          confirmed_password: this.confirmed_password,
          token: this.$route.params.token
      });

      console.log(response);
      this.$router.push('/login');
    }
  }

})

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