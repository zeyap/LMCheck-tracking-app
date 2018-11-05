<template>
  <div>
    <Layout title="App Name" type="2" v-bind:settingsList="['Add Record','View List','View Chart']"/>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
