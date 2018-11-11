<template>
  <div>
    <Layout v-bind:title="this.$route.params.title" type="3" v-bind:textOnRight="this.editMode?'done':'edit'" v-bind:onClickRightButton="edit">
      <div class="below-nav-bar wrapper">
        <div v-if="creatingNew"><div style="width: 1.5em; height:1.5em; display: inline-block;"/>
        <textarea rows="1" min-rows="1" class="bottom-border-input todo-item-container" placeholder="" v-model="newItem"/>
        </div>
        <div v-for="(todo,id) in todos" v-bind:key="id">
          <div style="width:100%; display:flex; flex-flow: row nowrap; justify-content: start; align-items:start;" >
            <input class="circular-checkbox" v-bind:checked="selected[id]" type="checkbox" v-on:change="check(id)"/>
            <div style="width: 0.3em; height:0.3em; "/>
            <div class="todo-item-container" v-bind:class="{done: selected[id]}" v-if="!ifShowItemInput(id)">{{todo.content}}</div>
            <!-- <span v-if="" class="done" >{{todo.content}}</span> -->
            <textarea rows="2" min-rows="2" class="bottom-border-input todo-item-container" v-if="ifShowItemInput(id)" v-model="todo.content"/>
          </div>
          <div style="width: 100%; height:0.3em; "/>
        </div>
      </div>
      <div class="floating-button shadowed" v-on:click="createTodo"><v-icon name="plus" class="center-and-large"/></div>
    </Layout>
  </div>
</template>

<script>
import Layout from './Layout.vue';
import Store from '../js/Store.js'
import Record from '../js/Record.js'
export default {
  name: 'CreateTracker',
  components:{
    Layout,
    
  },
  props: {
    
  },
  data () {
    return {
      selected: [], // Must be an array reference!
      todos: [],
      editMode: false,
      creatingNew: false,
      newItem:''
    }
  },
  mounted:function(){
    let title = this.$route.params.title;
    let data = Store.getTracker('todo',title);
    if(data!==undefined){
      this.todos = data.records;
      for(let i=0;i<this.todos.length;i++){
        this.selected[i] = this.todos[i].detail===true?true:false;
      }
    }
    this.updateTracker =function(){
      Store.updateTracker('todo',title,this.selected);
    };
  },
  beforeDestroy:function(){
    this.updateTracker();
  },
  computed:{
    ifShowItemInput:function(id){
      return function(){
        if(this.selected[id]||(!this.selected[id]&&!this.editMode))return false;
        return true;
      }
    }
  },
  methods:{
    check: function(id){
      let selected = [...this.selected];
      selected[id] = selected[id]===true?false:true;
      this.selected = selected;
      //vue issue: cannot detect change in v-bind variables of reference type
    },
    edit: function(){
      this.editMode=!this.editMode;
    },
    createTodo: function(){
      this.editMode = false;
      if(this.creatingNew===true){
        this.finishCreateTodo();
      }
      this.creatingNew = !this.creatingNew;
    },
    finishCreateTodo: function(){
      if(this.newItem==='')return;
      this.creatingNew = false;
      this.todos.unshift(new Record(new Date(),this.newItem, false));
      this.selected.unshift(false);
      this.newItem = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.below-nav-bar{
  padding: 20px;
  text-align: left;
}

.bottom-border-input::before{
  content: " ";
}
.done{
  text-decoration: line-through;
}
.circular-checkbox{
  appearance: none;
  -webkit-appearance: none;
	background-color: white;
	border: 2px solid #ffd519;
  width: 1.2em;
  height: 1.2em;
	padding: 0;
	border-radius: 50%;
	display: inline-block;
	position: relative;
}
/* .circular-checkbox:active, .circular-checkbox:checked:active {
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
} */

.circular-checkbox:checked {
	background-color: #ffb619;
	border: 2px solid #ffb619;
	color: white;
  /* box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1); */
}
.circular-checkbox:checked:before{
  content: '\2714' ;
  display: block; 
  position: absolute ; 
  top: 50% ; 
  left: 50% ; 
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50% ; 
  /* border: 1px solid white;  */
}

.bottom-border-input{
  border:none;
  border-bottom: 1px solid #ffb619;
}
.todo-item-container{
  width: calc(100% - 40px);
  word-wrap: break-word;
  word-break: break-all;
  height: auto;
  display: inline-block;
  /* float:left; */
}
</style>
