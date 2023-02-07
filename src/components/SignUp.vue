<template>
    <div class="register">
        <h1>Sign Up</h1>
        <form action="" @submit.prevent="submitForm" class="submit-form">
            <input class="form-input" v-model="name" type="text" name="name" placeholder="Username"
                @keydown="checkAlpha($event)" required />
            <input class="form-input" v-model="email" type="email" name="email" placeholder="email@email.com"
                required />
            <input class="form-input" v-model="password" type="password" name="password" placeholder="Password"
                required />
            <input class="form-input" v-model="confirmPassword" type="password" name="confirmPassword"
                placeholder="Confirm password" required />
            <button class="signup-btn" type="submit">Submit</button>
        </form>
    </div>
</template>

<script lang="ts" >
import axios from 'axios';
import { defineComponent } from 'vue';

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
        checkAlpha(event: KeyboardEvent) {
            if (!/[a-zA-Z]/.test(event.key)) {
                alert("Username cannot contain numbers or symbols")
                event.preventDefault();
            }
        },
        async submitForm() {
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
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                alert("Your account has been successfully created")
                // router.push({ name: "login" });
            }
        }
    }
})
</script>