<template>
  <div id="app">
    <nav>
      <h1><router-link :to="{ name: 'home'}">DISCOVERY WORLD</router-link></h1>
      <h5><<router-link :to="{ name: 'addLesson' }">Add/Edit Lesson</router-link></h5>
    </nav>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import LessonList from '@/components/LessonList.vue';
import LessonService from '@/services/LessonService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'App'
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
  background-image: url("https://images.unsplash.com/photo-1501619757722-90657a99803b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: auto;
  background-attachment: fixed;
  /* background-color: rgba(0, 0, 0, 0.8); */

}

body {
  /* margin-top: 2%; */
  /* width: 70.19%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin: auto; */
  /* height: 100vh; */
  /* background-size: cover; */
  /* margin-bottom: 2%; */
  border-radius: 5px;
}

nav {
  /* background-color: white; */
  margin-top: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

h1 {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 2.2em;
}

a {
  text-decoration: none;
  color: #f5ce42;

}
</style>
