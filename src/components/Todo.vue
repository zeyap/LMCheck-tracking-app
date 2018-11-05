<template>
  <div>
    <Layout title="" type="2" >
      <div class="below-nav-bar">
      
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
