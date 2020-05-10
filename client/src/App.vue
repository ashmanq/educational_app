<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home'}"><img src="@/assets/logo.png" alt=""></router-link>

    </nav>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import LessonList from '@/components/LessonList.vue';
import LessonService from '@/services/LessonService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'App',
}
</script>

<style>

  html {
    background-image: url("https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    margin: auto;
    background-attachment: fixed;

  }

  body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
  }

  nav {
    margin-top: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    cursor: url('~@/assets/hand.png');
  }

  h1 {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: 4.2em;
    width:100%;
  }

  h2 {
    width:100%;
    color: white;
    font-size: 2em;
  }

  a {
    text-decoration: none;
    color: #f5ce42;
  }

</style>
