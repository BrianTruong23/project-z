<script>



export default {
    data(){
        return {
 
        }
    },

    props: {
        project: {},
    },
    

    methods: {
        directToProject: function(){
            this.$router.push({name: 'project'});

        },

        formatDate(timestamp){
            const date = new Date(timestamp);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${month}/${day}/${year}`;
        

        }
    }
}

</script>

<template>

    <div class = 'top-div d-flex align-items-center justify-content-between'>
        <!-- <button type="button" class = 'btn'><img src="../assets/crypto.png" alt=""></button> -->
        <span class = 'bolded mr-3 categories'>Coding</span>

        <button type="button" class = 'btn save-btn'><font-awesome-icon :icon="['fas', 'book']" /></button>


    </div>
    <div class = 'info'>
        <h2>{{ project.name }}</h2>
        <h5 class = 'mt-3' >Team Name</h5>
        <p class = 'mt-4' >{{project.description}}</p>

        <p> <span class = 'bolded'>Skill Required:</span> {{project.skill_required.toUpperCase()}}</p>
        <p> <span class = 'bolded'>Location Type:</span> {{project.location.toUpperCase()}}</p>
        <p> <span class = 'bolded'>Date Posted:</span>  {{formatDate(project.created_at)}}</p>
        
        <div class = 'button-group d-flex mt-4'>
            <button type = 'button' class = 'btn learn-btn btn-posting' @click="directToProject"> Learn more</button>
            <button type = 'button'  class = 'btn apply-btn btn-posting'> Apply </button>
        </div>
    

    </div>



    
</template>

<style>

.save-btn{
    font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
}

.bolded { font-weight: bold; }


.categories{
    background-color: #00337C;
    border-radius: 3px;
    color: white;
    padding: 5px 10px 5px;
    
}

.posting{
    border: 1px solid black;
    padding: 20px 20px;
    border-radius: 20px;

    flex: 1 1 30%;
    flex-wrap: wrap;
}



.learn-btn{

    background-color: var(--gray);
    color:var(--hover-text-color);
}

.apply-btn{
    background-color: var(--primary-color);
    color:var(--hover-text-color);
}

.learn-btn:hover{
    background-color: var(--secondary-color);

}
.apply-btn:hover{
    background-color: (--gray);
}

.btn-posting:hover{
    color:var(--hover-text-color);
}

.button-group{
    gap: 10px;
    align-content: center;
    justify-content: flex-end;
}


</style>