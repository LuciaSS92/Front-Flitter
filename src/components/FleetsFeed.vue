<template>
  <h1 class="title">{{ msg }}</h1>
  <PaginationItem
    :currentPage="currentPage"
    :totalPages="totalPages"
    @page-changed="onPageChanged"
  />

  <ul class="fleet-list">
    <!-- For with routes to all the fleets -->
    <li
      class="fleet-item"
      v-for="fleet in fleetsPaginated"
      :key="fleet.createdAt"
    >
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
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//   import auth from "@/api/auth";
import { Fleet } from "@/models/fleet";
import PaginationItem from "./PaginationItem.vue";
import store from "@/store";

const PAGE_SIZE = 5;

export default defineComponent({
  name: "FleetsFeed",
  components: {
    PaginationItem,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      search: "",
      searched: false,
      currentPage: 1,
      fleetsByPage: [] as Fleet[],
    };
  },

  // Get the fleets from the store
  async created() {
    console.log("FleetsFeed created");
    await store.dispatch("requestFleets");
  },
  methods: {
    onPageChanged(page: number) {
      console.log("Page changed to: " + page);
      this.currentPage = page;
    },

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
  computed: {
    fleets(): Fleet[] {
      return store.getters.getFleets;
    },

    fleetsPaginated(): Fleet[] {
      let myFleetsFeed: Fleet[] = this.searched
        ? this.fleetsByPage
        : this.fleets;

      myFleetsFeed = myFleetsFeed.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      return myFleetsFeed.slice(
        (this.currentPage - 1) * PAGE_SIZE,
        this.currentPage * PAGE_SIZE
      );
    },
    totalPages(): number {
      let myFleetsFeed: Fleet[] = this.searched
        ? this.fleetsByPage
        : this.fleets;
      return Math.floor(myFleetsFeed.length / PAGE_SIZE) + 1;
    },
  },
});
</script>

<style scoped>
.title {
  font-size: 2rem;
  margin: 1rem 0;
  text-align: center;
}

.fleet-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  list-style: none;
}

/* Style for the list of fleets */
.fleet-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  list-style: none;
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
