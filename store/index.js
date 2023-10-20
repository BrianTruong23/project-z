import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    projects: [],
    token: '',
    isLoggedIn: !!localStorage.getItem('token'),
    requested_project: {},
  },

  getters: {
    projects: (state) => {
      return state.projects;
    },
    requested_project: (state) =>{
      return state.requested_project;
    },
    token: (state) =>{
      if (state.isLoggedIn){
        state.token = localStorage.getItem('token');
        return state.token;
      }else{
        return state.token;
      }
    },
    isLoggedIn: (state) =>{
      return state.isLoggedIn;
    }
  },

  mutations: {
    SET_ITEMS(state, projects) {
      state.projects = projects;

    },
    SET_AUTH(state, isAuthenticated){
        state.isAuthenticated = isAuthenticated
    },
    SET_AUTH_TOKEN(state, token){
      state.token = token;
    },
    LOGIN_SUCCESS (state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    },
    SET_REQUESTED_PROJECTS(state, requested_project){
      state.requested_project = requested_project
    }
  },

  actions: {
    async loadProjects({ commit, state, getters}) {
      console.log('token in load Projects', getters.token);
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/projects/');
        commit('SET_ITEMS', response.data);
      } catch (error) {
        console.log(error);
      }
    },


    async login({ commit, state}, { email, password }) {
        try {
          // Make a login request to your authentication endpoint
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password
          });
     
          const token = response.data.token;
          // If login is successful, update isAuthenticated to true
          commit('SET_AUTH_TOKEN', token);

          commit('LOGIN_SUCCESS');

          localStorage.setItem("token", token);

          console.log('token in login', state.token);
  

          // You can also store user data like tokens or user information here
      
        } catch (error) {
          console.error(error);
        }
      },


    async register({commit}, {email, password, name, password_confirmation}){
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/register',{
                email, password, password_confirmation, name
            });
            console.log(response);

            commit('SET_AUTH', true);
        } catch(error){
            console.error(error)
        }
    },
    async logout({commit}){
      try{
          const response = await axios.post('http://127.0.0.1:8000/api/logout',{

          });
          console.log(response);

          commit('SET_AUTH', false);
          localStorage.removeItem("token");

          commit('LOGOUT');

      }catch(error){
          console.error(error)
      }
  }, 

    async delete({commit, getters}, id){
      const url = `http://127.0.0.1:8000/api/projects/${id}`;
      const token = getters.token;

      const auth_bearer = `Bearer ${token}`

      const headers = {
        'Authorization': auth_bearer
        // Other headers if needed
      };
      
      try{
        const response = await axios.delete(url, {headers});
        console.log(response);
        
      }catch(error){
        console.error(error)

      }
    },

    async createProject({getters }, { name, description, skill_required, city, state_us, zip, remote }) {
      const url = 'http://127.0.0.1:8000/api/projects/';
      const token = getters.token;
      const auth_bearer = `Bearer ${token}`;
      const auth = getters.isAuthenticated;
    
      const headers = {
        Authorization: auth_bearer, // Correct the header field name to 'Authorization'
      };

      console.log(token, "TOKEN", auth)
    
      // Define the data object with project details
      const data = {
        name,
        description,
        skill_required,
        city,
        state: state_us,
        zip,
        remote,
      }

      const payload = {
        headers
      }
    
      try {
        const response = await axios.post(url, data, {headers: headers});
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },

    async searchProject({commit, getters}, id) {

      const url = `http://127.0.0.1:8000/api/projects/show/${id}`;
    
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          commit('SET_REQUESTED_PROJECTS', response.data);

          console.log('index.js', getters.requested_project)
        } else {
          // Handle unexpected response status codes (e.g., 404, 500, etc.)
          console.error(`Unexpected response status: ${response.status}`);
          return null; // or throw an error
        }
      } catch (error) {
        // Handle network errors or other issues
        console.error('An error occurred:', error);
        return null; // or throw an error
      }
    }
    
      
  },


   

});
