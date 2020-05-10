<template lang="html">

  <div class="list">
    <lesson-list :lessons="lessons"></lesson-list>
    <minigames-list :lessons="lessons"></minigames-list>
  </div>

</template>

<script>
import LessonList from '@/components/LessonList.vue';
import LessonService from '@/services/LessonService.js';
import MinigamesList from '@/components/MinigamesList.vue';
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
    'lesson-list': LessonList,
    'minigames-list': MinigamesList
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
