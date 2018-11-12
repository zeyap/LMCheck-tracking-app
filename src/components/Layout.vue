<template>
<div>
  <div class="nav-bar">
 <b-navbar class="nav-bar-body" toggleable="md" type="dark" v-bind:variant="this.variant">
    <b-navbar-nav>
      <b-nav-item v-on:click="goBack"><v-icon name="angle-left"/></b-nav-item>
    </b-navbar-nav>
    <b-navbar-brand class="nav-bar-title">{{this.title}}</b-navbar-brand>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-dropdown  v-if="this.type==='1'" no-caret right variant="link" size="lg">
        <template slot="button-content">
            <span style="color:#f8f9fa" ><v-icon name="ellipsis-v"/></span>
        </template>
        <b-dropdown-item v-for="(item,id) in this.settingsList" v-bind:key="'setting'+id" href="#">{{item}}</b-dropdown-item>
      </b-dropdown>
      <b-nav-item v-if="this.type==='2'" v-on:click="onClickRightButtonDefault">Save</b-nav-item>
      <b-nav-item v-if="this.type==='3'" v-on:click="onClickRightButtonDefault">{{textOnRight}}</b-nav-item>
    </b-navbar-nav>
</b-navbar>
  </div>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    title: String,
    type: String, //0-none, 1-settingIcon, 2-save, 3-other text
    settingsList: Array,
    textOnRight: String,
    onClickRightButton: Function,
    back: String
  },
  data:function(){
      return {
          variant: 'dark'
      }
  },
  methods:{
    goBack: function(){
      if(this.back!==undefined){
        this.$router.push({path:this.back});
      }else{
        this.$router.go(-1);
      }
      
    },
    onClickRightButtonDefault: function(){
      if(this.onClickRightButton===undefined){
        console.log('nothing happens')
      }else{
        this.onClickRightButton();
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav-bar{
    color: #8B2A6C;
}
.nav-bar-body{
    height: 40px
}
.nav-bar-title{
    position:absolute; 
    left: 50%; 
    top: 50%; 
    transform: translateX(-50%) translateY(-50%);
}
</style>