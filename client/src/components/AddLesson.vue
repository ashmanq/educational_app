<template lang="html">
  <div class="menu">
    <h3>Create a new lesson or edit an existing one from the dropdown.</h3>
      <div v-if="addOrEdit == null" class="">
        <button v-on:click="addOrEditFn('add')"type="button" name="button">New Lesson</button>
        <button v-on:click="addOrEditFn('edit')" type="button" name="button">Edit Lesson</button>
      </div>
      <new-lesson v-if="addOrEdit === 'add'"></new-lesson>
      <edit-lesson v-if="addOrEdit === 'edit'" :lessons="lessons"></edit-lesson>
  </div>
</template>

<script>
import NewLesson from '@/components/NewLesson.vue'
import EditLesson from '@/components/EditLesson.vue'
import LessonDetail from '@/components/LessonDetail.vue'
import LessonService from '@/services/LessonService.js'

import { eventBus } from '@/main.js'

export default {
  name: "add-lesson-component",
  props: ["lessons"],
  data() {
    return {
    selectedLesson: null,
    name: null,
    image: null,
    lessonList: null,
    addOrEdit: null
  }
},
mounted(){
  this.lessonList = this.lessons;
  // this.addOrEdit = null;
},
  methods: {
  handleSubmit() {
    const newLesson = {
      name: this.name,
      image: this.image
    }
    this.lessonList.push(newLesson);
    console.log("Ready!");
    eventBus.$emit('new-lesson', newLesson);
    this.name = "";
    this.image = "";
  },
  addOrEditFn(word) {
    this.addOrEdit = word;
  }
},
components: {
  'lesson-detail': LessonDetail,
  'new-lesson': NewLesson,
  'edit-lesson': EditLesson
 }
}

</script>

<style lang="css" scoped>
  .menu {
    color: white;
  }

  .new {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  input {
    margin: 5px;
  }

  input[type="text"] {
    margin: 5px;
    width: 42%;
  }

  textarea {
    width: 42%;
    height: 50px;
  }

  .questions {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* align-content: center; */
    /* align-self: center; */
    padding: 10px;
    padding: 25px 0px;
  }

  .newQuestion {
    display: flex;
    flex-direction: column;
    margin: 5px;
    /* align-items: center; */
  }

  .newCorrect {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }

  .question {
    width: 320px;
  }
</style>
