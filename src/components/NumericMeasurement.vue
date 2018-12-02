<template>
  <div>
    <Layout color="#3252FC" v-bind:title="this.$route.params.title" type="1" v-bind:settingsList="['View List','View Chart']">
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
<<<<<<< HEAD
        <b-container class="inputContainer indentationOneOf">
            <b-row align-v="center" class="valueCell">
                <b-form-input id="inputForm" size="lg"  type="number" v-model="myInput" placeholder=message></b-form-input>
            </b-row>
        </b-container>
        <b-container class="enterContainer indentationOneOf">
            <b-row align-v="center">
                <b-button id="saveButton" v-on:click="createTracker('numeric')">Add</b-button>
            </b-row>
        </b-container>
=======
        <b-container class="timerCell indentationOneOf">
          <b-row class="justify-content-md-center indentationOneOff">
          <b-form-input id="valueForm" type="number" v-model="myInput" style="font-size: 1.7em; text-align: center; border-style: none;" placeholder="Enter your value"></b-form-input>
        </b-row>
      </b-container>
     <b-container class="timerButton">
        <div class="indentationTwoOff"></div>
        <b-row class="justify-content-md-center">
        <b-col cols="12" class="startDescription"><button style="background-color: #99c58f;" v-on:click="enterData()" id="init">SAVE</button></b-col>
        </b-row>
      </b-container>
>>>>>>> ad178942b2dfde6d7f68b2e57ddbc0492aaebd04
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
      myInput:0,
      message:''
    }
  },
  methods:{
    getTracker(tracker){
        return tracker.title === this.$route.params.title;
    },
    getUnit(){
      this.message = "Enter # of" + this.myUnit;
      this.newNumeric = false;
      //console.log(thisTracker);
      Store.deleteTracker('numeric',this.$route.params.title);
      Store.addTracker(new Tracker(this.$route.params.title,'numeric',this.myUnit));
      console.log(Store.getTracker('numeric',this.$route.params.title));
      console.log(Store.getTracker('numeric',this.$route.params.title).unit)
      console.log("hello");
    }
  },
  mounted: function(){
     if(Store.getTracker('numeric',this.$route.params.title).unit !== undefined){
       this.newNumeric =false;
       console.log("babe")
     }else{
       this.newNumeric = true;
       console.log("nobabe")
     }
    console.log(Store.getTracker('numeric',this.$route.params.title).unit)
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
  margin-left: unset;
  margin-right: unset;
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
<<<<<<< HEAD

.timerDescription{
  padding-top: 60px;
  font-size: 4em;
}
=======
>>>>>>> ad178942b2dfde6d7f68b2e57ddbc0492aaebd04
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
