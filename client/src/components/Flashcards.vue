<template lang="html">
  <div class="box">
    <!-- <p v-if="question" v-on:click="selectAnswer(answer)" class="answers" v-for="answer in question.answers" :class="">{{answer}}</p> -->
    <!-- <p>{{userAnswers}}</p> -->

    <!-- <input type="radio" name="selectedAnswer" v-on:click="selectAnswer(answer)" v-for="answer in question.answers" :value="answer" v-model="selectedAnswer"> -->
    <p>{{question.question}}</p>

    <div class="row">

      <answer v-for="(answer, index) in question.answers" :answer="answer" :key="index" :indexValue="keyValue"></answer>
    </div>

  </div>
</template>

<script>
// import LessonList from '@/components/LessonList.vue'
import {eventBus} from '@/main.js'
import Answer from '@/components/Answer.vue'

export default {
  name: 'flashcards',
  props: ['question'],
  data() {
    return {
      userAnswers: 0,
      selectedAnswer: null,
      keyValue: this.$vnode.key
    }
  },
  methods: {
      selectAnswer(answer) {
        this.selectedAnswer = answer;
        console.log('hello');
      },
      checkAnswer() {
        console.log();
        if (this.question.correct === this.selectedAnswer) {
          this.userAnswers += 1;
          }
        }
      },
  // mounted() {
  //   eventBus.$on(`selected-answer-${this.keyValue}`, (answerValue) => {
  //     this.selectedAnswer = answerValue.value
  //     console.log("hello");
  //   })
  // },
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
    margin: 40px 0px;
  }

  .box {
    border: 1px solid white;
    margin: 50px;
    /* padding: 0px; */
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
