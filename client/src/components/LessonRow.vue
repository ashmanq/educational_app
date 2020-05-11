<template lang="html">
    <div class="item">
      <div class="column">
        <img v-bind:src="lessonRow.pic" v-bind:alt="lessonRow.name">
        <img class="center" :src="require('@/assets/playBtn.svg')" alt="">
      </div>
      <div class="column">
        <h2>{{ lessonRow.name }}</h2>
        <p>{{ lessonRow.text }}</p>
        <button class="center" v-on:click="playAudio()" type="button" name="button">Play Audio</button>

      </div>
    </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'lesson-row',
  props: ['lessonRow'],
  data() {
    return {
      recording: null,
      recordingLocation: null
    }
  },
  mounted() {
    if(this.lessonRow.recording){
      const lessonRecording = new Audio(require(`@/assets/recordings/${this.lessonRow.recording}`));
      this.recording = lessonRecording;
    };

    eventBus.$on('stop-playback', () => {
      if(this.recording){
        this.recording.pause();
      }
    })
  },
  beforeDestroy(){
    this.recording.pause()
  },
  methods: {
    playAudio: function() {
      this.recording.currentTime = 0;
      this.recording.play()
    }
  }
}
</script>

<style lang="css" scoped>
h2 {
  font-size: 2em;
}

img {
  border-radius: 800px;
  width:70%;
  height:300px;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.container {
  margin: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  width:60%;
  color: white;
}

.center {
  margin-top: 20px;
  align-self: center;
}
</style>
