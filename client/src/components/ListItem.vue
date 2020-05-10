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
      if(this.lesson.lesson_complete === "true"){
        return "completed";
      }
    },
  },
}
</script>

<style lang="css" scoped>

  .lesson {
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(245,206,66,1) 0%, rgba(175,146,43,1) 63%);
    margin: 35px;
    color: #2C3E50;
    transition: 0.3s;
    border-radius: 2px;
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
      background: linear-gradient(180deg, rgba(43,194,83,1) 0%, rgba(29,116,52,1) 63%);
  }


</style>
