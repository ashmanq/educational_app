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
  props: ['lesson'],
    methods: {
    handleSubmit() {
      const newLesson = {
        name: this.name,
        image: this.image
      }
      eventBus.$emit('post-lesson', newLesson);
      this.name = ""
      this.image = "";
    }
  },

  mounted() {
    LessonService.getLessons()
    .then((lessons) => this.lessons = lessons);

    eventBus.$on('post-lesson', newLesson => { LessonService.addLesson(newLesson)
    .then(lesson => this.lessons.push(lesson))
  })
},
  components: {
   'add-lesson': AddLesson
 }
}

</script>

<style lang="css" scoped>
</style>
