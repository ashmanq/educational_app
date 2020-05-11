<template lang="html">
  <div class="">
    <form v-on:submit.prevent="updateLesson" v-if="newLesson && !submitted" >
      <h3>Lesson Name</h3>
      <input class="lesson-input" type="text" id="name" v-model="newLesson.name" required>
      <h3>Lesson Image URL</h3>
      <input class="lesson-input" type="text" id="image" v-model="newLesson.image" required>

      <div v-for="(topic, index) in newLesson.details" :topic="topic" :key="index" class="column">
        <h3>Topic Name: {{ index + 1 }}</h3>
        <input class="lesson-input" type="text"  v-model="topic.name" required>

        <h3>Topic Image URL: {{ index + 1 }}</h3>
        <input class="lesson-input" type="text" v-model="topic.pic" required>

        <h3>Topic Information: {{ index + 1 }}</h3>
        <textarea class="lesson-input-box" type="text"  v-model="topic.text" required></textarea>
        <button v-if="index > 0" v-on:click="deleteDetails(index)" type="button">Delete Topic {{index + 1}}</button>
      </div>

      <button v-on:click="addDetails" type="button">Add New Topic</button>

      <div v-for="(question, index) in newLesson.questions" :question="question" :key="'q' + index" class="column">
        <div class="row">
          <div class="column">
            <label class="q-label" for="question">Question: {{ index + 1 }}</label>
            <label class="q-label" for="correctAnswer">Correct Answer: {{ index + 1 }}</label>
            <label class="q-label" for="answers">Possible Answers: {{ index + 1 }}</label>
          </div>
          <div class="column">
            <input v-model="question.question" type="text" class="q-input" required>
            <input v-model="question.correct" type="text" class="q-input" required>
            <input v-model="question.answers" type="text"  class="q-input" required>
          </div>
        </div>
        <button v-if="index > 0" v-on:click="deleteQuestion(index)" type="button" name="button">Delete Question {{index + 1}}</button>

      </div>
      <div class="column">
        <button v-on:click="addQuestion" type="button" name="button">Add Question</button>
        <p></p>
        <input class="btn" type="submit" name="UpdateLesson" value="Update Lesson">
        <button v-on:click="deleteLesson" type="button" name="delete-lesson">Delete Lesson</button>
      </div>
    </form>

    <div v-if="submitted">
        <p> {{ message }} </p>
        <router-link :to="{ name: 'home' }"><button type="button" name="button">Back to Home Page</button></router-link>
    </div>
  </div>

</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'lesson-detail',
  props: ['lesson'],
  data() {
    return {
      newLesson: null,
      message: "",
      submitted: false,
    }
  },
  mounted() {
    if(!this.lesson) {
      const lesson = {
        name: null,
        image: null,
        details: [{ name:null , text:null , pic: null }],
        questions: [{ question: null, correct: null, answers: null }]
      };
      return lesson;
    } else {
      this.newLesson = this.lesson;

      const questions = this.newLesson.questions;

      // We converts the answers into a string with commas.
      questions.forEach((question, i) => {
        this.newLesson.questions[i].answers = question.answers.join();
      });
    }
  },
  methods: {
    updateLesson() {
      //We convert the answers back from a string into arrays.
      const convertedAnswers = this.newLesson.questions.map((question) => {
        return question.answers.split(',')
      });
      convertedAnswers.forEach((answer, i) => {
        this.newLesson.questions[i].answers = answer;
      });

      eventBus.$emit('lesson-updated', this.newLesson);
      this.message = "The lesson has been updated!";
      this.submitted = true;
    },

    deleteLesson() {
      eventBus.$emit('delete-lesson', this.newLesson);
      this.message = "This lesson has been deleted!";
      this.submitted = true;
    },

    addQuestion() {
      const newQuestion = { question: null, correct: null, answers: null };
      this.newLesson.questions.push(newQuestion);
    },

    addDetails() {
      const newDetails = { name:null , text:null , pic: null };
      this.newLesson.details.push(newDetails);
    },

    deleteQuestion(index) {
      this.newLesson.questions.splice(index, 1);
    },

    deleteDetails(index) {
      this.newLesson.details.splice(index, 1);
    }
  },
  watch: {
    lesson: function() {
      this.newLesson = this.lesson;
      this.submitted = false;
    }
  }
}
</script>

<style lang="css" scoped>

.lesson-input {
  font-size: 1.2em;
  width: 50%;
}

.lesson-input-box {
  font-size: 1.2em;
  width: 50%;
  height: 100px;
}


label {
  margin: 5px;
}

input {
  margin: 5px;
}

button {
  margin: 20px;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  align-self: center;
  padding: 10px;
  padding: 25px 0px;
  font-size: 1.2em;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}

.q-input {
  width:100%;
  font-size:1.2em;
}

.q-label {
  width:100%;
  font-size: 1.2em
}

.question {
  width: 320px;
}

.btn {
  display: inline-block;
  background-color: #f5ce42;
  padding: 10px 20px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #444;
  border-radius: 4px;
  width: 250px;
  color: #2C3E50;
  margin: 10px 50px;
  margin-bottom: 15px;
  transition: 0.2s;
}

.btn:hover {
  background-color: white;
  border-color: orange;
  cursor: pointer;
}

</style>
