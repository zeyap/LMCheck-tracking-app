import Vue from 'vue'
import Router from 'vue-router'

// TODO: Import component you created
import HelloWord from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  // TODO: Update routes to include your component
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWord
    }
  ]
})
