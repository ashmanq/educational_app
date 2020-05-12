<template lang="html">
   <div class="lesson-list">
       <h2></h2>
     <!-- <h1>Lessons</h1> -->
     <br>
     <div class="meter">
       <span :style="progress "></span>
     </div>
     <p class="">Lessons Completed: {{completedLessons}}/{{lessons.length}}</p>
      <div class="lessons">
        <list-item v-for="(lesson, index) in lessons" :lesson="lesson" :key="index"></list-item>
        <div class="plusBox">
          <router-link :to="{ name: 'editLesson', params: {lessons} }"><img class="plus" src="@/assets/plus.svg" alt=""></router-link>

        </div>

      </div>
  </div>

</template>

<script>

import ListItem from '@/components/ListItem.vue'

export default {
  name: 'lesson-list',
  props: ['lessons'],
  data() {
    return {
      completedLessons: 0,
      progress: 0
    }
  },
  components: {
    'list-item': ListItem,
  },
  watch: {
    lessons: function() {
      this.lessons.forEach((lesson) => {
        if (lesson.lesson_complete === 'true') {
          this.completedLessons += 1
        }
      })
      // setTimeout(2000)
      this.progress = "width: " + ((this.completedLessons / this.lessons.length) * 100) + "%"
    }
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
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    flex-direction: column;
  }

  p {
    color: white;
    font-size: 1.3em;
  }

  .completed {
  }

  .lessons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: center;
    flex-wrap: wrap;
  }

  .meter {
  	height: 20px;  /* Can be anything */
    width: 500px;
  	position: relative;
  	background: #555;
  	-moz-border-radius: 25px;
  	-webkit-border-radius: 25px;
  	border-radius: 25px;
  	padding: 2px;
  	box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
    display: flex;
    align-self: center;
  }

  .meter > span {
  display: block;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(43,194,83);
  background-image: linear-gradient(
    center bottom,
    rgb(43,194,83) 37%,
    rgb(84,240,84) 69%
  );
  box-shadow:
    inset 0 2px 9px  rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.4);
  position: relative;
  overflow: hidden;
  animation: move 3s;
  }

  @keyframes move {
   0% { width: 0; }
   100% { width: 0.5; border-top-right-radius: 20px;
   border-bottom-right-radius: 20px;}
 }

  h1 {
    text-shadow: none;
  }

  .plus {
    width: 70%;
    height: 70%;
    display: flex;
    align-self: center;
    /* margin: 35px; */
  }

  .plusBox {
    width: 350px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 35px;
    align-content: center;
    align-items: center;
  }

  a {
    display: flex;
    align-self: center;
    margin-left: 80px;
  }

  a:hover {
    animation: myfirst 0.1s;
    position: relative;
    animation-fill-mode: forwards;
  }

  @keyframes myfirst {
    0% {top: 0;}
    100% {top: 5px;}
  }

</style>
