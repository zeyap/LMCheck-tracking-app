<template>
  <div class="wrapper">
    <Layout title="App Name" type="2" v-bind:settingsList="['Add Record','View List','View Chart']">
    </Layout>
      <b-container class="timerCell indentationOneOf">
        <b-row class="justify-content-md-center indentationOneOff">
          <b-col cols="12 timerDescription">0:00</b-col>
        </b-row>
      </b-container>
      <b-container class="timerButton">
        <b-row class="justify-content-md-center">
        <b-col cols="12 buttonDescription"><button>START</button></b-col>
        </b-row>
      </b-container>
  </div>
</template>
<script>
import Layout from './Layout.vue';
export default {
  name: 'Timer',
  components:{
    Layout
  },
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indentationOneOff{
  margin-top: 12%;
},
.timerCell{
  background-color: white;
  margin-top: 4%;
  height: 155px;
  color: black;
  width: 90%;
  border-radius: 5px;
},
.timerDescription{
  padding-top: 30px;
  font-size: 4em;
},
.buttonDescription{
  padding-top: 30px;
  font-size: 2.5em;
  font-weight: bold;
},
.timerButton button{
  margin-top: 20%;
  width: 100%;
  border-radius: 5px;
  background-color: #01a76b;
  color: white;
},
.wrapper{
  height: 640px;
  background-color: #f0f0f0;
}
</style>
