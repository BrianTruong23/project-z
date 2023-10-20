// router.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue'; // Import your SignUp component
import Home from '../views/Home.vue';
import Main from '../views/Dashboard.vue';
import CreateProject from '../views/CreateProject.vue';
import Project from '../views/Project.vue'

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
  }, 
  {
    path: '/create-project',
    name: 'CreateProject',
    component: CreateProject
  },
  {
    path: '/project/:projectId',
    name: 'project',
    component: Project
  }
 
  // Define other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
