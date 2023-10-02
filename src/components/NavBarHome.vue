<script>

import '../assets/base.css';


export default {
  data() {
    return {
      log_in: true,
      showRegisterForm: false,
      showModal: true
    };
  },
  
  computed: {
    hideSignUpButton() {
      // Check if the current route path is '/sign-up'
      return this.$route.path !== '/signup';
    },
    showHome() {
      // Check if the current route path is '/sign-up'
      return this.$route.path == '/signup';
    },

  }, 
  methods: {
    setRegister() {
      this.showRegisterForm = true ;
    },
    setLogIn() {
      this.showRegisterForm = false;
    },
    toggleRegisterForm() {
      this.showRegisterForm = !this.showRegisterForm;
    },

    hideModal() {
      this.showModal = false;
      this.$router.push({name: 'Main'})
    }

  },

};

</script>

<template>

<nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <a class="navbar-brand" href="#">
      <h2 class = 'bolded'>Project Z</h2>
    </a>


<div >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
  
        <li class="nav-item active">

        
          <button type="button" class="btn auth-button auth-button-log p-3 " @click = 'setLogIn' data-toggle="modal" data-target="#LogInModal" > Log In</button></li>
        <li class="nav-item">
          <button type="button" class="btn auth-button auth-button-sign p-3 " @click = 'setRegister' data-toggle="modal" data-target="#LogInModal"> Sign Up</button>
        </li>

      </ul>
    </div>
  </div>

<!-- Modal -->
<div class="modal fade bd-example-modal-lg" id="LogInModal" tabindex="-1" role="dialog" aria-labelledby="LogInModal" aria-hidden="true" v-show="showModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="LogInModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body p-4">
        <div class="text-center">
          <h2>Welcome to Project Z</h2>
          <h5>Ready to embark on an exciting journey of projects!</h5>
        </div>

        <!-- Parent div for both forms -->
        <div>
          <!-- LOGIN input -->
          <form class="mt-3" v-if="!showRegisterForm" @submit.prevent="submitForm">
            <!-- ... Login form elements ... -->
              <!-- Email input -->
              <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">Email address</label>
              <input type="email" id="form2Example1" class="form-control" />
    
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">Password</label>
              <input type="password" id="form2Example2" class="form-control" />

            </div>

            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="col d-flex justify-content-center ">
                <!-- Checkbox -->
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label> <span class="pull-right"></span>
                </div>
              </div>

              <div class="col justify-content-center">
                <!-- Simple link -->
                <button type="button" class = 'btn btn-default btn-small'>Forgot Password</button>

              </div>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-block mb-4 auth-button-log" data-dismiss="modal" data-backdrop = "false" @click="hideModal" >Log in</button>

            <!-- Register buttons -->
            <div class="text-center">
              <p>Not a member?  
              
                <button class = 'btn btn-default btn-small ' @click = 'toggleRegisterForm'>Register</button></p>
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f social-btn"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google social-btn"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter social-btn"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github social-btn"></i>
              </button>
            </div>
          </form>

          <!-- REGISTER input -->
          <form class="mt-3" v-else @submit="submitForm">
                  <!-- ... Registration form elements ... -->
                          <!-- Name input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="registerName">Name</label>
              <input type="text" id="registerName" class="form-control" />

            </div>

            <!-- Username input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="registerUsername">Username</label>
              <input type="text" id="registerUsername" class="form-control" />
            
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="registerEmail">Email</label>
              <input type="email" id="registerEmail" class="form-control" />

            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="registerPassword">Password</label>
              <input type="password" id="registerPassword" class="form-control" />
            
            </div>

            <!-- Repeat Password input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="registerRepeatPassword">Repeat password</label>
              <input type="password" id="registerRepeatPassword" class="form-control" />

            </div>


                  <!-- Submit button -->
            <button type="button" class="btn btn-block mb-4 auth-button-log" >Register</button>
            <div class = 'text-center'>
              <p>or sign up with:</p>
                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-facebook-f social-btn"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-google social-btn"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-twitter social-btn"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-github social-btn"></i>
                    </button>
              </div>
  
          </form>
        </div>
        
      </div>
    </div>
  </div>
</div>

  </nav>


    
</template>

<style>

.social-btn{
    color: var(--dark-blue);
}

.navbar{
  padding: 0;
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