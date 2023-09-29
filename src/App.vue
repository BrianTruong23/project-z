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

<body id = "app" class = ''>

  <NavBarHome  v-if="$route.path ==='/'" class = "padding-left-right"/>
  <NavBarDashboard  v-if="$route.path ==='/main'" class = "padding-left-right"/> 

  <router-view/>
  
</body>
    

</template>

<style>

.padding-left-right{
    padding:20px 30px 25px;
}


</style>


