<template lang="">
  <div class="container">
    <!-- <h2> Results </h2> -->

    <div v-if="count == questions.length">
      <img class="winner" src="https://www.svgrepo.com/show/293851/trophy.svg"></img>
      <h2> You're a winner! </h2>
    </div>

    <div  v-if="count < questions.length">
      <img class="sadface" src="https://www.svgrepo.com/show/102509/sad.svg"></img>
      <h2> Better luck next time! </h2>
    </div>

    <h2> You got {{ count }} out of {{ questions.length }} correct.</h2>

    <button type="button" name="button"><router-link :to="{ name: 'home' }">Back to Home Page</router-link></button>
  </div>
</template>

<script>

import LessonService from '@/services/LessonService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'results-view',
  props: ['lesson', 'answers'],
  data() {
    return {
      questions: this.lesson.questions,
      count: 0,
    }
  },

  mounted() {
    this.count = 0;
    this.answers.forEach((answer, index) => {
      if (answer === this.questions[index].correct) {
        this.count += 1;
      }
    });

    if(this.count === this.questions.length && this.lesson._id) {
      const updatedLesson = {
        lesson_complete: "true",
      };
      LessonService.updateLesson(this.lesson._id, updatedLesson)
      .then(() => {

      })
    }
  },
}
</script>

<style lang="css" scoped>

  h3 {
    font-size: 2em;
  }
  .winner {
    height: 200px;
    width: 200px;
  }

  .sadface {
    height: 150px;
    width: 150px;
  }

  a {
    margin-bottom: 20px;
    color: #2C3E50;
    transition: 0.2s;
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
    color: #2C3E50;
    margin: 15px 50px;
    transition: 0.2s;
  }

  button:hover {
    background-color: white;
    border-color: orange;
    cursor: pointer;
  }

</style>
