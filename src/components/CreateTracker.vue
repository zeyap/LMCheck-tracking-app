<template>
  <div class="wrapper">
    <Layout v-bind:title="title" type="0">
      <b-container class="textBoxTop">
        <b-row class="justify-content-md-center">
          <b-col cols="12">
              <form>
                <input v-model="title" type="text" id="fname" name="fname" placeholder="Measurement Title">
              </form>
          </b-col>
        </b-row>
      </b-container>
    <b-container class="trackerCell indentationOneOf" v-on:click="createTracker('numeric')">
      <b-row class="justify-content-md-center indentationOneOff">
          <b-col cols="3 numericIcon"><img src="../assets/icons/numericIcon.jpg" alt="numericIcon"></b-col>
          <b-col cols="9 textDescription">Numeric Measurement</b-col>
      </b-row>
    </b-container>
      <b-container class="trackerCell" v-on:click="createTracker('timer')">
        <b-row class="justify-content-md-center">
            <b-col cols="3 timerIcon"><img src="../assets/icons/timerIcon.jpg" alt="numericIcon"></b-col>
            <b-col cols="9 textDescription">Timer</b-col>
        </b-row>
      </b-container>
      <b-container class="trackerCell" v-on:click="createTracker('todo')">
        <b-row class="justify-content-md-center">
          <b-col cols="3 toDoIcon"><img src="../assets/icons/todoIcon.jpg" alt="numericIcon"></b-col>
          <b-col cols="9 textDescription">To-do List</b-col>
        </b-row>
      </b-container>

    </Layout>
  </div>
</template>
<script>
import Layout from './Layout.vue';
import Store from '../js/Store';
import Tracker from '../js/Tracker'
export default {
  name: 'CreateTracker',
  components:{
    Layout
  },
  props: {
    
  },
  data: function(){
    return {
      title: ''
    }
  },
  methods:{
    createTracker: function(type){
      if(this.title === ''){
        // alert('Title is required');
        return;
      }
      this.$router.push({path:`/`+type});
      Store.addTracker(new Tracker(this.title,type));
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

.indentationOneOff{
  margin-top: 12%;
}
.trackerCell{
  background-color: white;
  margin-top: 4%;
  height: 87px;
  color: black;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.toDoIcon{
  height: 100%;
  background-color: #f68004;
}
.numericIcon{
  height: 100%;
  background-color: #3253fc;
}
.timerIcon{
  height: 100%;
  background-color: #f6ae00;
}
.textDescription{
  padding-top: 30px;
  text-align: center;
  font-weight: bold;
  text-align: center;
}
.textBoxTop{
  padding-top: 5%;
}
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    background-color: #f0f0f0;
    border-bottom: 2px solid silver;
}
.wrapper{
  height: 640px;
  background-color: #f0f0f0;
}
</style>
