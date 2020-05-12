<template lang="html">
  <div class="">
    <label for="selectLesson"></label>
    <select v-model="selectedLesson">
      <option disabled selected value> -- select an option -- </option>
      <option v-for="(lesson, index) in lessonList" :lesson="lesson" :key="index" :value="lesson">{{lesson.name}}</option>
    </select>

    <lesson-detail v-if="selectedLesson" :lesson="selectedLesson"></lesson-detail>
  </div>
</template>

<script>
import LessonDetail from '@/components/LessonDetail.vue'
import {eventBus} from '@/main.js'

export default {
  name: 'edit-lesson',
  props: ['lessons'],
  data() {
    return {
      selectedLesson: null,
      lessonList: this.lessons,
    }
  },
  mounted(){
    eventBus.$on('delete-lesson', (lesson) => {
      const index = this.lessonList.indexOf(lesson);
      this.lessonList.splice(index, 1);
    })
  },
  components: {
    'lesson-detail': LessonDetail
  }
}
</script>

<style lang="css" scoped>

select {
  font-size: 1.2em;
  margin: 20px;
}
</style>
