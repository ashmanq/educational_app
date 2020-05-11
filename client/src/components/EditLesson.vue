<template lang="html">
  <div class="">
    <label for="selectLesson"></label>
    <select v-model="selectedLesson">
      <option v-for="(lesson, index) in lessons" :lesson="lesson" :key="index" :value="lesson">{{lesson.name}}</option>
    </select>

    <lesson-detail v-if="selectedLesson" :selectedLesson="selectedLesson"></lesson-detail>
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
      selectedLesson: null
    }
  },
  components: {
    'lesson-detail': LessonDetail
  }
}
</script>

<style lang="css" scoped>
</style>
