<template>
<v-touch style="height:100vh" v-on:swipedown="createTodo" v-on:swipeup="closeCreateTodo">
  <div id='todo'>
    <Layout v-bind:back="'/'" v-bind:title="this.$route.params.title" type="3" v-bind:textOnRight="this.editMode?'done':'edit'" v-bind:onClickRightButton="edit">
      <div class="below-nav-bar wrapper">
        <div v-show="creatingNew"><div style="width: 1.5em; height:1.5em; display: inline-block;"/>
        <textarea rows="1" min-rows="1" class="bottom-border-input todo-item-container newTodoTextarea" placeholder="What's next?" v-model="newItem"/>
        </div>
        <div v-show="todos.length===0 && !creatingNew" style="color:grey">Swipe down to add an item</div>
        
        <div v-for="(todo,id) in todos" v-bind:key="id">
          <div style="width:100%; display:flex; flex-flow: row nowrap; justify-content: start; align-items:start;" >
            <input class="circular-checkbox" v-bind:checked="selected[id]" type="checkbox" v-on:change="check(id)"/>
            <div style="width: 0.3em; height:0.3em; "/>
            
            <div v-on:click="check(id)" class="todo-item-container" v-bind:class="{done: selected[id]}" v-show="selected[id]||(!selected[id]&&!editMode)">{{todo.content}}</div>
           <v-touch v-on:swipeleft="deleteItem(id)" v-show="!selected[id]&&editMode" style="width:100%">
            <input class="bottom-border-input todo-item-container todoTextarea" v-model="todo.content"/>
            </v-touch>
          </div>
          <div style="width: 100%; height:0.3em; "/>
        </div>
      </div>
    </Layout>
  </div>
  </v-touch>
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

    let todoWindow = document.querySelector('#todo');
      todoWindow.addEventListener('keydown',function(evt){
        if(evt.key==='Enter'){
          let input = document.querySelectorAll('.todoTextarea');
          input.forEach((item)=>{item.blur()})
        } 
      })
  

    let newTodo = document.querySelector('.newTodoTextarea');
    // console.log(newTodo)
    newTodo.addEventListener('keydown',(evt)=>{
      if(evt.key==='Enter'){
        newTodo.blur();
        this.finishCreateTodo();
      } 
    })
    
  },
  beforeDestroy:function(){
    this.updateTracker();
  },
  computed:{
    
  },
  methods:{
    check: function(id){
      let selected = [...this.selected];
      selected[id] = selected[id]===true?false:true;
      this.selected = selected;
      //vue issue: cannot detect change in v-bind variables of reference type
    },
    deleteItem:function(id){
      this.todos.splice(id,1);
      this.selected.splice(id,1);
    },
    edit: function(){
      this.editMode=!this.editMode;
    },
    createTodo: function(){
      this.editMode = false;
      this.creatingNew = true;
    },
    closeCreateTodo: function(){
      this.editMode = false;
      this.creatingNew = false;
    },
    finishCreateTodo: function(){
      if(this.newItem==='')return;
      // this.creatingNew = false;
      this.todos.unshift(new Record(new Date(),this.newItem, false));
      this.selected.unshift(false);
      this.newItem = '';
    },
    autoSize:function(){
      let el = this;
      let baseScrollHeight = el.scrollHeight;
      console.log(el.rows,el.scrollHeight)

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
  color: white;
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

textarea {
  /* border: none; */
  resize: none;
}
</style>
