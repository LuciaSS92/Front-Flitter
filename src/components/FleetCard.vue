<template>
    <div>
        <svg class="svg-icon" viewBox="0 0 20 20">
            <path
                d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
            </path>
        </svg>
        <button class="user-button" @click="visitUserProfile(fleet.userName)">
            <p class="username"><strong> @{{ fleet.userName }} </strong></p>
        </button>
    </div>
    <div></div>
    <div>{{ fleet.text }}</div>
    <div class="fleet-footer">
        <button class="kudos" :class="{ active: iLike }" @click="toggleHeart">
            <span class="heart">

                <div v-if="iLike"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
                    </svg></div>
                <div v-else> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                    </svg></div>
                <span>{{ kudos }}</span>
            </span>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" length-adjust="auto" fill="currentColor"
            class="bi bi-calendar-fill" viewBox="0 0 16 16">
            <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
        </svg>
        {{ timeConverter(fleet.createdAt) }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "FleetCard",

    props: {

        fleet: {
            type: Object,
            required: true
        },
        value: {
            type: Boolean,
            default: false,
        },
        counter: {
            type: Number,
            default: 0,
        },
    },
    data: function () {
        return {
            iLike: this.value,
            kudos: this.counter,
        };
    },

    methods: {
        timeConverter(UNIX_timestamp: number) {
            var a = new Date(UNIX_timestamp * 1000);
            var months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];
            // Get the last 2 digits of the year
            var year = a.getFullYear().toString().substr(-2);
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var time = date + " " + month + " " + year + " " + hour + ":" + min;
            return time;
        },
        visitUserProfile(userName: string) {
            this.$router.push('/profile/' + userName);
        },
        toggleHeart: function () {
            this.iLike = !this.iLike;
            if (this.iLike) {
                this.kudos++;
            } else {
                this.kudos--;
            }
        },
    },
})

</script>

<style scoped>
.fleet-footer {
    display: flex;
    align-items: center;
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
svg{
    margin: 5px;
}

.svg-icon circle {
    stroke: #000000;
    stroke-width: 3;
}

.user-button {
    border: none;
    background: none;
    color: #B1B2FF;
    padding: 0;
    margin-left: 5px;
}

.kudos {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
    color: rgb(83, 100, 113);    
}

.heart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
}

.kudos:hover,
.kudos.active {
    color: rgb(249, 24, 128);
}
</style>

