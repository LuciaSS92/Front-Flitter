<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <SearchBarVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBarVue from '@/components/SearchBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchBarVue,
  },
});
</script>
