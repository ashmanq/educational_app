<template lang="html">
  <div class="container">
    <lesson-row class="row" v-for="(lessonRow, index) in lesson.details" :lessonRow="lessonRow" :key="index"></lesson-row>
  </div>
</template>

<script>
import LessonRow from '@/components/LessonRow.vue';
import {eventBus} from '@/main.js';

export default {
  props: ['lesson'],
  components: {
    'lesson-row': LessonRow
  }

}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
}


.row {
  display: flex;
  flex-wrap: nowrap;
  margin: 20px;
  justify-content: space-around;

}

.row:nth-child(even) {
  flex-direction:row-reverse;
}
</style>
