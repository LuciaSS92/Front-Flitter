<template>
    <div class="createFleetCard">
        <div class="fleetTitle">
            <h3>Fleet away</h3>
        </div>
        <textarea v-model="newFleet" name="fleetMessage" id="" cols="30" rows="10" maxlength="256" placeholder="Write your thoughts..."></textarea>
        <br>
        <button @click="publish()" class="btn btn-primary">Fleet</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: "CreateFleet",
        setup(_, {emit}) {
            const newFleet = ref<string>("")
            function publish() {
                emit("newFleet", {
                    "fleetMessage": newFleet.value,
                    "timestamp": new Date
                })
            }
            return { publish, newFleet }
        }
    })
</script>

<style scoped>



</style>

