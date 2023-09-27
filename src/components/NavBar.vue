<script>
import '../assets/base.css';

export default {
  methods: {
    directSignUp() {
      console.log('Tjang');
      this.$router.push({ name: 'SignUp' });
    },
  },
};

</script>


<template>
    

    
<nav class="navbar navbar-expand-lg navbar-light justify-content-between">
  <a class="navbar-brand" href="#"><h2>Project Z</h2></a>

  <div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
 
      <li class="nav-item active">

        <router-link :to="{name: 'SignUp'}">Log In</router-link>

        <button type="button" class="btn auth-button auth-button-log p-3 " >   </button>
      </li>
      <li class="nav-item">
        <button type="button" class="btn  auth-button auth-button-sign p-3" @click = "directSignUp()">Sign Up</button>
      </li>
    </ul>
  </div>
  </div>

  <router-view/>

</nav>
</template>

<style>



.navbar{
    padding: 20px 25px 30px;
}

.auth-button{
  padding: 5px 10px 5px;
  border-radius: 5px;
  background-color: transparent; 
  border: none; 
  cursor: pointer;
  text-decoration: none;

  
}

.auth-button-log{
  background: var(--dark-blue);
  color: white;
}

.auth-button-log:hover{
  background-color: var(--light-blue);
  color: white;
  text-decoration: none;


}
.auth-button-sign{
    color: black;

}

.auth-button-sign:hover{
    background-color: var(--light-blue) ;
    color: white;
    text-decoration: none;
}


@media screen and (max-width: 990px) {

    .auth-button{
        margin-top: 20px;
    }

    .auth-button-sign{
        border: 1px solid black; 
        color: black;
    }

}


</style>


