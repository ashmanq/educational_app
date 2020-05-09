<template lang="html">
  <div class="radio-toolbar">
    <input type="radio" v-bind:id="answer" :name="indexValue" v-bind:value="answer"/>
    <label v-on:click="handleClick" v-bind:for="answer">{{answer}}</label>
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

  .radio-toolbar {
    margin: 0px 10px;
  }

  .radio-toolbar input[type=radio] {
    opacity: 0;
    position: fixed;
    width:0;
  }

  .radio-toolbar label {
    display: inline-block;
    background-color: #f5ce42;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
    width: 150px;
    color: #2C3E50;
    transition: 0.2s;
  }

  .radio-toolbar input[type="radio"]:checked + label {
    background-color: white;
    border-color: orange;
  }

  .radio-toolbar label:hover {
    background-color: white;
    cursor: pointer;
  }
</style>
