<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link> <!--public feed-->
      </li>
      <li>
        <router-link to="/profile">Profile</router-link> <!--user profile-->
      </li>
      <li>
        <router-link to="/for-you">Your Feed</router-link> <!--private feed-->
      </li>
      <li>
        <button @click="showWarning = true">Deactivate Account?</button>
        <div v-if="showWarning" @close="showWarning = false">
          <h2>Are you sure you want to deactivate your account?</h2>
          <p>This action is irreversible and all your data will be lost.</p>
          <div class="buttons">
            <button @click="deactivateAccount">Yes, deactivate my account</button>
            <button @click="showWarning = false">No, cancel</button>
          </div>
        </div>
      </li>
    </ul>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" @click="logout" width="25" height="25" fill="black" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
      </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from'vue';

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      showWarning: false
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("auth_Token")
      console.log('logged out, returning to login page');
      this.$router.push('/login');
    },
    deactivateAccount() {
      localStorage.removeItem("auth_Token");
      console.log("Your account has been deactivated");
      this.showWarning = false;
      this.$router.push("/signup");
    }
  },
});

</script>

<style scoped>

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:aliceblue;
}

ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
li {
  margin-right: 10px;
}

button {
  border-radius: 5px;
  

}

svg:hover {
  cursor: pointer;
}

</style>