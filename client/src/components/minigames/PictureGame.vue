<template lang="html">
  <div class="container">
    <h1> Guess The Picture</h1>
    <div v-if="images.length" class="">
      <div class="row">
        <img :src="chosenImage.pic" alt="">
        <div class="col">
          <!-- <button type="button" name="button">A</button>
          <button type="button" name="button">B</button>
          <button type="button" name="button">C</button>
          <button type="button" name="button">D</button> -->
          <p class="choices" draggable="true" v-on:ondragstart="drag" v-for="(value, index) in choices">{{ value }}</p>
        </div>
      </div>
      <div class="row">
        <div id="answer" v-on:ondrop="drop" v-on:ondragover="allowDrop">
          <p class="selection">Drag Answer Here</p>
        </div>
      </div>

      <p></p>
      <button v-on:click="chooseImage" type="button" name="button">New Game</button>
    </div>
    <div v-if="!images.length" class="">
      <p> Please complete at least one lesson before playing this minigame. </p>
    </div>
    <router-link :to="{ name: 'home' }">
      <button class="center" type="button" name="button">Home Page</button>
    </router-link>
  </div>
</template>

<script>
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

    allowDrop: function(e){
      e.preventDefault();
    },

    drag: function(e) {
      e.dataTransfer.setData("text", e.target.id);
      console.log('hi');

    },

    drop: function(e) {
      e.preventDefault();
      let data = e.dataTransfer.getData("text");
      e.target.appendChild(document.getElementById(data));
      console.log('hi');
    }
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
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
}

.choices {
  font-size: 1.4em;
  background-color: #f5ce42;
  padding:10px;
  color: #2C3E50;
  border-radius: 5px;
  width:100%;
  min-width: 200px;
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
  background-color: #aaaaaa;
  border-radius: 5px;
  align-self: center;
  color: #2C3E50;
  font-size: 1.2em;
}
</style>
