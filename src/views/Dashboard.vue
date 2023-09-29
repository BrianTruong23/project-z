<script>   

import Posting from '../components/Posting.vue';


export default{
    data(){
        return {

        };
    },
    components: {
        Posting
    }
}

 


</script>   

<template>

<div class = 'padding-left-right'>
    <div class = 'mt-3'>
    <div>
        <h3 style="font-weight:600">Project Posting</h3>
    </div>

    <div class = 'd-flex mt-4 filter-btn-group ' style = 'gap: 10px'>
        <button class = 'btn btn-filter'>Location</button>
        <button class = 'btn btn-filter'>Categories</button>
        <button class = 'btn btn-filter'>Skill Required</button>
        <button class = 'btn btn-filter'>Date Posted</button>
        <button class = 'btn btn-filter'>All Filters</button>
    </div>

</div>

<div class = "postings mt-5 d-flex flex-wrap justify-content-between">

    <Posting/>
    <Posting/>
    <Posting/>
    <Posting/>
</div>

</div>


<router-view/>

    
</template>

<style>

.filter-btn-group{
    flex-wrap: wrap;
}
.postings{
    column-gap: 50px; 
    row-gap: 100px;
    flex-wrap: wrap;

}


.btn-filter{

    background-color: transparent;
    border-color: black;
    border-radius: 10px;
    /* padding: 10px 10px 10px; */

}

.btn-filter:hover{

    background-color: black;
    color: white;

/* padding: 10px 10px 10px; */

}

</style>