<template>
  <div>
    <div class="floating-button" v-on:click="createTracker"><v-icon name="plus" class="center-and-large"/></div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    
  },
  data: function(){
    return {
      
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
<style scoped>
.floating-button{
  width: 65px;
  height: 65px;
  background: #3daeca;
  border-radius: 50%;

  position: absolute;
  right: 20px;
  bottom: 20px;

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
