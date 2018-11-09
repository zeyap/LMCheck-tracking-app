<template>
  <div>
    <Layout v-bind:title="this.$route.params.title" type="2" v-bind:settingsList="['Add Record','View List','View Chart']">
    </Layout>
      <b-container class="timerCell indentationOneOf">
        <b-row class="justify-content-md-center indentationOneOff">
          <b-col cols="12 timerDescription"><h1><time>00:00:00</time></h1></b-col>
          <b-col cols ="12 dateDescription indentationOneOff"><p>{{this.startTime}}</p></b-col>
          <b-col cols ="12 dateDescription"><p>{{this.endTime}}</p></b-col>
        </b-row>
      </b-container>
      <b-container class="timerButton">
        <div class="indentationTwoOff"></div>
        <b-row class="justify-content-md-center">
        <b-col cols="12 startDescription"><button v-on:click="startTimer" id="init" style="display:true;">START</button></b-col>
        <b-col cols="12 startDescription"><button id="start" style="display:none;">CONTINUE</button></b-col>
        <b-col cols="12 startDescription"><button id="pause" style="display:none;">PAUSE</button></b-col>
        <b-col cols="12 finishDescription" id="finish" style="display:none;"><button >FINISH</button></b-col>
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
      startTime: '',
      endTime: '',
      started: ''
    }
  },
  methods:{
    startTimer: function(){
      var started = true;
      var startTime = new Date().toString().slice(0,-23);
      var p = document.getElementsByTagName('p')[0];
      var h1 = document.getElementsByTagName('h1')[0],
      start = document.getElementById('start'),
      stop = document.getElementById('stop'),
      clear = document.getElementById('cnpm lear'),
      seconds = 0, minutes = 0, hours = 0,
      t;
      check();
      function check(){
        if (started = "true"){
          init.style.display = 'none';
          pause.style.display = 'unset';
          start.style.display = 'unset';
          finish.style.display = 'unset';
        } 
      }
      function add(){
          seconds++;
          if (seconds >= 60) {
              seconds = 0;
              minutes++;
              if (minutes >= 60) {
                  minutes = 0;
                  hours++;
              }
          }
          p.textContent = startTime;
          h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
          timer();
      }
      function end(){
          var endTime = new Date().toString().slice(0,-23);
          var p2 = document.getElementsByTagName('p')[1];
          p2.textContent = endTime;
          console.log(end);
      }
      function timer() {
        t = setTimeout(add, 1000);
      }
    timer();
      start.onclick = timer;
      pause.onclick = function() {
          clearTimeout(t);
      }
      finish.onclick = function() {
          clearTimeout(t);
          end();
          h1.textContent = "00:00:00";
          seconds = 0; minutes = 0; hours = 0;
      }
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
  padding-top: 60px;
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
.dateDescription{
  font-size: 0.8em;
  color: grey;
  padding-top: 7%;
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
