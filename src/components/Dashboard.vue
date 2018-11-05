<template>
  <div class="dashboard">
    <TrackerCard v-for="(tracker, id) in trackers" v-bind:key="id">
    {{tracker.title}}
    </TrackerCard>
    <div class="floating-button shadowed" v-on:click="createTracker"><v-icon name="plus" class="center-and-large"/></div>
  </div>
</template>

<script>
import TrackerCard from './TrackerCard.vue'
import Store from '../js/Store.js'
export default {
  name: 'Dashboard',
  props: {
    
  },
  components:{
    TrackerCard
  },
  data: function(){
    return {
      trackers: Store.getTrackers()
    }
  },
  methods:{
    createTracker: function(){
      this.$router.push({path:`/createTracker`});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dashboard{
  padding:30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.floating-button{
  width: 65px;
  height: 65px;
  background-color: #009cd3;
  border-radius: 50%;

  position: fixed;
  right: 20px;
  bottom: 20px;
}

.shadowed{
  box-shadow: 2px 2px 2px #d1d1d1;
}
.center-and-large{
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:  translateX(-50%) translateY(-50%) scale(1.5);
}
</style>
