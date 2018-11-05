<template>
  <div class="tracker-card shadowed" v-on:click="goTo">
    <div ref="colorBar" class="color-bar-left"></div>
    <div class="tracker-card-title">
    <slot ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackerCard',
  components:{
    
  },
  props: {
    color: String,
    url: String
  },
  mounted: function(){
      this.$refs.colorBar.style.background=this.color||'#ff985c';
  },
  methods:{
    goTo: function(){
      this.$router.push({path:this.url||"#"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tracker-card{
    display: inline-block;
    width: calc(50vw - 2*30px);
    height: calc(50vw - 2*30px);
    margin: 10px;
    background: white;
    border: 1px solid #dddddd;
}
.color-bar-left{
    background: #ff985c;
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
}
</style>
