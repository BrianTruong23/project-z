<script>
import '../assets/base.css'
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
        <button type="button" class="btn auth-button auth-button-log ">Log In</button>
      </li>
      <li class="nav-item">
        <button type="button" class="btn auth-button auth-button-sign">Sign Up</button>
      </li>
    </ul>
  </div>
  </div>

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
  
}

.auth-button-log{
  color: white;
  background: var(--dark-blue);
}

.auth-button-log:hover{
  background-color: var(--light-blue);


}


@media screen and (max-width: 990px) {

    .auth-button{
        margin-top: 20px;
    }
    .auth-button-sign{
        border: 1px solid black; 

    }

    .auth-button-sign:hover{
        background-color: var(--light-blue) ;
        color: white;
    }
}

</style>


