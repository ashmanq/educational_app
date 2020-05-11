<template lang="html">
  <div class="addLessonContainer">
    <add-lesson :lessons="lessons"></add-lesson>
  </div>
</template>

<script>

import AddLessonComponent from '@/components/AddLesson.vue';
import {eventBus} from '@/main.js';
import LessonService from '@/services/LessonService.js'

export default {
  name: "add-lesson-view",
  props: ['lessons'],
  mounted() {
    eventBus.$on('new-lesson', (newLesson) => {
<<<<<<< HEAD

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
=======
      console.log("Fire!");
      LessonService.addNewLesson(newLesson);
    })
  },
  beforeDestroy() {
    eventBus.$off()
  },
>>>>>>> 332720ce44c8dc9b86fd57785accfa6e1378479d
  components: {
    'add-lesson': AddLessonComponent,
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
