<template>
  <div id="app">
    <nav>
      <h1><router-link :to="{ name: 'home'}">Education App</router-link></h1>
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
  // data() {
  //   return {
  //     lessons: []
  //   };
  // },
  // mounted() {
  //   LessonService.getLessons()
  //   .then((lessons) => this.lessons = lessons);
  // },
  // components: {
  //   'lesson-list': LessonList
  // }
}
</script>

<style>

html {
  background-image: ;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: none;
  color: black;
}
</style>
