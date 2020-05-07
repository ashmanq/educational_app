<template lang="html">
  <div class="flashcard">
    <flashcards v-if="lesson" v-for="(question, index) in lesson.questions" :question="question" :key="index" ></flashcards>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'
import Flashcards from '@/components/Flashcards.vue';

export default {
  props: ['lesson'],
  components: {
    'flashcards': Flashcards
  }
}
</script>

<style lang="css" scoped>
  .flashcard {
    color: white;
  }
</style>
