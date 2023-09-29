<script>   

import Postings from '../components/Posting.vue';


export default{
    data(){
        return {

        };
    },
    components: {
        Postings
    }
}

 


</script>   

<template>

<div>
    <h2>Project Posting</h2>
</div>

<div class = 'd-flex' style = 'gap: 10px'>
    <button class = 'btn btn-primary'>Location</button>
    <button class = 'btn btn-primary'>Categories</button>
    <button class = 'btn btn-primary'>Skill Required</button>
    <button class = 'btn btn-primary'>Date Posted</button>
    <button class = 'btn btn-primary'>All Filters</button>
</div>


<Postings/>

    
</template>

<style>

</style>