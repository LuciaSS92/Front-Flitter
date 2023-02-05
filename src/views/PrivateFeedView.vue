<template>
    <div class="privateFeed">
        <img alt="Vue logo" src="../assets/logo.png">
        <CreateFleet @newFleet="saveFleet" />
        <HelloWorld msg="Welcome to Your Private Feed" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import CreateFleet from '@/components/CreateFleet.vue';

export default defineComponent({
    name: 'PrivateFeedView',
    components: {
        CreateFleet,
    },
    setup() {
        function saveFleet(fleet: string) {
            console.log(fleet)
        }
        return { saveFleet }
    }
});
</script>
