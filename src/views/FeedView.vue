<template>
    <FleetsFeed msg="Welcome to your Feed"/>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import FleetsFeed from '@/components/FleetsFeed.vue'; // @ is an alias to /src

  export default defineComponent({
    name: 'FeedView',
    components: {
      FleetsFeed,
    },
  });
  </script>