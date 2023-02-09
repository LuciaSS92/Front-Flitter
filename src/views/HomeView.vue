<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="checklogin"></button>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  methods: {
    checklogin() {
      var config = {
        method: 'get',
        url: 'http://localhost:3000/test',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("auth_Token")
        }
      };
      axios(config)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
});
</script>
