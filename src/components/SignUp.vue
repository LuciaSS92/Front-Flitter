<template>
    <h1>Sign Up</h1>
    <form action="" @submit.prevent="submitSignup" class="submit-form">
        <input class="form-input" v-model="name" type="text" name="name" placeholder="Name"
            @keydown="checkAlphabet($event)" required />
        <input class="form-input" v-model="email" type="email" name="email" placeholder="email@email.com" required />
        <input class="form-input" v-model="password" type="password" name="password" placeholder="Password" required />
        <input class="form-input" v-model="confirmPassword" type="password" name="confirmPassword"
            placeholder="Confirm password" required />
        <button class="signup-btn" type="submit">Submit</button>
    </form>
</template>

<script lang="ts" >
import axios from 'axios';
import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        checkAlphabet(event: KeyboardEvent) {
            if (!/[a-zA-Z]/.test(event.key)) {
                alert("Name cannot contain numbers or symbols")
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
                    .then(function (response) {
                        alert("Your account has been successfully created")
                        router.push({ name: "login" });
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        alert("Email account already in use")
                        console.log(error);
                    });


            }
        }
    }
})
</script>