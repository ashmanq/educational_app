<template lang="html">

<div v-if="selectedLesson">

<div v-for="(detail, index) in selectedLesson.details" :details="details">

<form id="editLesson" v-on:submit.prevent="handleEdit">

<h3>Detail Name</h3>

<textarea class="lessonName" v-model="detail.name"></textarea>

<h3>Image Source</h3>

<textarea class="lessonImage" v-model="detail.pic"></textarea>

<h3>Detail Text</h3>

<textarea class="lessonText"type="text" v-model="detail.text"></textarea>

<br>

<input type="submit" value="Save Changes">

</form>

<div v-if="selectedLesson">

</div>

</div>

</div>

</template>

<script>

import { eventBus } from '@/main.js'

export default {
  name: 'lesson-detail',
  props: ['selectedLesson', 'details'],
data() {
  return {
    name: '',
    pic: '',
    text: ''
  }
},
methods: {
  handleEdit() {
  eventBus.$emit('lesson-edited', this.$data);
  const payload = {
  name: this.name,
  pic: this.pic,
  text: this.text
}
}
}
}
</script>

<style lang="css" scoped>

.lessonText {
width: 80%;
height: 100px;
}

.lessonName {
  width: 80%;
  height: 20px;
}

.lessonImage {
  width: 80%;
  height: 60px;
}

#editLesson {
  background-color: white;
}

</style>
