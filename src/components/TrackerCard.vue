<template>
<v-touch v-on:tap="tap" v-on:press="press">
<div ref="cardBody" class="tracker-card shadowed">
    <div v-if="this.type==='timer'" class="timerIcon color-bar-left"></div>
    <div v-if="this.type==='numeric'" class="numericIcon color-bar-left"></div>
    <div v-if="this.type!=='timer'&&this.type!=='numeric'" class="toDoIcon color-bar-left"></div>
    <div class="tracker-card-title">
      <slot></slot>
      <div v-show="this.editMode" class="cross" v-on:click="deleteTracker"><v-icon name="times"/></div>
    </div>
  </div>
</v-touch>
  
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
    tap:function(){
      this.$refs.cardBody.style.transform = 'scale(0.9)';
      setTimeout(()=>{
        if(this.editMode===false){
          return this.goTo();
        }
      },200)
      
    },
    press: function(){
      //double click
      this.onTouchStart();
      
    },
    goTo: function(){
      this.$router.push({path:this.url||"#"});
    },
    onTouchStart: function(){
      if(this.editMode==false){
        this.$refs.cardBody.style.transform = 'scale(0.9)';
        this.editMode = true;
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
          this.unselect();
        },2000);
      }
      
      
    },
    unselect:function(){
      this.$refs.cardBody.style.transform = 'scale(1)';
      this.editMode = false;
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
  position:absolute; 
  right:10px;
  top:10px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.tracker-card{
    display: inline-block;
    width: calc(50vw - 2*25px);
    height: calc(50vw - 2*25px);
    margin: 10px;
    background: white;
    border: 1px solid #dddddd;
    border-radius: 10px;
    transition: all 0.2s;
}
.color-bar-left{
    height: 20%;
    width: 100%;
    float:left;
}
.tracker-card-title{
  width: 92%;
  height:80%;
  float:left;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
}
</style>
