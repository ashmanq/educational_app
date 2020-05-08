<template lang="html">
<add-lesson :lessons="lessons"></add-lesson>
</template>

<script>

import {eventBus} from '@/main.js'
import AddLesson from '@/components/AddLesson.vue'
import LessonService from '@/services/LessonService.js'

export default {
  data() {
    return {
      lessons: []
    };
  },
  mounted() {
    LessonService.getLessons()
    .then((lessons) => this.lessons = lessons)
  },
  components: {
    'add-lesson': AddLesson
  }
}
</script>

<style lang="css" scoped>
</style>
