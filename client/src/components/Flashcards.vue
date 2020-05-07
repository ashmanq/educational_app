<template lang="html">
  <div class="">
    <p>{{question.question}}</p>
    <p v-if="question" class="answers" v-for="answer in question.answers">{{answer}}</p>
    <p>{{userAnswers}}</p>
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
      userAnswers: 0
    }
  },
  method: {
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
