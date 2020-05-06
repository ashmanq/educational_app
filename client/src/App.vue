<template>
  <div id="app">
    <lesson-list></lesson-list>
  </div>
</template>

<script>
import LessonList from '@/components/LessonList.vue'
import LessonService from '@/services/LessonService.js'
import {eventBus} from '@/main.js';

export default {
  name: 'App',
  data() {
    return {
      lessons: []
    };
  },
  components: {
    'lesson-list': LessonList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
