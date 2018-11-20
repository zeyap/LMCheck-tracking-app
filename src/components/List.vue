<template>
<Layout v-bind:color="this.color" v-bind:title="this.$route.params.title" type="0" v-bind:settingsList="['View List','View Chart']">
<!-- <Layout v-bind:title="title" type="0" v-bind:color="color"> -->
    <div class="below-nav-bar wrapper">
        <div v-if="showList">

            <table width="100%">
                <tr><th width="50%">Time</th> <th width="50%"></th> <th width="50%">Value</th> </tr>
                <tr v-for="(item,key) in list" v-bind:key="key"><td>{{item.date}}</td><td></td><td>{{item.value}}</td></tr>
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
import 'echarts/lib/component/tooltip'

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
        unit:'Duration (ms)',
        list:[],
        showList: true,
        color:'',

        options: {
            color: ['#99d9e8','#aed8a4','#e46983'],
            title: {
                text: ''
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: [this.unit]
            },
            grid:{
                containLabel: true
            },
            xAxis: {
                data:[1,2,3]
            },
            yAxis:{},
            series: [
            {
                name: '',
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
        this.color="#99d9e8";
        break;
        case 'todo':
        this.color="#aed8a4";
        break;
        case 'numeric':
        this.color="#e46983";
        break;
        default:
        break;
    }
    this.options.color[0] = this.color;

    let data = Store.getTracker(this.type,this.title);
    this.unit = data.unit;
    console.log(data.unit);
    if(data.type =='timer'){
        if(undefined!==data){
            //Timer
            this.options.series[0].name = 'Duration (ms)';
            for(let i=0;i<data.records.length;i++){
                if(i===0){
                    this.list[i] = {
                        date: this.formatDate(data.records[i].content),
                        value: '',
                        detail: data.records[i].detail
                    };
                }
                else {
                    this.list[i] = {
                        date: this.formatDate(data.records[i].content),
                        value: (data.records[i].detail==='pause'||data.records[i].detail==='end')&&(data.records[i-1].detail==='start'||data.records[i-1].detail==='continue')?this.duration(data.records[i-1].content,data.records[i].content):null,
                        detail: data.records[i].detail
                    };
                }
                    
            }


            if(this.showList===false){//show chart
            //filter points with a duration
                let filtered = this.list.filter((item)=>item.value!==null);
                this.options.xAxis.data = filtered.map((item)=>item.date);
                let lastValidY, lastValidX;
                this.options.series[0].data = filtered.map((item)=>{
                    return item.value;
                });
            }
        }
    }
        if(data.type == 'numeric'){
            console.log('please')
            this.options.series[0].name = '# of '+ this.unit;
            if(undefined!==data){
                //Numeric
                for(let i=0;i<data.records.length;i++){
                  const obj = {
                    date: this.formatDate(data.records[i].content),
                    value: (data.records[i].detail==='pause'||data.records[i].detail==='end')&&(data.records[i-1].detail==='start'||data.records[i-1].detail==='continue')?this.duration(data.records[i-1].content,data.records[i].content):null,
                    detail: data.records[i].detail
                };
                if(obj.detail === "pause"){
                    this.list.push(obj);
                    };
                }
                if(this.showList===false){//show chart
                //filter points with a duration
                    this.options.xAxis.data = this.list.map((item)=>item.date);
                    let lastValidY, lastValidX;
                    this.options.series[0].data = this.list.map((item)=>{
                        return item.value;
                    });
                }
                console.log(this.list);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
