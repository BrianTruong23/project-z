
<script>

import StatesUS from '../components/states.json';
import countryList from '../components/country.js';
import { mapGetters, mapActions } from 'vuex';

export default {
    data(){

        return{
            stateJSON: StatesUS,
            countryList: countryList,
            projectName: "",
            projectDescription: "",
            skillRequired: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            remote: false,
        }

    },

    components: {
    },

    computed:{

    },

    methods: {
        backToMain: function(){
            this.$router.push({name: 'Main'})
        },

        ...mapActions(['createProject']),
       

        createProjects(){
            this.createProject({
                name:this.projectName, description: this.projectDescription, skill_required: this.skillRequired, city: this.city, state_us: this.state, zip: this.zip, remote: this.remote
            }).then(() =>{
                console.log("CREATED SUCCESS")
                this.$router.push({name: 'Main'})
            }).catch((error) =>{
                console.error(error);
            })
        }
    }
    
}

</script>

<template>

    <div class = 'padding-left-right'>

    <button class = 'btn back-btn' type = 'button' @click="backToMain">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </button>

    <div class = 'add-project px-3 mt-4'>
        <h1 class = 'bolded'>
            Add Projects 
        </h1>


        <form  @submit.prevent="createProjects" >


        <div class="form-group mt-3">
            <label for="formGroupExampleInput">Project Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" v-model= "projectName" placeholder="Building an educational AI chatbot">
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Project Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model= "projectDescription"></textarea>
        </div>

        <div  class="form-group">
            <label for="exampleFormControlSelect2">Skill Required</label>
            <select class="form-control" v-model = "skillRequired">
                <option value = "beginner">Beginner</option>
                <option value = "intermediate">Intermediate</option>
                <option value = "advanced">Advanced</option>
            </select>

        </div>



        <div class="form-group">
                <label for="inputCity" class="form-label" >City</label>
                <input type="text" class="form-control" id="inputCity" v-model = "city">
        </div>
        <div class="form-group">
            <label for="inputState" class="form-label mr-3">State</label>
            <select id="inputState" class="form-select" v-model = "state">
                <option value="" selected>Choose State</option>
                <option v-for="state in stateJSON" :key="state">{{ state }}</option>
            </select>
        </div>

        <div class="form-group">
            <label for="inputState" class="form-label mr-3">Country</label>
            <select id="inputState" class="form-select" v-model = "country">
                <option value="" selected>Choose Country</option>
                <option v-for="c in countryList" :key="c">{{ c }}</option>
            </select>
        </div>



        <div class="form-group">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control zip-code" id="inputZip" v-model="zip">
        </div>

        <div class="form-group">
    
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" v-model="remote">
                <label class="form-check-label" for="gridCheck">
                    Remote
                </label>
               
            </div>
        </div>


        <button type="submit" class="btn create-btn mt-4">Create</button>
        </form>

    </div>


    </div>


    
</template>

<style>


</style>