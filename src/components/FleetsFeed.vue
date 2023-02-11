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
    <FleetCard :fleet="fleet">

    </FleetCard>
    </li>
  </ul>
</template>

<script lang="ts">
import FleetCard from "./FleetCard.vue";
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
    FleetCard
  },
  props: {
    msg: String,
  },
  data() {
    return {
      search: "",
      searched: true,
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
    }
  },
  computed: {
    fleets(): Fleet[] {
      return store.getters.getFleets;
    },

    fleetsPaginated(): Fleet[] {

      return this.fleets.slice(
        (this.currentPage - 1) * PAGE_SIZE,
        this.currentPage * PAGE_SIZE
      );
    },
    totalPages(): number {
      return Math.floor(this.fleets.length / PAGE_SIZE) + 1;
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
</style>
