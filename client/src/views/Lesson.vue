<template lang="html">
  <div class="container">
    <!-- <h1>{{ lesson.name }}</h1> -->
    <lesson-row v-bind:class="checkPage(index)" v-if="lesson" v-for="(lessonRow, index) in lesson.details" :lessonRow="lessonRow" :key="index"></lesson-row>

    <div class="pages">
      <button v-if="pageNo > 0" v-on:click="changePage('prev')" type="button" name="prevPage">Previous</button>
      <!-- <h2 class="page-no">{{ pageNo + 1 }}</h2> -->
      <button v-if="pageNo < details.length - 1" v-on:click="changePage('next')" type="button" name="nextPage">Next</button>
      <router-link :to="{ name: 'game', params: {lesson} }">
        <button v-if="(pageNo === details.length - 1)" type="submit" name="button">Test Your Knowledge</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import LessonRow from '@/components/LessonRow.vue';
import {eventBus} from '@/main.js';

export default {
  props: ['lesson'],
  data() {
    return {
      questions: this.lesson.questions,
      details: this.lesson.details,
      pageNo: 0,
    }
  },
  methods: {
    checkPage(index) {
      if(index == this.pageNo) {
        return "row";
      } else {
        return "hidden";
      }
    },

    changePage(changeType) {
      if(changeType==='prev' && this.pageNo != 0) {
        this.pageNo -= 1;
        eventBus.$emit('stop-playback');
      }
      else if(changeType==='next' && this.pageNo < this.questions.length - 1) {
        this.pageNo += 1;
        eventBus.$emit('stop-playback');
      }
    }
  },
  components: {
    'lesson-row': LessonRow
  }

}
</script>

<style lang="css" scoped>
  .show {
    visibility: visible;
  }

  .hidden {
    display: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    height: 70vh;
  }

  .row {
    display: flex;
    flex-wrap: nowrap;
    margin: 50px;
    justify-content: space-around;

  }

  .row:nth-child(even) {
    flex-direction:row-reverse;
  }

  .pages {
    display: flex;
    justify-content: center;
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
      transition: 0.1s;
  }

</style>
