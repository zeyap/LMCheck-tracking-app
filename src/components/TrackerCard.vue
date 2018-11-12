<template>
  <div ref="cardBody" class="tracker-card shadowed" v-on:click="click" v-on:touchstart="onTouchStart">
    <div v-if="this.type==='timer'" class="timerIcon color-bar-left"></div>
    <div v-if="this.type==='numeric'" class="numericIcon color-bar-left"></div>
    <div v-if="this.type!=='timer'&&this.type!=='numeric'" class="toDoIcon color-bar-left"></div>
    <div class="tracker-card-title">
      <slot></slot>
      <div v-show="this.editMode" class="cross"><v-icon name="times"/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackerCard',
  components:{
    
  },
  props: {
    url: String,
    type: String,
    delete: Function
  },
  data:function(){
    return {
      editMode: false,
      clicks: 0
    }
  },
  methods:{
    click:function(){
      this.clicks++;
      if(this.clicks === 1) {
        var self = this
        this.timer = setTimeout(function() {
          if(self.clicks===1){
            //1 click
            if(self.editMode===true){
              return self.deleteTracker();
            }else{
              return self.goTo()
            }
          }
          self.clicks = 0;
        }, 500);
        
      } else{
        this.clicks++;
        clearTimeout(this.timer);
        //double click
        this.onTouchStart();
        this.clicks = 0;
      }
    },
    goTo: function(){
      this.$router.push({path:this.url||"#"});
    },
    onTouchStart: function(){
      if(this.editMode==false){
        this.$refs.cardBody.style.transform = 'scale(0.9)';
        this.editMode = true;
      }else{
        this.$refs.cardBody.style.transform = 'scale(1)';
        this.editMode = false;
      }
    },
    deleteTracker:function(){
      this.delete();
    }
  },
  mounted(){
    // this.onTouchStart();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cross{
  position:absolute; right:10px;top:10px;
}
.tracker-card{
    display: inline-block;
    width: calc(50vw - 2*30px);
    height: calc(50vw - 2*30px);
    margin: 10px;
    background: white;
    border: 1px solid #dddddd;
    transition: all 0.3s;
}
.color-bar-left{
    height: 100%;
    width: 8%;
    float:left;
}
.tracker-card-title{
  width: 92%;
  height:100%;
  float:left;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>
