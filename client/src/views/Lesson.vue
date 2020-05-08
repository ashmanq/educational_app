<template lang="html">
  <div class="container">
    <lesson-row v-if="lesson" class="row" v-for="(lessonRow, index) in lesson.details" :lessonRow="lessonRow" :key="index"></lesson-row>
    <!-- <button type="button" name="button">Play Game</button>
   -->
   <h1><router-link :to="{ name: 'game', params: {questions} }">Test Your Knowledge</router-link></h1>
  </div>
</template>

<script>
import LessonRow from '@/components/LessonRow.vue';
import {eventBus} from '@/main.js';

export default {
  props: ['lesson'],
  data() {
    return {
      questions: this.lesson.questions
    }
  },
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

button {
  display: flex;
  flex-direction: row;
  align-self: center;
  padding: 25px;
  width: 200px;
  justify-content: center;
  margin-bottom: 35px;
  margin-top: 10px;
  font-size: 2em;
  border-radius: 50%;
  background-color: rgba(256, 256, 256, 0.5);
}

a {
  font-size: 0.6em;
  margin-bottom: 20px;
}

a:hover {
  /* text-shadow: 1px 1px grey, -1px -1px grey; */
  color: white;
}
</style>
