<template lang="html">
  <div class="box">
    <p>{{question.question}}</p>
      <div class="row">
        <answer v-for="(answer, index) in shuffledAnswers" :answer="answer" :key="index" :indexValue="keyValue"></answer>
      </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import Answer from '@/components/Answer.vue'

export default {
  name: 'flashcards',
  props: ['question'],
  data() {
    return {
      shuffledAnswers: this.shuffleArray(this.question.answers),
      selectedAnswer: null,
      keyValue: this.$vnode.key
    }
  },
  methods: {
    // Method to shuffle array
    shuffleArray: (arr) => {
      return arr.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
    },
  },
  components: {
    'answer': Answer
  }
}

</script>

<style lang="css" scoped>

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
  }

  .box {
    border: 1px solid white;
    margin: 50px;
    font-size: 1.3em;
  }

  p {
    margin: 50px;
    margin-top: 70px;
  }

  .answers {
    border: 1px solid black;
  }

  .answers:hover {
    cursor: pointer;
    background-color: white;
  }
</style>
