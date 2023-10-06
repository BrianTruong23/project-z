<script >
// import Navbar from './components/NavBar.vue';
// import './assets/base.css';

// export default {
//   name: 'App',
//   components: {
//     Navbar
//   }
// };


export default {
  data(){

  },

  computed: {

    showDesktopTablet: function(){
      return window.innerWidth >= 768;
    }

  },
  methods: {

  }
}


</script>

<template>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">




<div class = 'big-project-title'>
  <h3>Looking for a project to join?</h3>
  <h5>We got you!</h5>

</div>

<section class = 'ad-bg mt-4'>

  <div class = 'project-container'>
    <img src="../assets/pin.png"/>
    <h4>Coding Project</h4>
    <hr>
    <p>Build an app for healtcare system</p>
  </div>
 
  <div class = 'project-container'>
    <img src="../assets/pin.png" alt="">
    <h4>Coding Project</h4>
    <hr>
    <p>Build an app for healtcare system</p>
  </div>

  <div class = 'project-container' v-if="showDesktopTablet">
    <img src="../assets/pin.png" alt="">
    <h4>Coding Project</h4>
    <hr>
    <p>Build an app for healtcare system</p>
  </div>
  <div class = 'project-container' v-if="showDesktopTablet">
    <img src="../assets/pin.png" alt="">
    <h4>Coding Project</h4>
    <hr>
    <p>Build an app for healtcare system</p>
  </div>


</section>

<div class = 'project search-project' >
    <div class="row vertical-center">
      <div class="col-sm">
        <h1>Search for a project</h1>
        <h4 class = 'mt-2'>What do you want to be a part of?</h4>
        <button class = 'btn explore-btn mt-4 px-4 py-2'><h5>Explore</h5></button>
      </div>
      <div class="col-sm second-column">
        <div class="input-group rounded">
          <input
              type="search"
              class="form-control rounded input-search"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          <span class="input-group-text border-0" id="search-addon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
          </span>
        </div>
  
      </div>
    </div>
  </div>

<div class = 'project message-project'>
    <div class="row vertical-center ">
      <div class="col-md-6 col-sm-12">

        <div>
          <h1>Message</h1>
          <h4 class = 'mt-3'>Connect with the project creator and offer your help.</h4>
        </div>

      </div>
      <div class="col-md-6 col-sm-12 d-flex flex-column second-column">
        <div>
          <div class="panel d-flex">
            <font-awesome-icon :icon="['fas', 'user']" style="font-size: 1.5em; background-color: black; color: white; padding: 15px; border-radius: 50%;" />
            <img src="../assets/rec_message.svg" alt=""  class = 'message-img'>
        
          </div>
          <div class="panel d-flex justify-content-end" v-bind:style="{ 'margin-top': '20%' }">
          
            <img src="../assets/rec_message2.svg" alt="" class = 'message-img'>
            <font-awesome-icon :icon="['fas', 'user']" style="font-size: 1.5em; background-color: black; color: white; padding: 15px; border-radius: 50%;" />
        
          </div>

        </div>

  
      </div>
    </div>


</div>
<div class = 'project embark-project'>
    <div class="row vertical-center">
      <div class="col-md-6">
        <h1>Embark on the new journey</h1>
        <h4 class = 'mt-3'>Join with them and together build something that matters.</h4>
      </div>
      <div class="col-md-6 second-column">
        <img src="../assets/path.svg" alt="" class = 'path-img'>
  
      </div>
    </div>




</div>

<section id = 'footer'> 

  <div class = 'icon-footer'>
    <h4 class = 'footer-project'>Project Z</h4>
  </div>
  <div class = 'contact'>
    <h4 class = 'footer-project'>Contact Us</h4>
    <h5>johndoe@gmail.com</h5>
  </div>
  <div class="social">
    <h4 class = 'footer-project'>Get social</h4>
    <div class = 'social-media-icons'>
      <i class="fab fa-facebook"></i> <!-- Facebook Icon -->
      <i class="fab fa-linkedin"></i> <!-- LinkedIn Icon -->
      <i class="fab fa-instagram"></i> <!-- Instagram Icon -->
    </div>

  </div>

</section>

  
</template>   

<style>

.footer-project{
  font-weight: bold;
}

.message-img{
  max-width: 60%;
}

.path-img{
  max-width: 100%;
}

.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}

.container{
  margin-left: 0;
  margin-right: 0;
  padding: 0;
}

.project{
  padding: 0 100px 0;
  min-height: 100vh;

}

section{


  padding: 20px 25px 30px;

}

.ad-bg {
  background-image: url('../assets/bg.png'); /* Replace 'your-image-url.jpg' with the path to your background image */
  background-size: cover; /* Adjust the background size as needed */
  background-position: center center; /* Center the background image horizontally and vertically */
  padding: 100px 25px 100px;
  display: flex;
  flex-direction: row;
  gap: 20px;

}
.project-container{
  min-height: 200px;
  padding: 0 20px 20px;
  flex: 1 1 0;
  border-radius: 10px;
  border: 1px solid #000;
  background: #FFF;

}

.project-container hr {
  width: 50%; /* Set the width as needed */
  margin-top: -3px;
  height: 5px; /* Adjust the height as needed */
  background-color:#E9B824;
  border: none;
  opacity: 1;
  margin: 0;
}

.project-container img{

  height: auto; /* Maintain the aspect ratio */
  margin-top: -25px;
  max-height: 50px;
  max-width: 50px;

}


.big-project-title{
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  
}

.big-project-title h1:first-of-type {
  margin-bottom: -15px; /* Adjust the margin to make them closer */
}


.icon{

  font-size: 35px;

}


.search-project{

  background-color: #F4EEEE;

}

.explore-btn{
  background-color: var(--dark-blue);
  color: white;
}

.message-project{
  background-color: #E7E6F7;

}

.embark-project{
  background-color: #F7E7E6;

}

#footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #C6D2ED;
}

#footer .social{
  display: flex;
  flex-direction: column;
}

.social-media-icons{
  display: flex;
  gap: 10px;
}

.social-media-icons i{
  flex: 1 1 0;
  height: auto;
  width: 12px;
  color: black;
}



@media (max-width: 768px) {

  h1{
    font-size: 30px;
  }

  h4{
    font-size: 17px;
  }
  h5{
    font-size: 15px;
  }

  .message-img{
    max-width: 100%;
  }

  .second-column{

    margin-top: 100px;

  }

  .project{
  padding: 100px 60px 100px;
  min-height: fit-content;

  }

  .vertical-center{
    min-height: fit-content;
  }
}

</style>