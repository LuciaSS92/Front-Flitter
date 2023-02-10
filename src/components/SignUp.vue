<template>
  <div class="signUp">
    <h1 class="title">Sign Up</h1>
    <form action="" @submit.prevent="submitSignup" class="form">
      <label class="form-label" for="#name">Name:</label>
      <input
        class="form-input"
        v-model="name"
        type="text"
        name="name"
        placeholder="Name"
        @keydown="checkAlphabet($event)"
        required
      />
      <label class="form-label" for="#email">Email:</label>
      <input
        class="form-input"
        v-model="email"
        type="email"
        name="email"
        placeholder="email@email.com"
        required
      />
      <label class="form-label" for="#password">Password:</label>
      <input
        class="form-input"
        v-model="password"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <label class="form-label" for="#confirmPassword">Confirm Password:</label>
      <input
        class="form-input"
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
      />
      <button class="form-submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import router from "@/router";
import auth from "@/api/auth";

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
        alert("Name cannot contain numbers or symbols");
        event.preventDefault();
      }
    },
    async submitSignup() {
      var data = JSON.stringify({
        email: this.email,
        password: this.password,
        name: this.name,
      });

      if (this.confirmPassword !== this.password) {
        alert("Passwords must match");
      } else {
        auth
          .signUp(data)
          .then((response) => {
            console.log("Account has been successfully created");
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
.singUp {
  padding: 2rem;
}
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
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
