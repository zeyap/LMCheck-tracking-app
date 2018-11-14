<template>
<Layout v-bind:title="title" type="0">
    <div class="below-nav-bar wrapper">
    <table width="100%">
    <tr><th width="50%">Date</th> <th width="50%">Duration</th></tr>
    <tr v-for="(item,key) in list" v-bind:key="key"><td>{{item.date}}</td> <td>{{item.detail}}</td></tr>
        </table>
    </div>
</Layout>
</template>
<script>
import Layout from './Layout.vue';
import Store from '../js/Store.js';
export default {
  name: 'List',
  components:{
    Layout
  },
  props: {
    
  },
  data:function(){
    return {
        title:'',
        type:'',
        list:[]
    }
  },
  methods:{
    duration:function(date1, date2){
        let t1= new Date(date1).getMilliseconds();
        let t2= new Date(date2).getMilliseconds();
        return t2-t1;
    },
    formatDate: function(date){
        let t = new Date(date);
        return t.getFullYear()+'/'+(t.getMonth()+1)+'/'+t.getDate();
    }
  },
  mounted(){
    this.title = this.$route.params.title;
    this.type = this.$route.params.type;
    let data = Store.getTracker(this.type,this.title);
    if(undefined!==data){
        for(let i=0;i<data.records.length;i++){
            this.list[i] = {
                date: this.formatDate(data.records[i].timestamp),
                detail: (i===0?this.duration(0,data.records[i].timestamp)
                :this.duration(data.records[i-1].timestamp,data.records[i].timestamp))+' ms'
            };
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
