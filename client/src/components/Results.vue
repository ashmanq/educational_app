<template lang="">
  <div class="container">
    <h2> Results </h2>

    <div v-if="count == questions.length">
      <img class="winner" src="https://www.svgrepo.com/show/293851/trophy.svg"></img>
      <h2> You're a winner! </h2>
    </div>

    <div  v-if="count < questions.length">
      <img class="sadface" src="https://www.svgrepo.com/show/102509/sad.svg"></img>
      <h2> Better luck next time! </h2>
    </div>

    <h2> You got {{ count }} out of {{ questions.length }} correct.</h2>
    <h1><router-link :to="{ name: 'home' }">Back to Home Page</router-link></h1>
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
h3 {
  font-size: 2em;
}
.winner {
  height: 200px;
  width: 200px;
}

.sadface {
  height: 150px;
  width: 150px;
}

a {
  font-size: 0.6em;
  margin-bottom: 20px;
}

a:hover {
  /* text-shadow: 1px 1px grey, -1px -1px grey; */
  color: white;
}
</style>
