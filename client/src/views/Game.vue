<template lang="html">
  <div class="flashcard">
    <flashcards v-if="questions" v-for="(question, index) in questions" :question="question" :key="index" ></flashcards>

    <button v-on:click="checkAnswer" type="submit" name="button">Check Your Answers</button>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'
import Flashcards from '@/components/Flashcards.vue';

export default {
  props: ['questions'],
  data() {
    return {
      answers: Array(this.questions.length).fill('')
    }
  },
  components: {
    'flashcards': Flashcards
  },
  methods: {
    checkAnswer() {
      let count = 0;
      this.answers.forEach((answer, index) => {
        if (answer === this.questions[index].correct) {
          count += 1;
        }
      })
      console.log(count);

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
  }
</style>
