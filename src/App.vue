<script>
import './assets/base.css';
import NavBarHome from './components/NavBarHome.vue';
import NavBarDashboard from './components/NavBarDashboard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {

    };
  },
  components: {
    NavBarHome,
    NavBarDashboard
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods:{
    ...mapActions(['login','logout'])
  },
};

</script>


<template>

<body id = "app" class = ''>
 
  <!-- <div v-for="project in projects" :key="project.id">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
  </div> -->

  <NavBarHome  v-if="$route.path ==='/'" class = "padding-left-right"/>
  <!-- <NavBarDashboard  v-if="$route.path ==='/main' & isAuthenticated" class = "padding-left-right"/>  -->
  <NavBarDashboard  v-if="$route.path ==='/main' " class = "padding-left-right"/> 

  <router-view/>
  
</body>
    

</template>

<style>

.padding-left-right{
    padding:20px 30px 25px;
}


</style>


