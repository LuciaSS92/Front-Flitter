<template>
    <div>
        <svg class="svg-icon" viewBox="0 0 20 20">
        <path
            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
        ></path>
        </svg>
        @{{ fleet.userName }}
    </div>
    <div></div>
    <div>{{ fleet.text }}</div>
    <div></div>
    <div class="likes">
        <svg
        class="feather feather-heart sc-dnqmqq jxshSx"
        xmlns="http://www.w3.org/2000/svg"
        width="0.8rem"
        length-adjust="auto"
        viewBox="1 2 24 24"
        fill="red"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        >
        <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        ></path>
        </svg>
        {{ fleet.kudos }}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        length-adjust="auto"
        fill="currentColor"
        class="bi bi-calendar-fill"
        viewBox="0 0 16 16"
        >
        <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"
        />
        </svg>
        {{ timeConverter(fleet.createdAt) }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: "FleetCard",
    props:{

        fleet: {
            type: Object,
            required: true
        } 
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
    },
})

</script>

<style scoped>
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

