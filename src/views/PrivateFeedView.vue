<template>
    <div class="privateFeed">
        <h2>Welcome to your personal feed</h2>
        <CreateFleet @newFleet="postFleet" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateFleet from '@/components/CreateFleet.vue';
import { Fleet } from '@/models/fleet';
import axios from "axios";
import store from "@/store";


export default defineComponent({
    name: 'PrivateFeedView',
    components: {
        CreateFleet, 
    },
    setup() {
        function postFleet(fleet: Fleet) {
            console.log("Sending fleet...")
            const fleetData = {
                userName: fleet.userName,
                text: fleet.text,
                img: fleet.img,
            };
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + store.getters.getToken
            };

            axios.post("http://localhost:3000/api/fleets", fleetData, {headers}).then(response => {
                console.log("Success")
                console.log(response.data)
            }).catch(error => console.log(error))
        }
        return { postFleet,  }
    }
});
</script>
