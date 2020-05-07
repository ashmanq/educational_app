<template lang="html">
   <div class="lesson-list">
     <list-item v-for="(lesson, index) in lessons" :lesson="lesson" :key="index"></list-item>
   </div>
</template>

<script>

import ListItem from '@/components/ListItem.vue'

export default {
  name: 'lesson-list',
  props: ['lessons'],

  components: {
    'list-item': ListItem,
  }
}
</script>

<style lang="css" scoped>

.lesson-list {
  display: flex;
  justify-content: space-around;
  justify-content: center;
  /* margin: 5px; */
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;

}
</style>
