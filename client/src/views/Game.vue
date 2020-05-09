<template lang="html">
  <div class="flashcard">
    <flashcards v-bind:class="checkPage(index)" v-if="questions && !showResults" v-for="(question, index) in questions" :question="question" :key="index" ></flashcards>

    <button v-if="!showResults"v-on:click="checkAnswer" type="submit" name="button">Check Your Answers</button>

    <results-view v-if="showResults" :questions="questions" :answers="answers"></results-view>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'
import Flashcards from '@/components/Flashcards.vue';
import Results from '@/components/Results.vue'

export default {
  props: ['questions'],
  data() {
    return {
      answers: Array(this.questions.length).fill(''),
      showResults: false,
      pageNo: 0,
    }
  },
  components: {
    'flashcards': Flashcards,
    'results-view': Results
  },
  methods: {
    checkAnswer() {
      let count = 0;
      this.answers.forEach((answer, index) => {
        if (answer === this.questions[index].correct) {
          count += 1;
        }
      })
      this.showResults = true;
    },

    checkPage(index) {
      if(index == this.pageNo) {
        return "show";
      } else {
        return "hide";
      }
    }
  },
  mounted() {
    eventBus.$on(`selected-answer`, (answer) => {
      // this.answers.push(answer)

      const index = answer.answerIndex
      this.answers.splice(index, 1, answer.value)
      // console.log("hello");
    })
  }
}
</script>

<style lang="css" scoped>
  .flashcard {
    color: white;
    width:100%;
    background-color: red;
  }
</style>
