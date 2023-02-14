<template>
    <SearchBarVue />
    <FleetsFeed />
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import FleetsFeed from '@/components/FleetsFeed.vue';
  import SearchBarVue from '@/components/SearchBar.vue';



  export default defineComponent({
    name: 'FeedView',
    components: {
      FleetsFeed,
      SearchBarVue,
    },
  });
  </script>