<template lang="html">
  <div class="item">
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

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

img {
  border-radius: 5px;
  width:30%;
  height:30%;
}
.container {
  margin: 20px;
}
.column {
  display: flex;
  flex-direction: column;
  /* padding:0px 40px; */
  width:60%;
  color: white;
}
</style>
