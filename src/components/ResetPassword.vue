<template>
  <form @submit.prevent="handleSubmit">
    <h3>Reset Password</h3>
    <div class="form-group">
      <label>New Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password" />
    </div>
    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" v-model="confirmed_password" placeholder="Confirm Password" />
    </div>
    <button class="btn btn-primary btn-block">Enter</button>
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
          confirmed_password: this.confirmed_password
          token: this.$route.params.token
      });

      console.log(response);
      this.$router.push('/login');
    }
  }

})

</script>