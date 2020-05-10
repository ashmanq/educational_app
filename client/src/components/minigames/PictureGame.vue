<template lang="html">
  <div class="container">
    <h1> Guess The Picture</h1>
    <div v-if="(images.length && !showResults)" class="">
      <div class="row">
        <img :src="chosenImage.pic" alt="">
        <div class="col">
            <drag :data="value" :id="'choice'+index" class="choices" draggable="true" v-for="(value, index) in choices">{{ value }}</drag>
        </div>
      </div>
        <p>{{ this.message }}</p>
      <div class="row">
        <drop id="answer" @drop="onCopyDrop">
          <p class="selection">{{selectedAnswer}}</p>
        </drop>
      </div>
      <button id="sub-answer" v-on:click="checkAnswer" type="button" name="button">Submit</button>
    </div>

    <div v-if="!images.length && !showResults" class="">
      <p> Please complete at least one lesson before playing this minigame. </p>
    </div>

    <!-- Results -->
    <div v-if="showResults">
        <img v-if="result" class="winner" src="https://www.svgrepo.com/show/293851/trophy.svg"></img>
        <img v-if="!result" class="winner" src="https://www.svgrepo.com/show/102509/sad.svg"></img>
        <h2>{{ message}}</h2>
        <button class="center" v-on:click="newGame" type="button" name="button">New Game</button>
        <router-link :to="{ name: 'home' }">
          <button class="center" type="button" name="button">Home Page</button>
        </router-link>
    </div>

  </div>
</template>

<script>

import { Drag, Drop, DropMask } from "vue-easy-dnd";

export default {
  name: 'picture-game',
  props: ['lessons'],
  data() {
    return {
      images: [],
      chosenImage:null,
      chosenLesson: null,
      currentIndex: null,
      choices: null,
      selectedAnswer: "",
      message: "Drag your answer to the box below",
      showResults: false,
      result: false,
    }
  },
  mounted() {
    this.getImageList();
    this.chooseImage();

  },
  methods: {
    // We get an array of objects for each row from completed games
    getImageList: function() {
      const picDetails = null;
      this.lessons.forEach((lesson, i) => {
        if(lesson.lesson_complete === "true"){
          lesson.details.forEach((row, index) => {
            row.lessonIndex = i;
            this.images.push(row)
          });
        };
      });
    },

    chooseImage: function() {
      this.selectedAnswer = "";
      this.message = "Drag your answer to the box below";
      let randomIndex = Math.floor(Math.random() * this.images.length);
      // Sometimes the same number is generated twice. To prevent this
      // we run a while loop until the randomIndex differs from the current
      // index.
      while (randomIndex === this.currentIndex) {
        randomIndex = Math.floor(Math.random() * this.images.length);
      }
      this.currentIndex = randomIndex;
      this.chosenImage = this.images[this.currentIndex];
      this.createChoices();
    },

    createChoices: function() {
      const lessonDetails = this.lessons[this.chosenImage.lessonIndex].details;
      const options = lessonDetails.map((row) => {
        return row.name;
      });

      this.choices = options;
    },

    checkAnswer: function() {
      if(this.selectedAnswer !== ""){
        if(this.selectedAnswer === this.chosenImage.name) {
          this.message = "You win!";
          this.result = true;
        } else {
          this.message = "Wrong answer!";
          this.result = false;
        }
        this.showResults = true;
      } else {
        this.message = "Please select an answer"
      }
    },

    onCopyDrop(e) {
      this.selectedAnswer = e.data;
      this.message= "Press submit to submit answer";
    },

    newGame() {
      this.showResults= false;
      this.message = "";
      this.chooseImage();
    },
  },
  components: {
    Drag,
    Drop,
    DropMask
  }

}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  width: 97.8vw;
  border-radius: 10px;
  padding-bottom: 50px;
}

.center {
  align-self: center;
}

.row {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
}

.choices {
  font-size: 1.2em;
  background-color: #f5ce42;
  padding:10px;
  color: #2C3E50;
  border-radius: 5px;
  width:100%;
  min-width: 200px;
  margin: 20px;
}

img {
  width: 350px;
  height: 350px;
  border-radius: 10px;
}

#answer {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
  background-color: white;
  border-radius: 10px;
  align-self: center;
  color: blue;
  font-size: 1.3em;
  border-style: solid;
  border-width: medium;
  border-color: blue;
}

#sub-answer {
  margin-bottom: 50px;
}
</style>
