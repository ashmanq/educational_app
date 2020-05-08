<template lang="html">
  <div class="">
    <input v-on:click="handleClick" type="radio" id="answer" :name="indexValue" v-bind:value="answer"/>
    <label for="answer">{{answer}}</label>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'answer-select',
  props: ['answer', 'indexValue'],
  methods: {
    handleClick: function() {
      const selectedAnswer = {
        value: this.answer,
        answerIndex: this.indexValue
      }
      eventBus.$emit(`selected-answer`, selectedAnswer)
    }
  }
}

</script>

<style lang="css" scoped>
</style>
