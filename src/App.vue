<template>
  <div id="app">
    <router-view v-if="!nonExist"/>
    <NonExist v-if="nonExist"/>
  </div>
</template>

<script>
import Store from './js/Store.js';
import NonExist from './components/NonExist.vue'
export default {
  name: 'app',
  watch:{
    '$route' (to,from){
      this.checkTrackerValidity(to.path);
    }
  },
  components:{
    NonExist
  },
  data(){
    return {
      nonExist: false
    }
    
  },
  mounted(){
    
    this.checkTrackerValidity(window.location.pathname);
  },
  beforeDestroy(){
    
  },
  methods:{
    checkTrackerValidity:function(url){
      this.nonExist=false;
      let path = url.split('/');
      if(path.length===3){
        //['', title, type]
        if(undefined === Store.getTracker(path[1],path[2])){
          this.nonExist=true;
        }
      }
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;

  background-color: #f0f0f0; 
  height: 100%;
}
body::-webkit-scrollbar {
    width: 0;
}
</style>
