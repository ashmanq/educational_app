<template lang="html">
  <div class="radio-toolbar">
    <input type="radio" :id="answerId" :name="indexValue" v-bind:value="answer"/>
    <label v-on:click="handleClick" :for="answerId">{{answer}}</label>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'answer-select',
  props: ['answer', 'indexValue'],
  data() {
    return {
      answerId: this.answer.replace(/\s+/g, '-').toLowerCase() + this.indexValue,
    }
  },
  methods: {
    handleClick() {
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
    /* display: flex; */
    /* flex-direction: row; */
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
    /* text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black; */
    color: black;
    transition: 0.1s;
  }

  .radio-toolbar input[type="radio"]:checked + label {
    background-color: white;
    border-color: orange;
  }

  /* .radio-toolbar input[type="radio"]:focus + label {
      border: 2px dashed #444;
  } */

  .radio-toolbar label:hover {
    background-color: white;
    cursor: pointer;
  }
</style>
