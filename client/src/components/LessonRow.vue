<template lang="html">
    <div class="item">
      <div class="column">
        <img class="row-image" v-bind:src="lessonRow.pic" v-bind:alt="lessonRow.name">
      </div>
      <div class="column">
        <h2>{{ lessonRow.name }}</h2>
        <p>{{ lessonRow.text }}</p>
        <button v-bind:class="{'btn-playing': playing}" v-if="recording" class="btn-center" v-on:click="playAudio()" type="button" name="button"> Play Audio<span ><img class=" icon" :src="require('@/assets/playBtn.svg')" alt=""></span></button>
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
      playing: false,
    }
  },
  mounted() {
    // We automatically create a name using the name of the row.
    const recordingName = this.lessonRow.name.toLowerCase().replace(/ /g,"-") + '.mp3';
    // We then check to see if the file exists. If it doesnt then nothing is allocated to
    // recording.
    try {
      const lessonRecording = new Audio(require(`@/assets/recordings/${recordingName}`));
      lessonRecording.onended = () => {
        this.playing = false;
      };
      this.recording = lessonRecording;
    }
    catch(e){

    }

    eventBus.$on('stop-playback', () => {
      if(this.recording){
        this.recording.pause();
        this.playing = false;
      }
    })
  },
  beforeDestroy(){
    if(this.recording){
      this.recording.pause()
      this.playing = false;
    }
  },
  methods: {
    playEnd: function() {
      console.log('Hi');
      this.playing = false;
    },
    playAudio: function() {
      if(!this.playing){
        this.recording.currentTime = 0;
        this.recording.play()
        this.playing = true;
      } else {
        this.recording.pause();
        this.playing = false;
      }

    }
  }
}
</script>

<style lang="css" scoped>
h2 {
  font-size: 2em;
}

.row-image {
  border-radius: 10px;
  width:70%;
  height:300px;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-content: center;
}

.container {
  margin: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  width:60%;
  color: white;
}

.btn-center {
  display: flex;
  margin-top: 0px;
  align-self: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 5px;
}

.btn-playing {
  background-color: rgb(84,240,84);
}

.btn-playing span {
  /* display: none; */
}

.btn-playing:hover {
  background-color: rgb(84,240,84);
  border-color: rgb(43,194,83);
}

.icon {
  margin-left: 15px;
  height:30px;
  display: flex;
  align-self: center;
}
</style>
