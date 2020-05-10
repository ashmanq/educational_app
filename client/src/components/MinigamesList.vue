<template lang="html">
  <div class="games-list">
    <h1>Minigames</h1>
    <div class="game">
      <router-link :to="{ name: 'minigame', params: {lessons} }">
        <h3>Picture Game</h3>
        <img src="https://images.unsplash.com/photo-1580722434936-3d175913fbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" width="350">
      </router-link>
    </div>

  </div>
</template>

<script>

import PictureSlide from '@/components/minigames/PictureSlide.vue';

export default {
  name: 'minigames-list',
  props: ['lessons'],
  components: {
    'picture-slide': PictureSlide,
  }
}
</script>

<style lang="css" scoped>

.games-list {
  display: flex;
  justify-content: space-around;
  justify-content: center;
  /* margin: 5px; */
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  margin-top: 20px;

}

.game {
  display: flex;
  flex-direction: column;
  width:auto;
  background-color: #F5CE42;
  margin: 35px;
  color: #2C3E50;
  transition: 0.3s;
}

img {
  width: 350px;
  height: 250px;
}

a {
  color: #2C3E50;
}

.game:hover {
  animation: myfirst 0.1s;
  position: relative;
  animation-fill-mode: forwards;
}

</style>
