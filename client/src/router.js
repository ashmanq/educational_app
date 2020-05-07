import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Lesson from '@/views/Lesson';

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
      component: Lessons,
      params: true
    },
  ]
})

export default router;
