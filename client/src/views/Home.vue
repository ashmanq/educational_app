<template lang="html">

  <div class="list">
    <vaadin-progress-bar theme="success" value="0.5"></vaadin-progress-bar>
    <lesson-list :lessons="lessons"></lesson-list>
  </div>

</template>

<script>
import LessonList from '@/components/LessonList.vue';
import LessonService from '@/services/LessonService.js';
import {eventBus} from '@/main.js';

export default {
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

  #progress-bar-custom-bounds {
    color: white;
  }

  p {
    color: white;
  }

</style>
