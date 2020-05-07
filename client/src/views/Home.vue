<template lang="html">
  <div class="list">
    <lesson-list :lessons="lessons"></lesson-list>
  </div>

</template>

<script>
import LessonList from '@/components/LessonList.vue';
import LessonService from '@/services/LessonService.js';
import {eventBus} from '@/main.js';

export default {
  // name: 'Home',
  data() {
    return {
      lessons: []
    };
  },
  mounted() {
    LessonService.getLessons()
    .then((lessons) => this.lessons = lessons);
  },
  components: {
    'lesson-list': LessonList
  }
}
</script>

<style lang="css" scoped>
  /* .list {
    background: rgba(0, 0, 0);
    width: 50%;
  } */
</style>
