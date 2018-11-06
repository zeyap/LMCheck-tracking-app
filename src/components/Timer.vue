<template>
  <div>
    <Layout v-bind:title="this.$route.params.title" type="2" v-bind:settingsList="['Add Record','View List','View Chart']">
    </Layout>
      <b-container class="timerCell indentationOneOf">
        <b-row class="justify-content-md-center indentationOneOff">
          <b-col cols="12 timerDescription">{{this.startTime}}</b-col>
        </b-row>
      </b-container>
      <b-container class="timerButton">
        <div class="indentationTwoOff"></div>
        <b-row class="justify-content-md-center">
        <b-col cols="12 startDescription"><button v-on:click="startTimer">START</button></b-col>
        <b-col cols="12 finishDescription"><button>FINISH</button></b-col>
        </b-row>
      </b-container>
  </div>
</template>
<script>
import Layout from './Layout.vue';
import Store from '../js/Store';
import Tracker from '../js/Tracker'
export default {
  name: 'Timer',
  components:{
    Layout
  },
  props: {
  }, 
  data: function() {
    return {
      startTime: ''
    }
  },
    methods:{
    startTimer: function(){
      this.startTime = "10:00";
      console.log(startTime);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.indentationOneOff{
  margin-top: 12%;
}

.indentationTwoOff{
  margin-top: 20%;
}

.timerCell{
  background-color: white;
  margin-top: 25%;
  height: 165px;
  color: black;
  width: 90%;
  border-radius: 5px;
}
.timerDescription{
  padding-top: 35px;
  font-size: 4em;
}
.buttonDescription{
  padding-top: 30px;
  font-size: 2.3em;
  font-weight: bold;
}
.timerButton button{
  margin-top: 20%;
  width: 100%;
  border-radius: 5px;
  background-color: #01a76b;
  color: white;
}
.wrapper{
  height: 640px;
  background-color: #f0f0f0;

}
.finishDescription button{
  padding: 15px 15px;
  width: 97%;
  margin-top: 9%;
  border-radius: 7px;
  font-size: 2.3em;
  color: white;
  font-weight: bold;
  background-color: grey;
}
.startDescription button{
  border-radius: 7px;
  padding: 15px 15px;
  width: 97%;
  margin-top: 12%;
  color: white;
  font-size: 2.3em;
  font-weight: bold;
  background-color: #01a76b;
}
</style>
