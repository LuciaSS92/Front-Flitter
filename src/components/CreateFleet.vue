<template>
    <div class="fleet-list">
        <div class="fleet-item">
            <div>
                <h3 class="title">Fleet away</h3>
                <svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                        d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
                    </path>
                </svg>
                @{{  }}
                <!-- TODO add the userName here  -->
            </div>
            <textarea v-model="newFleet" name="" id="" cols="30" rows="10" maxlength="256"
                placeholder="Write your thoughts..."></textarea>
            <br />
            <button @click="publish()" class="btn btn-info">Fleet</button>
        </div>

    </div>
</template>

<script lang="ts">
import { Fleet } from "@/models/fleet";
import { defineComponent, ref, onMounted, computed } from "vue";
import store from "@/store";
import { useRouter } from 'vue-router'

export default defineComponent({
    name: "CreateFleet",
    setup(_, { emit }) {
        const router = useRouter()
        const isLogged = computed(() => {return Boolean(store.getters.getToken)})
        onMounted(()=>{
            if(!isLogged.value){
                router.push('/login');
            }
        })
        const newFleet = ref<string>("");
        function publish() {
            if (newFleet.value) {
                emit("newFleet", {
                    userName: "testUser", // TODO make this the actual user, get from local storage?
                    text: newFleet.value,
                    img: "", // TODO make this the image if there is one
                    createdAt: Date.now(),
                } as Fleet);
                newFleet.value = ""
            }
        }
        return { publish, newFleet };
    },
});
</script>

<style scoped>
.title {
    font-size: 2rem;
    margin: 1rem 0;
    text-align: left;
}

.fleet-item {
    width: auto;
    margin: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    padding: 1rem;
    text-align: left;
}

.fleet-item:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.svg-icon {
    width: 1em;
    height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
    fill: #000000;
}

.svg-icon circle {
    stroke: #000000;
    stroke-width: 3;
}
</style>
