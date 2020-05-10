<template lang="html">

<span>

<label for="allAnswers">All Answers</label>
<input v-if="answer" type="text" v-model="answer" value="">

</span>

</template>

<script>
export default {
  props: ['answer']
}
</script>

<style lang="css" scoped>
</style>
