<template lang="html">
<add-lesson :lessons="lessons" :selectedLesson="selectedLesson"></add-lesson>
</template>

<script>

import {eventBus} from '@/main.js'
import AddLesson from '@/components/AddLesson.vue'
import LessonService from '@/services/LessonService.js'

export default {
  data() {
    return {
      lessons: [],
      selectedLesson: null
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

    eventBus.$on('lesson-updated', lesson => {
      const updatedLesson = {
        name: this.name,
        image: this.image
      }
      LessonService.updateLesson(updatedLesson);
      const index = this.lessons.findIndex(lesson => lesson._id === updatedLesson._id);
      this.lessons.details.splice(index, 1, updatedLesson)
    })
  })
},
  components: {
   'add-lesson': AddLesson
 }
}

</script>

<style lang="css" scoped>
</style>
