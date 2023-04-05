<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { quantity } from '../model/cart';

import LoginBadge from './LoginBadge.vue';
import Flyout from './Flyout.vue';
import Cart from './Cart.vue';
import Notifications from './Notifications.vue';

    const isMenuActive = ref(false);
    const isCartActive = ref(false);

    function toggleMenu(){
      isMenuActive.value = !isMenuActive.value;
      console.log({ isMenuActive });
    }
</script>

<template>
    <nav class="navbar is-primary">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            
          </a>
          <div class="navbar-burger" v-bind:class ="{ 'is-active': isMenuActive }" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" v-bind:class = "{ 'is-active': isMenuActive }" >
          <div class="navbar-start">
            

            <!-- RouterLink works as a link to the router, it works like a bind to the path specified that is in the /router/index.ts file -->
            <RouterLink to="/" class="navbar-item">Home</RouterLink> 

            <RouterLink to="/about" class="navbar-item">About</RouterLink>

            <RouterLink to="/products" class="navbar-item">Products</RouterLink>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="#">
                Admin
              </a>
              <div class="navbar-dropdown">
                <RouterLink class="navbar-item" to="/admin/products">
                  Products 
                </RouterLink>

                <RouterLink class="navbar-item" to="/admin/users">
                  users
                </RouterLink>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">

            <div class="navbar-item">
              <Notifications />
              <button class="button is-primary" v-bind:class="{'is-active': isCartActive}" @click="isCartActive = !isCartActive">
                <span class="icon">
                  <i class="fas fa-shopping-cart"></i>
                  <span class="tag is-danger quantity-tag">{{ quantity }}</span>
                </span>
              </button>
            </div>

            <LoginBadge />

            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Flyout v-bind:class="{ 'is-active': isCartActive }">
        <Cart />
      </Flyout>
</template>

<style scoped>
  .quanitity-tag{
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 1rem;
  }
  Flyout{
    z-index: 50;
  }
</style>