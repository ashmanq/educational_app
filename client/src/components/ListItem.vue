<template lang="html">
  <div v-bind:class="checkComplete()" class="lesson">
    <router-link :to="{ name: 'lesson', params: {lesson} }">
      <h3>The {{ lesson.name }}</h3>
      <img v-bind:src="lesson.image" width="350">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'list-item',
  props: ['lesson'],

  methods: {
    checkComplete() {
      // let newClass = "";
      if(this.lesson.lesson_complete === "true"){
        return "completed";
      }
      // else {
      //   newClass = "";
      // }
      // return newClass;
    },
  },
}
</script>

<style lang="css" scoped>

  .lesson {
    display: flex;
    flex-direction: column;
    background-color: #F5CE42;
    margin: 35px;
    color: #2C3E50;
    transition: 0.3s;
  }

  .lesson img {
    width: 350px;
    height: 250px;
  }

  a {
    color: #2C3E50;
  }

  .lesson:hover {
    animation: myfirst 0.1s;
    position: relative;
    animation-fill-mode: forwards;
  }

  @keyframes myfirst {
    0% {top: 0;}
    100% {top: 5px;}
  }

  .completed {
      border-style: solid;
      border-color: red;
  }


</style>
