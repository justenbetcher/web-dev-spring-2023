<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue';

  let obj:any = { //any means treat it like a java script object instead of type script
    msg: 'New Paltz Rocks!'
  }

  obj = 'hello world'


</script>

<template>
	
	<NavBar />

    <div class="container">

      <!-- RouterView works to display what RouterLink is clicked at the moment. This has to be here to display what has been clicked -->
      <RouterView />
        
    </div>

</template>

<style scoped>

</style>
