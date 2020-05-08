import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Lesson from '@/views/Lesson';
import AddLesson from '@/views/AddLesson'

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
      path: '/addlesson',
      name: 'addLesson',
      component: AddLesson,
      props: true
    },
  ]
})

export default router;
