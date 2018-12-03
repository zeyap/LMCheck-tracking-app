<template>
  <div>
    <Layout trackertype="numeric" back="/" color="#e46983" v-bind:title="this.$route.params.title" type="1" v-bind:settingsList="['View List','View Chart']">
    <div id="newNumericTracker" v-if="newNumeric">
        <b-container class="timerCell indentationOneOf">
        <b-row class="justify-content-md-center indentationOneOff">
          <b-form-input id="valueForm" type="text" v-model="myUnit" style="font-size: 1.7em; text-align: center;" placeholder="Enter your unit"></b-form-input>
        </b-row>
      </b-container>
     <b-container class="timerButton">
        <div class="indentationTwoOff"></div>
        <b-row class="justify-content-md-center">
        <b-col cols="12" class="startDescription"><button style="background-color: #99c58f;" v-on:click="getUnit()"  id="init">SAVE</button></b-col>
        </b-row>
      </b-container>
    </div>
    <div id="oldNumericTracker" v-if="!newNumeric">
        <b-container class="timerCell indentationOneOf">
          <b-row class="justify-content-md-center indentationOneOff">
          <b-form-input id="valueForm" type="number" v-model="myInput" style="font-size: 1.7em; text-align: center; border-style: none;" placeholder="Enter your value"></b-form-input>
        </b-row>
      </b-container>
      <b-container v-if="showAddedReminder">
        <div style="padding: 30px 0 0 0;">New record added</div>
      </b-container>
     <b-container class="timerButton">
        <div class="indentationTwoOff"></div>
        <b-row class="justify-content-md-center">
        <b-col cols="12" class="startDescription"><button style="background-color: #99c58f;" v-on:click="enterData()" id="init">ADD</button></b-col>
        </b-row>
      </b-container>
    </div>
    </Layout>
  </div>
</template>

<script>
import Store from '../js/Store.js';
import Layout from './Layout.vue';
import Record from '../js/Record';
import Tracker from '../js/Tracker';
export default {
  name: 'NumericMeasurement',
  props: {
    
  },
  components:{
    Layout
  },
  data: function() {
    return {
      trackers: Store.getTrackers(),
      thisTracker:[],
      newNumeric: true,
      myUnit:'',
      myInput:'',
      message:'',
      eachInput:[],
      timeAdded:'',
      showAddedReminder: false
    }
  },
  methods:{
    getTracker(tracker){
        return tracker.title === this.$route.params.title;
    },
    getUnit(){
      this.newNumeric = false;
      //console.log(thisTracker);
      Store.deleteTracker('numeric',this.$route.params.title);
      Store.addTracker(new Tracker(this.$route.params.title,'numeric',this.myUnit));
      console.log(Store.getTracker('numeric',this.$route.params.title));
      console.log(Store.getTracker('numeric',this.$route.params.title).unit)
      console.log("hello");
    },
    enterData(){
      this.timeAdded = new Date();
      this.eachInput.push(new Record(this.timeAdded,this.myInput)); //need timestamp
      this.myInput = '';
      this.showAddedReminder=true;
      setTimeout(()=>{
        this.showAddedReminder=false;
      },1500)
      
    }
  },
  mounted: function(){
     this.message = "Enter # of " + Store.getTracker('numeric',this.$route.params.title).unit
     if(Store.getTracker('numeric',this.$route.params.title).unit !== undefined){
       this.newNumeric =false;
       console.log("babe")
     }else{
       this.newNumeric = true;
       console.log("nobabe")
     }
    console.log(this.message);
    let title=this.$route.params.title;
    this.updateNumTracker =()=>{
      Store.updateNumTracker('numeric',title,this.eachInput);
    }
  },
    beforeDestroy:function(){
      this.updateNumTracker();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.indentationOneOff{
  margin-top: 12%;
}

.indentationTwoOff{
  margin-top: 20%;
}

.valueCell{
  background-color: white;
  margin-top: 25%;
  height: 165px;
  color: black;
  width: 100%;
  border-radius: 5px;
}
#valueForm{
  background-color: white;
  margin-top: 25%;
  height: 165px;
  color: black;
  width: 90%;
  border-radius: 5px;
}

.saveContainer{
    padding-top: 30px;
}
#saveButton{
    width: 100%;
    background-color:#99c58f;
    height:70px;
    font-size: 44px;
    text-align: center;
}
.valueContainer{
    background-color:white;
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
  background-color: #99c58f;
  border:none;
  color: white;
}
</style>
