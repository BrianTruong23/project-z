<script>
export default {
    data() {
        return {
            navOpen: true,

        };
    },
    
    computed: {


    }, 
    methods: {
        toggleDisplay() {
            this.display = !this.display;
        }
    
    },
    components: {
 
    }
};

</script>

<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse  align-content-between justify-content-center" id="navbarSupportedContent">
    <ul class="navbar-nav  ">
      <li class="nav-item active">
        <form class="d-flex input-group w-auto">
            <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
            </span>
        </form>
      </li>
    </ul>
 

  </div>
  <div class = 'd-flex flex-row' style = 'gap: 10px'>
        <button class = 'btn btn-primary'>Create Project</button>
        <div class = 'user'>
            <font-awesome-icon :icon="['fas', 'user']" style="font-size: 1.5em; background-color: black; color: white; padding: 15px; border-radius: 50%;" />
        </div>
    </div>
</nav>


</template>


<style >

</style>