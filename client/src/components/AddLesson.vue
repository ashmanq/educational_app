<template lang="html">
<div class>
<h4>Select Lesson</h4>

<form v-on:submit.prevent="handleSubmit" method="post">

<label for="name">Name:</label>
<input type="text" id="name" v-model="name" required>

<br>

<label for="image">Image URL:</label>
<input type="text" id="image" v-model="image" required>

<br>

<input type="submit" value="Save Lesson">

</form>

<label for="selectLesson"></label>
<select v-model="selectedLesson">

  <option v-for="(lesson, index) in lessons" :lessons="lessons" :key="index" :value="lesson">{{lesson.name}}</option>

</select>

<lesson-detail :selectedLesson="selectedLesson"></lesson-detail>

</div>
</template>

<script>

import LessonDetail from '@/components/LessonDetail.vue'
import LessonService from '@/services/LessonService.js'

import { eventBus } from '@/main.js'

export default {
  name: "add-lesson",
  props: ["lessons"],
  data() {
    return {
    selectedLesson: null,
    name: null,
    image: null
  }
},
  methods: {
  handleSubmit() {
    const newLesson = {
      name: this.name,
      image: this.image
    }
    eventBus.$emit('post-lesson', newLesson);
    this.name = "";
    this.image = "";
  }
},
components: {
  'lesson-detail': LessonDetail
 }
}

</script>

<style lang="css" scoped>
form {
  background-color: white;
}
</style>
