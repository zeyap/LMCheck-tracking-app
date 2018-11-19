<template>
  <div>
    <!-- <Layout v-bind:title="title" type="0"> -->
      <b-container class="textBoxTop">
        <b-row class="justify-content-md-center">
          <b-col cols="12">
              <form>
                <input v-model="title" type="text" id="fname" name="fname" placeholder="Measurement Title">
                <div v-if="errorMessage.length>0" style="color: #aaaaaa"><i>{{errorMessage}}</i></div>
              </form>
          </b-col>
        </b-row>
      </b-container>
    <b-container class="trackerCell indentationOneOf" v-on:click="createTracker('numeric')">
      <b-row class="justify-content-md-center indentationOneOff" style="height:100%">
          <b-col cols="3 numericIcon"><v-icon name="calculator" class="icon-large"/></b-col>
          <b-col cols="9 textDescription">Numeric Measurement</b-col>
      </b-row>
    </b-container>
      <b-container class="trackerCell" v-on:click="createTracker('timer')">
        <b-row class="justify-content-md-center" style="height:100%">
            <b-col cols="3 timerIcon"><v-icon name="clock" class="icon-large"/></b-col>
            <b-col cols="9 textDescription">Timer</b-col>
        </b-row>
      </b-container>
      <b-container class="trackerCell" v-on:click="createTracker('todo')">
        <b-row class="justify-content-md-center" style="height:100%">
          <b-col cols="3 toDoIcon"><v-icon name="check-circle" class="icon-large"/></b-col>
          <b-col cols="9 textDescription">To-do List</b-col>
        </b-row>
      </b-container>

    <!-- </Layout> -->
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
      title: '',
      errorMessage: ''
    }
  },
  methods:{
    createTracker: function(type){
      if(this.title == '') {
          this.errorMessage = 'Title is required.';
      } else {
          this.title = this.title.replace(/[\s]+/g,'_');
          if(Store.getTracker(type,this.title)!==undefined){
            this.errorMessage='Title already exists for '+type+' tracker';
            return;
          }
          this.$router.push({path:`/${type}/${this.title}`});
          Store.addTracker(new Tracker(this.title,type));
      }
    }
  },
  mounted(){
    let input = document.querySelector('#fname');
    input.addEventListener('keydown',(evt)=>{
      if(evt.key==='Enter'){
        input.blur();
        //check validity of name
        if(this.title.search(/[.|\/]+/)>-1){
          this.errorMessage="Please don't include . or / in your title";
        }else{
          this.errorMessage='';
        }
      } 
    })
    
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
  /* width: 90%; */
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.icon-large{
  color: white;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) scale(3);
}
.toDoIcon{
  height: 100%;
  background-color: #aed8a4;
  border-radius: 4px;

}
.numericIcon{
  height: 100%;
  background-color: #e46983;
  border-radius: 4px;
}
.timerIcon{
  height: 100%;
  background-color: #99d9e8;
  border-radius: 4px;
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
</style>
