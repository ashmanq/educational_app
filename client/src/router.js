import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Lesson from '@/views/Lesson';
import Game from '@/views/Game';
import Minigames from '@/views/Minigames'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: Lesson,
      props: true
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
      props: true
    },
    {
      path: '/minigame',
      name: 'minigame',
      component: Minigames,
      props: true
    }
  ]
})

export default router;
