<template lang="html">
<div class="menu">
  <h4>Create a new lesson or choose an existing one from the dropdown.</h4>

    <form v-on:submit.prevent="handleSubmit()" method="post">
      <div class="new">
        <div class="newLabels">
          <label for="name">Name</label>
          <!-- <br> -->
          <label for="image">Image URL</label>
        </div>

        <div class="newInputs">
          <input type="text" id="name" v-model="name" required>
          <!-- <br> -->
          <input type="text" id="image" v-model="image" required>
        </div>
      </div>


      <br>

      <input type="submit" value="Save Lesson">

    </form>

    <br>

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
.menu {
  /* background-color: white; */
  color: white;
}

.new {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
}

.newLabels {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

.newInputs {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

label {
  margin: 5px;
}

input[type="text"] {
  margin: 5px;
}
</style>
