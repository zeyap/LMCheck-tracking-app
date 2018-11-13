import Vue from 'vue'
import Router from 'vue-router'

// TODO: Import component you created
import CreateTracker from './components/CreateTracker.vue'
import Dashboard from './components/Dashboard.vue'
import Timer from './components/Timer.vue'
import Todo from './components/Todo.vue'
import NonExist from './components/NonExist.vue'

//vue-router reference: https://router.vuejs.org/guide/

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  // TODO: Update routes to include your component
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard
    },
    {
      path: '/index.html',
      name: 'Home',
      component: Dashboard
    },
    {
      path: '/createTracker',
      name: 'create new tracker',
      component: CreateTracker
    },
    {
      path: '/timer/:title',
      name: 'create new timer',
      component: Timer
    },
    {
      path: '/todo/:title',
      name: 'create new Todo List',
      component: Todo
    },
    //404
    {
      path: '/:any',
      name: "page doesn't exist",
      component: NonExist
    }
  ]
})
