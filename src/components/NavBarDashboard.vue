<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            navOpen: true,

        };
    },

    computed: {
        isMobileSize() {
            console.log(window.innerWidth)
            return window.innerWidth < 768; // Change the value to the tablet screen width you want to target
        },

    }, 
    methods: {
        toggleDisplay() {
            this.display = !this.display;
        },
        directToCreate(){
            this.$router.push({name: 'CreateProject'})
        },

        ...mapActions(['login', 'logout']), 

        logOutUser() {
            this.logout()
            
            .then(() => {
                // Handle successful logout (e.g., redirect to the home page)
                this.$router.push({ name: 'Home' });
            })
            .catch((error) => {
                // Handle logout error (e.g., display an error message)
                console.error(error);
            });
        },
    
    },
    components: {
 
    }
};

</script>

<template>

    <div class = 'top-section' >


        <nav class=" navbar navbar-expand-lg d-flex justify-content-between">
        <a class="navbar-brand" href="#" style = "color: black; font-size: 35px; font-weight: bold;">Project Z</a>


        <form novalidate class="d-flex input-group w-50 px-2" v-if="!isMobileSize" style = " border-radius: 5px; background-color: #F6F6F6 ;">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        style = 'height: auto; outline: none; border:none; background-color: #F6F6F6 ;'
                    />
                    <span class="text border-0 d-flex align-items-center" id="search-addon">
                        <button type = 'button' class = 'btn'>   <font-awesome-icon icon="fa-solid fa-magnifying-glass"/></button>
                    </span>
        </form>


        <div class = 'd-flex flex-row justify-content-center align-items-center ' style = 'gap: 10px' v-if="!isMobileSize">
                <button class = 'btn create-btn' @click="directToCreate">Create Project</button>
                <button class = 'btn create-btn' @click="logOutUser">Log Out</button>
                <div class = 'user'>
                    <button type = 'button' class = 'btn'>      <font-awesome-icon :icon="['fas', 'user']" style="font-size: 1.5em;  padding: 15px; border-radius: 50%;" class = 'icon-user'/></button>
                
                </div>
        </div>

        <div v-if="isMobileSize">
            <div class = 'user'>
                    <button type = 'button' class = 'btn'>      <font-awesome-icon :icon="['fas', 'user']" style="font-size: 1.3em;  padding: 12px; border-radius: 50%;" class = 'icon-user'/></button>
                
            </div>
        </div>


        </nav>

            <div class="d-flex justify-content-left mt-2 flex-column" v-if="isMobileSize">

                <form novalidate class="d-flex input-group w-75 px-2 mt-2 "  style = " border-radius: 5px; background-color: #F6F6F6 ;">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        style = 'height: auto; outline: none; border:none; background-color: #F6F6F6 ;'
                    />
                    <span class="text border-0 d-flex align-items-center" id="search-addon">
                        <button type = 'button' class = 'btn'>   <font-awesome-icon icon="fa-solid fa-magnifying-glass"/></button>
                    </span>
                </form>

                <button class = 'btn create-btn w-50 mt-4' @click="directToCreate">Create Project</button>
            </div>




    </div>



</template>


<style >

.icon-user{
    background-color: var(--primary-color);
    color: var(--hover-text-color)
}
.icon-user:hover{
    background-color: var(--secondary-color);
}

.navbar{
  padding: 0;
}


.create-btn{
    color: var(--hover-text-color);
    background-color: var(--primary-color);
    font-weight: bold;



}

.create-btn:hover{
    color: var(--hover-text-color);
    background-color: var(--secondary-color);

}



</style>