<template lang="html">
  <div class="lesson">
    <h3>{{ lesson.name }}</h3>
    <img v-bind:src="lesson.image">
  </div>
</template>

<script>
export default {
  name: 'list-item',
  props: ['lesson'],

  methods: {

  },
}
</script>

<style lang="css" scoped>

.lesson {
  display: flex;
  flex-direction: column;
}
</style>
