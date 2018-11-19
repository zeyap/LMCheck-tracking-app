<template>
<v-touch class="wrapper">
  <div class="nav-bar shadowed">
 <b-navbar class="nav-bar-body" toggleable="md" type="dark" v-bind:variant="this.variant">
   <div class="color-changeable-header" v-bind:style="this.color?('background:'+this.color):''"></div>
    <b-navbar-nav style="z-index:1">
      <b-nav-item v-on:click="goBack"><v-icon v-show="this.leftText===undefined" name="angle-left"/>{{this.leftText||''}}</b-nav-item>
    </b-navbar-nav>
    <b-navbar-brand class="nav-bar-title">{{showTitle(this.title)}}</b-navbar-brand>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto" style="z-index:1">
      <b-dropdown  v-if="this.type==='1'" no-caret right variant="link" size="lg">
        <template slot="button-content">
            <span style="color:#f8f9fa" ><v-icon name="ellipsis-v"/></span>
        </template>
        <b-dropdown-item v-for="(item,id) in this.settingsList" v-on:click="go(item)" v-bind:key="'setting'+id" href="#">{{item}}</b-dropdown-item>
      </b-dropdown>
      <b-nav-item v-if="this.type==='2'" v-on:click="onClickRightButtonDefault">Save</b-nav-item>
      <b-nav-item v-if="this.type==='3'" v-on:click="onClickRightButtonDefault">{{textOnRight}}</b-nav-item>
    </b-navbar-nav>
</b-navbar>
  </div>
  <slot></slot>
</v-touch>
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
    back: String,
    leftText: String,
    color: String
  },
  data:function(){
      return {
          variant: ''
      }
  },
  methods:{
    showTitle: function(title){
      return title.replace(/[_]+/g,' ');
    },
    goBack: function(){
      if(this.back!==undefined){
        this.$router.push({path:this.back});
      }else{
        this.$router.go(-1);
        // if (this.$route.path== this.ro)
        // this.$router.push({path:`/`});
      }
    },
    go:function(item){
      if(item.indexOf('List')>-1){
        this.$router.push({path:this.$route.path+'/list'});
      }else if(item.indexOf('Chart')>-1){
        this.$router.push({path:this.$route.path+'/chart'});
      }
    },
    onClickRightButtonDefault: function(){
      if(this.onClickRightButton===undefined){
        console.log('nothing happens')
      }else{
        this.onClickRightButton();
      }
    }
  },
  mounted(){
    this.body = document.querySelector('.wrapper');
    let left = 100;
    let step = 10;
    let swipeLeft = ()=>{
      left-=step;
      this.body.style.transform= 'translateX('+(left)+'%)';
      if(left>0){
        setTimeout(swipeLeft,10)
      }
    }
    swipeLeft();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav-bar{
    /* background-color: #009AD8; */
}
.nav-bar-body{
    height: 90px
}
.nav-bar-title{
  width: calc(100% - 110px);
  overflow:hidden;
  text-overflow:ellipsis;
  position:absolute;
  left: 50%; 
  top: 50%; 
  transform: translateX(-50%) translateY(-50%);
}
.navbar-brand.nav-bar-title {
    font-size: 32px;
    font-weight: 600;
}

.trackerCell.container{
  width:90%;
}

.wrapper{
  /* display: block; */
  /* height: 100vh; */
}

.color-changeable-header{
  position:absolute;
  top:0;
  left:0;
  background:#009AD8; 
  width:100%; 
  height:100%; 
  z-index:0;
}

</style>