<template>
  <form class="search-bar-form">
    <input class="search-bar" id="search" type="text" v-model="search" placeholder="Search Flitter"
      @keyup.enter="searchFleets" />
    <button :onClick="searchFleets">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
        viewBox="0 0 16 16">
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
    </button>
    <div v-if="searched && search.length > 0 && fleetsSearched.length == 0">Sorry! There doesn't seem to be any fleets about this yet!</div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Fleet } from "@/models/fleet";
import store from "@/store";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      search: "",
      searchLimit: 3,
      searched: false,
    };
  },
  methods: {
    searchFleets() {
      if (this.search.length < 3) {
        alert("Please enter more than 3 characters to search");
        return;
      }
      console.log("This is the search: ", this.search);
      store
        .dispatch("searchFleets", { search: this.search })
        .then((response) => {
          console.log("Searched");
          // Call the getters to get the searched fleets
          console.log("Getters IN COSAS: ", store.getters.getFleets);
          this.searched = true;
          response;
        })
        .catch((error) => {
          console.log(error);
        });
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
      var year = a.getFullYear().toString();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var time = date + " " + month + " " + year + " " + hour + ":" + min;
      return time;
    },
  },

  computed: {
    fleetsSearched(): Fleet[] {
      console.log("This is the fleetsSearched: ", store.getters.getFleets);
      return store.getters.getFleets;
    },
  },
});
</script>

<style scoped>

.search-bar {
  width: 60%;
  margin: 1rem 0 1rem;
}

input {
  border-radius: 5px;
}

button {
  border-radius: 5px;
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
