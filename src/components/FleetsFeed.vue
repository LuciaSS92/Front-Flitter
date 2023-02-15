<template>
  <div class="feed"> 
    <SearchBarVue />

  <ul class="fleet-list">
    <!-- For with routes to all the fleets -->
    <li
      class="fleet-item"
      v-for="fleet in fleetsPaginated"
      :key="fleet.createdAt"
    >
      <FleetCard :fleet="fleet" :current-user-id="ownUser._id"/>
    </li>
  </ul>
  <PaginationItem
    :currentPage="currentPage"
    :totalPages="totalPages"
    @page-changed="onPageChanged"
  />
</div>
</template>

<script lang="ts">
import FleetCard from "./FleetCard.vue";
import { defineComponent } from "vue";
//   import auth from "@/api/auth";
import { Fleet } from "@/models/fleet";
import { User } from "@/models/user";
import auth from "@/api/auth"
import PaginationItem from "./PaginationItem.vue";
import store from "@/store";
import SearchBarVue from '@/components/SearchBar.vue';

const PAGE_SIZE = 5;

export default defineComponent({
  name: "FleetsFeed",
  components: {
    PaginationItem,
    FleetCard,
    SearchBarVue,
  },
  props: {
    privateFleets: Boolean,
  },
  data() {
    return {
      search: "",
      searched: true,
      currentPage: 1,
      fleetsByPage: [] as Fleet[],
      ownUser: {} as User,
    };
  },

  // Get the fleets from the store
  async created() {
    if(store.getters.getToken){
      this.ownUser = await auth.getCurrentUser();
    }
    console.log("FleetsFeed created");
    if (this.privateFleets === false) {
      console.log("FleetsFeed created");
      await store.dispatch("requestFleets");
    } else {
      await store.dispatch("requestPrivateFleets");
    }
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

.feed {
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  min-width: 350px;
  max-width: 100%;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
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
  background-color: #EEF1FF ;
  width: 90%;
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
