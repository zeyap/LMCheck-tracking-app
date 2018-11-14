<template>
<v-touch v-on:swipedown="createTracker">
  <div ref="dashboardBox" class="dashboard">
    <TrackerCard v-bind:id="'trackercard_'+tracker.type+'_'+tracker.title" v-bind:delete="deleteTracker(tracker)" v-for="(tracker, id) in this.trackers" v-bind:url="'/'+tracker.type+'/'+tracker.title" v-bind:type="tracker.type" v-bind:key="id">
    {{tracker.title}}
    </TrackerCard>
    <div class="floating-button shadowed" v-on:click="createTracker"><v-icon name="plus" class="center-and-large"/></div>
  </div>
</v-touch>
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
        let card = document.querySelector('#trackercard_'+tracker.type+'_'+tracker.title);
        card.style.transform="scale(0.5)";
        card.style.opacity="0";
        card.style['transition-property']="transform, opacity";
        card.style['transition-duration']="0.2s, 0.2s";
        setTimeout(()=>{
          card.style.display="none";
        },200);
        Store.deleteTracker(tracker.type,tracker.title);
        this.trackers = Store.getTrackers();
        
      }
    }
  },
  mounted(){
    
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
  background-color: #01A764;
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
