<template lang="html">

<span>

<form class="" action="index.html" method="post">

<label for="allAnswers">{{answer}}</label>

<input type="text" :answer="answer">

</form>

</span>

</template>

<script>
export default {
  props: ['answer']
}
</script>

<style lang="css" scoped>

</style>
