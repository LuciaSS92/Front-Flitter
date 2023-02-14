<template>
  <FleetsFeed />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FleetsFeed from '@/components/FleetsFeed.vue';


export default defineComponent({
  name: 'FeedView',
  components: {
    FleetsFeed,
  },
});
</script>