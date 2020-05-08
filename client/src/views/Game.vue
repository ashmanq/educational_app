<template lang="html">
  <div class="game">
    <h1>Quiz</h1>
    <div class="flashcard">
      <flashcards v-if="questions" v-for="(question, index) in questions" :question="question" :key="index" ></flashcards>

      <button v-on:click="checkAnswer" type="submit" name="button">Check Your Answers</button>
    </div>
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

<style>
  h1 {
    color: white;
  }
  .flashcard {
    color: white;
    /* background-color: rgba(0, 0, 0, 0.5); */
  }

  .game {
    width: 98vw;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);
  }

  button {
    display: inline-block;
    background-color: #f5ce42;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
    width: 250px;
    /* text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black; */
    color: black;
    margin-bottom: 50px;
    transition: 0.1s;
  }

  button:hover {
    background-color: white;
    border-color: orange;
    cursor: pointer;
  }
</style>
