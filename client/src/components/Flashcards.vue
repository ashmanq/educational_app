<template lang="html">
  <div class="">
    <p>{{question.question}}</p>
    <!-- <p v-if="question" v-on:click="selectAnswer(answer)" class="answers" v-for="answer in question.answers" :class="">{{answer}}</p> -->
    <!-- <p>{{userAnswers}}</p> -->

    <!-- <input type="radio" name="selectedAnswer" v-on:click="selectAnswer(answer)" v-for="answer in question.answers" :value="answer" v-model="selectedAnswer"> -->

    <answer v-for="(answer, index) in question.answers" :answer="answer" :key="index" :indexValue="keyValue"></answer>



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
  .answers {
    border: 1px solid black;
  }

  .answers:hover {
    cursor: pointer;
    background-color: white;
  }
</style>
