<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Cart from './components/Cart.vue';
import Flyout from './components/Flyout.vue';
import NavBar from './components/NavBar.vue';
  



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
