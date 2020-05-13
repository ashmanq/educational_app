<template lang="html">
  <div class="container">
    <picture-game v-if="game=='picgame'" :lessons="lessons"></picture-game>
    <!-- <questionnaire v-if="game=='question'" :lessons="lessons"></questionnaire> -->
  </div>
</template>

<script>

import PictureGame from '@/components/minigames/PictureGame.vue';
// import Questionnaire from '@/components/minigames/Questionnaire.vue';

export default {
  name: 'mini-games',
  props:['lessons', 'game'],
  components: {
    'picture-game': PictureGame,
    // 'questionnaire': Questionnaire,
  }

}
</script>

<style lang="css" scoped>
.container {
  justify-content: center;
}


</style>
