<template>
  <div class="home">
    
  </div>
  <NavBar />
  <SearchBarVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBarVue from '@/components/SearchBar.vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchBarVue
  },
});
</script>
