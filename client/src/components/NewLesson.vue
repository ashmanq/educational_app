<template lang="html">
  <div class="">
    <div class="new">

        <h3>Lesson Name</h3>
        <input type="text" id="name" v-model="name" required>

        <h3>Lesson Image URL</h3>
        <input type="text" id="image" v-model="image" required>

        <h3>Topic Name</h3>
        <input type="text" id="topic" name="" value="">

        <h3>Topic Image URL</h3>
        <input type="text" id="topicImg" name="" value="">

        <h3>Topic Information</h3>
        <textarea type="text" id="topicInfo" name="" value=""></textarea>

        <div class="questions">
          <div class="newQuestion">
            <label for="question">Question</label>
            <label for="correctAnswer">Correct Answer</label>
            <label for="answers">Possible Answers</label>
          </div>
          <div class="newCorrect">
            <input name="" value="" class="question">
            <input value="" class="correct">
            <input value="" class="question">
          </div>
        </div>
    </div>
    <br>

    <button v-on:click.stop="handleSubmit" type="button" name="button">Submit</button>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
