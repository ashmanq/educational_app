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
  background-color: #f5ce42
}

.lesson:hover {
  background-color: #ba9e3a
}


</style>
