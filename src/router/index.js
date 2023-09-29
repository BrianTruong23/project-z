// router.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue'; // Import your SignUp component
import Home from '../views/Home.vue';
import Main from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }
 
  // Define other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
