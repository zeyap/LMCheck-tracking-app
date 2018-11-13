<template>
  <Layout v-bind:back="'/'" title="404" type="0">
    This page is not found
  </Layout>
</template>

<script>
import Layout from './Layout.vue'
import Store from '../js/Store.js'
export default {
  name: 'NonExist',
  props: {
    
  },
  components:{
    Layout,
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
