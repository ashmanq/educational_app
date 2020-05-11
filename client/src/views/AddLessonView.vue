<template lang="html">
  <div class="addLessonContainer">
    <div class="form">
      <add-lesson :lessons="lessons"></add-lesson>
    </div>
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
      console.log("Fire!");
      LessonService.addNewLesson(newLesson);
    })

    eventBus.$on('lesson-updated', (updatedLesson) => {
      const _id = updatedLesson._id;
      delete updatedLesson._id
      LessonService.updateLesson(_id, updatedLesson)
    })
  },
  beforeDestroy() {
    eventBus.$off()
  },
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
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
</style>
