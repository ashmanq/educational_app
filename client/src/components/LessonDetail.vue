<template lang="html">
<div class="everything">
  <div v-if="selectedLesson" class="addPage">
    <div class="items">
      <div v-for="(detail, index) in selectedLesson.details" :detail="detail" :selectedLesson="selectedLesson">
        <h3>Topic Name</h3>
          <input type="text" class="lessonName" v-model="detail.name"></input>
        <h3>Image Source</h3>
          <input type="text" class="lessonImage" v-model="detail.pic"></input>
        <h3>Information</h3>
          <textarea class="lessonText" v-model="detail.text"></textarea>
        <button v-on:click="deleteTopic(index)" type="button" name="button">Delete Topic</button>
      </div>
    </div>
    <div class="lessonQuestions">
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
        </div>
        <button v-on:click="deleteQuestion(index)" type="button" name="button">Delete Question</button>
      </div>
    </div>
  </div>
  <button class="button" v-if="selectedLesson" type="button" name="button" v-on:click="handleEdit">Update Lesson</button>
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
  }
},
methods: {
  handleEdit() {
    eventBus.$emit('lesson-updated', this.selectedLesson);
  },

  deleteTopic(index) {
    this.selectedLesson.details.splice(index, 1)
  },

  deleteQuestion(index) {
    this.selectedLesson.questions.splice(index, 1)
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
  height: 20px;
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
  padding: 10px;
  padding: 25px 0px;
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

.addPage {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  align-self: center;
}

.items {
  width: 600px;
}

.everything {
  display: flex;
  flex-direction: column;
}

.button {
  display: flex;
  align-self: center;
  margin: 15px;
  justify-content: center;
}

</style>
