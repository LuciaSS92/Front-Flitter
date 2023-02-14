<template>
    <div class="user-info">
      <img class="user-background" src="../assets/user-bg.png" />
      <div class="user-header">
      <svg class="svg-icon" viewBox="0 0 20 20">
          <path
              d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
          ></path>
          </svg>
          <h2>{{ username }}</h2>      
    </div>
      <div v-if="isLogged && !isOwnProfile">
        <button v-if="!isFollowing" @click="follow()" >Follow</button>
        <button v-if="isFollowing" @click="unfollow()" >Unfollow</button>
      </div>
      <p class="bio">
        <strong>Bio:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste harum animi deserunt voluptatem, exercitationem molestias, minima beatae numquam, nostrum fugit odio temporibus officiis doloribus architecto reiciendis blanditiis repellat tempora.
      </p>
      <!--<div class="user-data">
      <p><strong></strong>following</p>
      </div>-->
      <h3>{{username}}'s Fleets</h3>      
        <div v-if="searched && fleets.length > 0">
        <ul class="fleet-list">
          <li
            class="fleet-item"
            v-for="fleet in fleetsPaginated"
            :key="fleet.createdAt"
          >
          <FleetCard :fleet="fleet" :current-user-id="ownUser?._id"/>

          </li>
        </ul>
        <PaginationItem
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-changed="onPageChanged"
        />
      </div>
      <div v-else-if="searched && fleets.length < 0">It's very quiet here...</div>
    </div>
</template>

<script lang="ts">
import FleetCard from "@/components/FleetCard.vue";
import { defineComponent } from "vue";
import { Fleet } from "@/models/fleet";
import { User } from "@/models/user";
import PaginationItem from "@/components/PaginationItem.vue";
import store from "@/store";
import auth from "@/api/auth"

const PAGE_SIZE = 5;

export default defineComponent({
  name: "SelectedUserView",
  components: {
    PaginationItem,
    FleetCard
  },
  data() {
    return {
      search: "",
      searched: true,
      currentPage: 1,
      fleetsByPage: [] as Fleet[],
      username: '',
      user: {} as User,
      ownUser: null as User | null
    };
  },
  // Get the fleets from the store
  async mounted() {
    this.username = this.$route.params.userName?.toString();
    if(this.isLogged){
      this.ownUser = await auth.getCurrentUser();
    }
    if(!this.username && this.isLogged) {
      this.username = this.ownUser?.name ?? '';
    }
    if(this.username) {
      this.user = await auth.getUserFromName(this.username);
      await store.dispatch("getUserFleets", { userName: this.username });
    }
    
  },
  methods: {
    onPageChanged(page: number) {
      console.log("Page changed to: " + page);
      this.currentPage = page;
    },
    async follow(){
      await auth.followUser(this.user._id);
      this.ownUser = await auth.getCurrentUser();
    },
    async unfollow(){
      await auth.unfollowUser(this.user._id);
      this.ownUser = await auth.getCurrentUser();
    }
  },
  computed: {
    isLogged(): boolean {
      return Boolean(store.getters.getToken);
    },
    isOwnProfile(): boolean {
      return this.isLogged && this.user._id===this.ownUser?._id
    },
    isFollowing(): boolean {
      return this.isLogged && Boolean(this.ownUser?.following.includes(this.user._id));
    },
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
.user-info {
  margin: 3rem auto;
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

.user-background {
  width: 100%;
  height: 5rem;  
}

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

svg {  
  width: 3rem;
  height: 3rem;
  margin: 1rem auto;
}


p{
  margin: 5%;
}

button:hover {
  background-color: #AAC4FF;
}

button:active {
  background-color: #AAC4FF;
}

button:focus {
  outline: none;
}

button {
  border-radius: 5px;    
  border: none;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  font-weight: 700;
  color: white;
  background-color: #B1B2FF; 
  margin-right: 5px; 
}
</style>