<template>
  <div class="signUp">
    <h1 class="title">Sign Up</h1>
    <form action="" @submit.prevent="submitSignup" class="form">
      <label class="form-label" for="#name">Name:</label>
      <input class="form-input" v-model="name" type="text" name="name" placeholder="Name"
        @keydown="checkAlphabet($event)" required />
      <label class="form-label" for="#email">Email:</label>
      <input class="form-input" v-model="email" type="email" name="email" placeholder="email@email.com" required />
      <label class="form-label" for="#password">Password:</label>
      <input class="form-input" v-model="password" type="password" name="password" placeholder="Password" required />
      <label class="form-label" for="#confirmPassword">Confirm Password:</label>
      <input class="form-input" v-model="confirmPassword" type="password" name="confirmPassword"
        placeholder="Confirm password" required />
      <button class="form-submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import router from "@/router";
import axios from 'axios';

export default defineComponent({
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    checkAlphabet(event) {
      if (!/[a-zA-Z]/.test(event.key)) {
        alert("Username cannot contain numbers or symbols")
        event.preventDefault();
      }
    },
    async submitSignup() {
      var data = JSON.stringify({
        "email": this.email,
        "password": this.password,
        "name": this.name,
      });

      if (this.confirmPassword !== this.password) {
        alert("Passwords must match")

      } else {
        var config = {
          method: 'post',
          url: 'http://localhost:3000/users',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        axios(config)
          .then((response) => {
            alert("Account has been successfully created");
            router.push({ name: "login" });
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            alert("An error has occurred while creating your account");
            console.log(error);
          });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
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

.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
