<template lang="html">

<p v-if="selectedLesson">{{selectedLesson}}</p>

</template>

<script>
export default {
  name: 'lesson-detail',
  props: ['selectedLesson']
}
</script>

<style lang="css" scoped>
</style>
