<template lang="html">
  <div class="">
    <p>{{question.question}}</p>
    <p v-if="question" v-on:click="selectAnswer(answer)" class="answers" v-for="answer in question.answers" :class="">{{answer}}</p>
    <p>{{userAnswers}}</p>
    <button v-on:click="checkAnswer" type="submit" name="button">Check Your Answers</button>
  </div>
</template>

<script>
// import LessonList from '@/components/LessonList.vue'
import {eventBus} from '@/main.js'

export default {
  name: 'flashcards',
  props: ['question'],
  data() {
    return {
      userAnswers: 0,
      selectedAnswer: null
    }
  },
  methods: {
      selectAnswer(answer) {
        this.selectedAnswer = answer;
      },
      checkAnswer() {
        console.log();
        if (this.question.correct === this.selectedAnswer) {
          this.userAnswers += 1;
        }
        }
      }
    }

</script>

<style lang="css" scoped>
  .answers {
    border: 1px solid black;
  }

  .answers:hover {
    cursor: pointer;
    background-color: white;
  }
</style>
