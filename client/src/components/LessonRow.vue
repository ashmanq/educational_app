<template lang="html">
  <div class="">
    <img v-bind:src="lessonRow.pic" v-bind:alt="lessonRow.name">
      <div class="column">
        <h3>{{ lessonRow.name }}</h3>
        <p>{{ lessonRow.text }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'lesson-row',
  props: ['lessonRow']
}
</script>

<style lang="css" scoped>
img {
  border-radius: 20px;
  width:400px;
}
.container {
  margin: 20px;
}
.column {
  display: flex;
  flex-direction: column;
  /* padding:0px 40px; */
  width:40%;
}
</style>
