<template lang="html">
  <div class="lesson">
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
    openLessonPage() {

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
  /* background-color: #BA9E3A; */
  /* background: rgba(0, 0, 0, 0.1); */
  /* border: 1px solid black; */
}
.lesson:hover img {
  /* opacity: 0.1; */
  /* background-blend-mode: overlay; */
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

</style>
