<template>
  <div>
    <Layout color="#F6AF00" v-bind:title="this.$route.params.title" type="1" v-bind:settingsList="['View List','View Chart']">
    
      <b-container class="timerCell indentationOneOf">
        <b-row class="justify-content-md-center indentationOneOff">
          <b-col cols="12 timerDescription"><h1><time>00:00:00</time></h1></b-col>
          <b-col cols ="12 dateDescription indentationOneOff"><p>Last Start Time{{formatTime(this.startTime)}}</p></b-col>
          <b-col cols ="12 dateDescription"><p>Last End Time{{formatTime(this.endTime)}}</p></b-col>
        </b-row>
      </b-container>
      <b-container class="timerButton">
        <div class="indentationTwoOff"></div>
        <b-row class="justify-content-md-center">
        <b-col v-show="!started" cols="12 " class="startDescription"><button v-on:click="this.startTimer" id="init">START</button></b-col>
        <b-col v-show="started && isPaused" cols="12" class="startDescription"><button id="resume">CONTINUE</button></b-col>
        <b-col v-show="started && !isPaused" cols="12" class="startDescription"><button  id="pause">PAUSE</button></b-col>
        <b-col v-show="started" cols="12" id="finish" class="finishDescription"><button >FINISH</button></b-col>
        </b-row>
      </b-container>
      </Layout>
  </div>
</template>
<script>
import Layout from './Layout.vue';
import Store from '../js/Store';
import Record from '../js/Record';
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
      started:false,
      endRecords:[],
      isPaused: false
    }
  },
  mounted(){
    let title = this.$route.params.title;
    let history = Store.getTracker('timer',title).records;
    if(history.length>1){
      this.endRecords = history;
      for(let i=this.endRecords.length-1;i>=0;i--){
        if(this.endRecords[i].detail==='end'){
          this.endTime = this.endRecords[i].content;
        }
        if(this.endRecords[i].detail==='start'){
          this.startTime = this.endRecords[i].content;
          break;
        }
      }
      
    }
    this.updateTracker =function(){
      if(this.endRecords.length===0)return;
      if(this.endRecords[this.endRecords.length-1].detail!=='end'){
        this.end();
      }
      Store.updateTracker('timer',title,'record',this.endRecords);
    };
  },
  beforeDestroy:function(){
    this.updateTracker();
  },
  methods:{
    formatTime: function(date){
      if(date=='')return '';
      let t = new Date(date);
      let h = t.getHours(), m = t.getMinutes(), s=t.getSeconds();
      h = h<10?'0'+h:h;
      m = m<10?'0'+m:m;
      s = s<10?'0'+s:s;
      return h+':'+m+":"+s;
    },
    startTimer: function(){
      //a new timer with no history
      this.started = true;
      this.isPaused = false;
      // if(this.startTime===''){
        this.startTime = new Date();
        this.endRecords.push(new Record(this.startTime,this.startTime,'start'));
      // }
      
      var p = document.getElementsByTagName('p')[0];
      var h1 = document.getElementsByTagName('h1')[0],
      resume = document.getElementById('resume'),
      stop = document.getElementById('stop'),
      clear = document.getElementById('cnpm lear'),
      seconds = 0, minutes = 0, hours = 0,
      t;
      check();
      function check(){
        
      }
      var add = ()=>{
          seconds++;
          if (seconds >= 60) {
              seconds = 0;
              minutes++;
              if (minutes >= 60) {
                  minutes = 0;
                  hours++;
              }
          }
          // p.textContent = this.startTime;
          h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
          timer();
      }
      var end = ()=>{
          this.endTime = new Date();
          this.endRecords.push(new Record(this.startTime,this.endTime,'end'));
          // console.log(this.endRecords)
      }
      var timer = ()=> {
        t = setTimeout(add, 1000);
        this.isPaused=false;

      }
    timer();

      resume.onclick = ()=>{
        timer();
        this.endRecords.push(new Record(this.startTime,new Date(),'continue'));
      }
      pause.onclick = ()=>{
          clearTimeout(t);
          this.isPaused = true;
          this.endRecords.push(new Record(this.startTime,new Date(),'pause'));
      }
      finish.onclick = ()=> {
        this.isPaused = false;
        this.started = false;
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
  background-color: #8ec921;
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
  background-color: #8ec921;
  border:none;
}
</style>
