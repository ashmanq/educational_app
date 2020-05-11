<template lang="html">
  <div class="addLessonContainer">
    <div class="form">
      <add-lesson :lessons="lessons" :selectedLesson="selectedLesson"></add-lesson>
    </div>
  </div>

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

  mounted() {
    LessonService.getLessons()
    .then((lessons) => this.lessons = lessons);

    eventBus.$on('new-lesson', (newLesson) => {

     LessonService.addLesson(newLesson)
    .then(newLesson => this.lessons.push(newLesson))
    })

    eventBus.$on('lesson-updated', lesson => {
      const updatedLesson = {
        name: this.name,
        image: this.image
      }
      LessonService.updateLesson(id, updatedLesson);
      const index = this.lessons.findIndex(lesson => lesson._id === updatedLesson._id);
      this.lessons.details.splice(index, 1, updatedLesson)
    })

},
  components: {
   'add-lesson': AddLesson
 }
}

</script>

<style lang="css" scoped>
  .addLessonContainer {
    background: rgba(0, 0, 0, 0.7);
    width: 99vw;
    border-radius: 10px;
  }

  .form {
    width: 40vw;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
</style>
