<script>
import './assets/base.css';

import NavBarHome from './components/NavBarHome.vue';
import NavBarDashboard from './components/NavBarDashboard.vue'

export default {
  data() {
    return {

    };
  },
  
  computed: {


  }, 
  methods: {
 
  },
  components: {
    NavBarHome,
    NavBarDashboard
  }
};

</script>


<template>

<body id = "app">

  <NavBarHome  v-if="$route.path ==='/'"/>
  <NavBarDashboard  v-if="$route.path ==='/main'"/> 

  <router-view/>
  
</body>
    

</template>

<style>




</style>


