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

<question-detail :selectedLesson="selectedLesson"></question-detail>

</div>

<div v-for="(question, index) in selectedLesson.questions" :selectedLesson="selectedLesson">

<label for="question">Question:</label>
<input v-model="question.question" name="" value="">

<label for="correctAnswer">Correct Answer</label>
<input v-model="question.correct" value="">

<br>

<question-detail>
</question-detail>

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
  background-color: white;
}

</style>
