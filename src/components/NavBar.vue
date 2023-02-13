<template>
  <nav>
    <ul>
      <template v-if="!isLogged">
        <li>
          <router-link to="/">Home</router-link> <!--public feed-->
        </li>
        <li>
          <router-link to="/login">Login</router-link> <!--Login page-->
        </li>
        <li>
          <router-link to="/signup">Signup</router-link> <!--Signup page-->
        </li>
      </template>
      <template v-if="isLogged">
        <li>
          <router-link to="/profile/:userName">Profile</router-link> <!--user profile-->
        </li>
        <li>
          <router-link to="/for-you">Your Feed</router-link> <!--private feed-->
        </li>
      </template>
    </ul>
    <div v-if="isLogged">
      <svg xmlns="http://www.w3.org/2000/svg" @click="showWarning = true" width="25" height="25" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z"/>
          </svg>
          <div v-if="showWarning" @close="showWarning = false">
            <h2>Are you sure you want to deactivate your account?</h2>
            <p>This action is irreversible and all your data will be lost.</p>
            <div class="buttons">
              <button @click="deactivateAccount">Yes, deactivate my account</button>
              <button @click="showWarning = false">No, cancel</button>
            </div>
          </div>
      <svg xmlns="http://www.w3.org/2000/svg" @click="logout" width="25" height="25" fill="black" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
      <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
    </svg>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from'vue';
import store from "@/store";

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      showWarning: false
    }
  },
  computed:{
    isLogged(): boolean {
      return Boolean(store.getters.getToken);
    }
  },
  methods: {
    logout() {
      store.commit("setToken", '');
      // localStorage.removeItem("auth_Token")
      console.log('logged out, returning to login page');
      this.$router.push('/login');
    },
    deactivateAccount() {
      store.commit("setToken", '');
      // localStorage.removeItem("auth_Token");
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

svg {
  margin: auto 1rem;
}

svg:hover {
  cursor: pointer;
}

</style>