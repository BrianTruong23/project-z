// router.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue'; // Import your SignUp component
import Home from '../views/Home.vue'
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
 
  // Define other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
