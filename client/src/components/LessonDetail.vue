<template lang="html">

<div v-if="selectedLesson">

  <div v-for="(detail, index) in selectedLesson.details" :detail="detail" :selectedLesson="selectedLesson">

    <form id="editLesson" v-on:submit.prevent="handleEdit">

      <h3>Detail Name</h3>

      <textarea class="lessonName" v-model="detail.name"></textarea>

      <h3>Image Source</h3>

      <textarea class="lessonImage" v-model="detail.pic"></textarea>

      <h3>Detail Text</h3>

      <textarea class="lessonText" v-model="detail.text"></textarea>

    <br>

    <input type="submit" value="Save Changes">

    </form>

  <!-- <question-detail :selectedLesson="selectedLesson"></question-detail> -->

    </div>

    <div v-for="(question, index) in selectedLesson.questions" :selectedLesson="selectedLesson">

      <div class="new">
        <div class="newQuestion">
          <label for="question">Question</label>
          <label for="correctAnswer">Correct Answer</label>
          <label for="answers">Possible Answers</label>
        </div>

        <div class="newCorrect">
          <input v-model="question.question" name="" value="" class="question">
          <input v-model="question.correct" value="" class="correct">
          <input type="text" name="" value="" v-model="question.answers">
        </div>

        <!-- <question-detail>
        </question-detail> -->

        <!-- <p>{{question.answers}}</p> -->
      </div>

    </div>

  </div>

</div>

</template>

<script>

import { eventBus } from '@/main.js'
import QuestionDetail from '@/components/QuestionDetail.vue'

export default {
  name: 'lesson-detail',
  props: ['selectedLesson', 'detail', 'question'],
data() {
  return {
    name: '',
    pic: '',
    text: '',
    answer: ''
  }
},
methods: {
  handleEdit() {
  eventBus.$emit('lesson-updated', this.$data);

}
},
components: {
  'question-detail': QuestionDetail
}
}
</script>

<style lang="css" scoped>

.lessonText {
width: 80%;
height: 100px;
}

.lessonName {
  width: 80%;
  height: 20px;
}

.lessonImage {
  width: 80%;
  height: 60px;
}

div {
  /* background-color: white; */
}

label {
  margin: 5px;
}

input {
  margin: 5px;
}

.new {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  align-self: center;
}

.newQuestion {
  display: flex;
  flex-direction: column;
  margin: 5px;
  /* align-items: center; */
}

.newCorrect {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

.question {
  width: 320px;
}

</style>
