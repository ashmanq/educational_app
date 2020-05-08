<template lang="html">
<div class>
<h4>Select Lesson</h4>
<label for="selectLesson"></label>
<select id="selectedLesson">
  <option v-for="(lesson, index) in lessons" :lessons="lessons" :key="index">{{lesson.name}}</option>
</select>
</div>
</template>

<script>
export default {
  name: "add-lesson",
  props: ['lessons'],
mounted() {
  LessonService.getLessons()
  .then((lessons) => this.lessons = lessons)
}
}
</script>

<style lang="css" scoped>
.addLesson {

}
</style>
