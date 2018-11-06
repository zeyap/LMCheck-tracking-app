<template>
  <div>
    <Layout v-bind:title="this.$route.params.title" type="3" v-bind:textOnRight="this.editMode?'done':'edit'" v-bind:onClickRightButton="edit">
      <div class="below-nav-bar wrapper">
        <div v-for="(todo,id) in todos" v-bind:key="id">
          <input v-bind:checked="selected[id]" type="checkbox" v-on:change="check(id)"/>
          {{todo.text}}
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from './Layout.vue';
export default {
  name: 'CreateTracker',
  components:{
    Layout
  },
  props: {
    msg: String
  },
  data () {
    return {
      selected: [], // Must be an array reference!
      todos: [
        {text: 'Orange', value: 'orange'},
        {text: 'Apple', value: 'apple'},
        {text: 'Pineapple', value: 'pineapple'},
        {text: 'Grape', value: 'grape'}
      ],
      editMode: false
    }
  },
  methods:{
    check: function(id){
      this.selected[id] = this.selected[id]===true?false:true;
    },
    edit: function(){
      this.editMode=!this.editMode;
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
</style>
