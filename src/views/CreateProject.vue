
<script>

import StatesUS from '../components/states.json'
import countryList from '../components/country.js'

export default {
    data(){

        return{
            stateJSON: StatesUS,
            countryList: countryList,
        }

    },

    components: {
    },
    methods: {
        backToMain: function(){
            this.$router.go(-1)
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


        <form>


        <div class="form-group mt-3">
            <label for="formGroupExampleInput">Project Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Building an educational AI chatbot">
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Project Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div  class="form-group">
            <label for="exampleFormControlSelect2">Skill Required</label>

            <select class="form-control">
                <label for="exampleFormControlSelect2">Skill Required</label>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>

        </div>



        <div class="form-group">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="form-group">
            <label for="inputState" class="form-label mr-3">State</label>
            <select id="inputState" class="form-select">
                <option selected>Choose State</option>
                <option v-for="state in stateJSON" :key="state">{{ state }}</option>
            </select>
        </div>

        <div class="form-group">
            <label for="inputState" class="form-label mr-3">Country</label>
            <select id="inputState" class="form-select">
                <option selected>Choose Country</option>
                <option v-for="country in countryList" :key="country">{{ country }}</option>
            </select>
        </div>



        <div class="form-group">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control zip-code" id="inputZip" >
        </div>

        <div class="form-group">
    
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Remote
                </label>
            </div>
        </div>


        <button type="submit" class="btn create-btn mt-4" >Create</button>
        </form>

    </div>


    </div>


    
</template>

<style>


</style>