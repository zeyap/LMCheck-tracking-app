<template>
  <div>
    <Layout color="#3252FC" v-bind:title="this.$route.params.title" type="1" v-bind:settingsList="['Add Record','View List','View Chart']">
      <b-container class="valueContainer indentationOneOf">
        <b-row align-v="center" class="valueCell">
            <b-form-input id="valueForm" size="lg" v-model="text" type="text" placeholder="Enter your unit"></b-form-input>
        </b-row>
      </b-container>
        <b-container class="saveContainer indentationOneOf">
            <b-row align-v="center">
                <b-button id="saveButton">SAVE</b-button>
            </b-row>
        </b-container>
      </Layout>
  </div>
</template>

<script>
import Store from '../js/Store.js';
import Layout from './Layout.vue';
import Record from '../js/Record';
export default {
  name: 'NumericMeasurement',
  props: {
    
  },
  components:{
    Layout
  },
  data: function() {
    return {
      trackers: Store.getTrackers()
    }
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
    background-color:white;
    border-bottom: none;
    text-align: center;
    margin-left: auto;
    margin-right:auto;
    height: 165px;
    font-size: 44px;
    font-weight: bold;
    color:black;
}

.saveContainer{
    padding-top: 30px;
   
}

#saveButton{
    width: 100%;
    background-color: #01a76b;
    height:70px;
    font-size: 44px;
    text-align: center;
}
.valueContainer{
    background-color:white;
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
