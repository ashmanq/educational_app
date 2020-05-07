<template lang="html">
  <div class="lesson">
    <router-link :to="{ name: 'lesson', params: {lesson} }">
      <h3>{{ lesson.name }}</h3>
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
  background-color: #f5ce42;
  margin: 35px;
  color: #2c3e50;
  transition: 0.3s;
}

a {
  color: #2c3e50;
}

.lesson:hover {
  /* background-color: #ba9e3a; */
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
