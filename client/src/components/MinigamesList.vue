<template lang="html">
  <div class="games-list">
    <h2>Minigames</h2>
    <div class="game">
      <router-link v-bind:class="checkNoComplete(1)" :to="{ name: 'minigame', params: {lessons, game:'picgame'} }">
        <h3 v-if="checkComplete>=1">Picture Game</h3>
        <h3 v-if="checkComplete<1" class='centered'>Complete 1 Lesson to unlock</h3>
        <img src="https://images.unsplash.com/photo-1580722434936-3d175913fbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" width="350">
      </router-link>
    </div>

    <div class="game">
      <router-link v-bind:class="checkNoComplete(2)" :to="{ name: 'game', params: {lesson, type:'quiz'} }">
        <h3 v-if="checkComplete>=2">Questionnaire</h3>
        <h3 v-if="checkComplete<2" class='centered'>Complete 2 Lessons to unlock</h3>
        <img src="https://cdn.pixabay.com/photo/2017/03/25/20/51/quiz-2174368_960_720.png" width="350">
      </router-link>
    </div>

  </div>
</template>

<script>


export default {
  name: 'minigames-list',
  props: ['lessons'],
  data() {
    return {
      // checkComplete: this.countCompletedLessons(),
      // lesson: {questions:[]},
    }
  },
  mounted() {
    this.createQuestionsList();
    // this.countCompletedLessons();
  },
  computed: {
    checkComplete: function() {
      let count = 0;
      this.lessons.forEach((lesson) => {
        if(lesson.lesson_complete === "true"){
              count += 1;
            }
      });
      return count;
    },
    // The following will create the question list based on all lessons
    // that have been completed
    lesson: function() {
      const questionsList = [];
      this.lessons.forEach((indLesson) => {
        if(indLesson.lesson_complete === "true"){
          questionsList.push(indLesson.questions)
        };
      });
      // We flatten the result array
      const flatArray = questionsList.flat();
      // We shuffle the questions arrau around
      const shuffledArray = flatArray.map(a => [Math.random(), a])
                            .sort((a, b) => a[0] - b[0])
                            .map(a => a[1]);
      // We then return the array as a questions object to lesson
      return {questions: shuffledArray};
    }
  },
  methods: {
    checkNoComplete(requiredNo) {
      if(this.checkComplete < requiredNo) {
        return "disabled";
      }
    },
    // We populate the questionaireLesson variable with all questions from
    // lessons that have been completed
    createQuestionsList() {
      const questionsList = [];
      this.lessons.forEach((lesson) => {
        if(lesson.lesson_complete === "true"){
          questionsList.push(lesson.questions)
        };
      });

      this.lesson.questions.push(questionsList.flat())
    },
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
  background: linear-gradient(180deg, rgba(245,174,66,1) 0%, rgba(217,147,60,1) 57%);
  border-radius: 3px;
}

img {
  width: 350px;
  height: 250px;
}

a {
  color: #2C3E50;
}

a.disabled {
  pointer-events: none;
  cursor: default;
  background-color: #878787;
}

.game:hover {
  animation: myfirst 0.1s;
  position: relative;
  animation-fill-mode: forwards;
}


@keyframes myfirst {
  0% {top: 0;}
  100% {top: 5px;}
}
</style>
