<template>
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
      <b-nav-item v-if="this.type==='2'">Save</b-nav-item>
    </b-navbar-nav>
</b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    title: String,
    type: String, //0-none, 1-settingIcon, 2-save
    settingsList: Array
  },
  data:function(){
      return {
          variant: 'info'
      }
  },
  methods:{
    goBack: function(){
        this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar{
    color: white
}
.nav-bar-body{
    height: 50px
}
.nav-bar-title{
    position:absolute; 
    left: 50%; 
    top: 50%; 
    transform: translateX(-50%) translateY(-50%);
}
</style>