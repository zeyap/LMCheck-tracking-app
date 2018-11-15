<template>
<Layout v-bind:title="title" type="0" v-bind:color="color">
    <div class="below-nav-bar wrapper">
        <div v-if="showList">

            <table width="100%">
                <tr><th width="50%">Date</th> <th width="50%">Duration</th></tr>
                <tr v-for="(item,key) in list" v-bind:key="key"><td>{{item.date}}</td> <td>{{item.detail}}</td></tr>
            </table>

        </div>
        <div v-if="!showList">
            <v-chart :options="options" style="width:100vw; height:75vw;"/>
        </div>
    </div>
</Layout>
</template>
<script>
import Layout from './Layout.vue';
import Store from '../js/Store.js';
import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/line'
// import 'echarts/lib/component/tooltip'

export default {
  name: 'List',
  components:{
    Layout,
    'v-chart': ECharts
  },
  props: {
    
  },
  data:function(){
    return {
        title:'',
        type:'',
        list:[],
        showList: true,
        color:'',

        options: {
            color: ['#F6AF00','#F68002','#3252FC'],
            title: {
                text: ''
            },
            legend: {
                data: ['unit']
            },
            tooltip: {
            },
            xAxis: {
                data:[1,2,3]
            },
            yAxis:{},
            series: [
            {
                name: 'line',
                type: 'line',
                data: [4,3,2]
            }
            ]
        }
    }
  },
  methods:{
    duration:function(date1, date2){
        let t1= new Date(date1);
        let t2= new Date(date2);
        let milliDuration = (t2.getMinutes()*60000+t2.getSeconds()*1000+t2.getMilliseconds())-(t1.getMinutes()*60000+t1.getSeconds()*1000+t1.getMilliseconds());
        return milliDuration/1000;
    },
    formatDate: function(date){
        let t = new Date(date);
        return t.getFullYear()+'/'+(t.getMonth()+1)+'/'+t.getDate()+' '+this.formatTime(t);
    },
    formatTime: function(date){
      if(date=='')return '';
      let t = new Date(date);
      let h = t.getHours(), m = t.getMinutes(), s=t.getSeconds();
      h = h<10?'0'+h:h;
      m = m<10?'0'+m:m;
      s = s<10?'0'+s:s;
      return h+':'+m+":"+s;
    }
  },
  mounted(){
    this.title = this.$route.params.title;
    this.type = this.$route.params.type;
    this.showList = this.$route.params.visualizeType==='list'?true:false;
    switch(this.type){
        case 'timer':
        this.color="#F6AF00";
        break;
        case 'todo':
        this.color="#F68002";
        break;
        case 'numeric':
        this.color="#3252FC";
        break;
        default:
        break;
    }
    this.options.color[0] = this.color;

    let data = Store.getTracker(this.type,this.title);
    if(undefined!==data){
        for(let i=0;i<data.records.length;i++){
            this.list[i] = {
                date: this.formatDate(data.records[i].detail),
                detail: (i===0?0:this.duration(data.records[i-1].detail,data.records[i].detail))
            };
        }

        if(this.showList===false){//show chart
            this.options.xAxis.data = this.list.map((item)=>item.date);
            this.options.series[0].data = this.list.map((item)=>item.detail);
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
