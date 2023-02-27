<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  let obj:any = { //any means treat it like a java script object instead of type script
    msg: 'New Paltz Rocks!'
  }

  obj = 'hello world'


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
