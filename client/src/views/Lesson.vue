<template lang="html">
  <div class="container">
    <lesson-row v-if="lesson" class="row" v-for="(lessonRow, index) in lesson.details" :lessonRow="lessonRow" :key="index"></lesson-row>
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
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
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
