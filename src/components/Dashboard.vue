<template>
  <div ref="dashboardBox" class="dashboard">
    <TrackerCard v-bind:delete="deleteTracker(tracker)" v-for="(tracker, id) in trackers" v-bind:url="'/'+tracker.type+'/'+tracker.title" v-bind:type="tracker.type" v-bind:key="id">
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
    },
    deleteTracker: function(tracker){
      return function(){
        Store.deleteTracker(tracker.type,tracker.title);
        this.trackers = Store.getTrackers();
      }
    }
  },
  mounted(){
    let _startY;
    //this.$refs.dashboardBox
    window.addEventListener('scroll', e => {
      if (document.scrollingElement.scrollTop === 0)
          console.log('top')
    });
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
  background-color: #F09500;
  border-radius: 50%;

  position: fixed;
  right: 20px;
  bottom: 20px;
}

.shadowed{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.center-and-large{
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:  translateX(-50%) translateY(-50%) scale(1.5);
}
</style>
