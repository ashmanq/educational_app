<template lang="">
  <div class="container">
    <h2> Results </h2>
    <p> You got {{ count }} out of {{ questions.length }} correct.</p>
  </div>
</template>

<script>
export default {
  name: 'results-view',
  props: ['questions', 'answers'],
  data() {
    return {
      count: 0,
    }
  },

  mounted() {
    this.count = 0;
    this.answers.forEach((answer, index) => {
      if (answer === this.questions[index].correct) {
        this.count += 1;
      }
    })
  },
}
</script>

<style lang="css" scoped>
</style>
