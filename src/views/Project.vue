
<script>
import { mapGetters, mapActions } from 'vuex';
import NavBarDashboard  from '../components/NavBarDashboard.vue';

export default {
    data(){

        return{
            projectId: this.$route.params.projectId,
        }
     
    },

    components: {
        NavBarDashboard
    },
    computed:{
        ...mapGetters(['projects', 'requested_project']),

    },
    methods: {
        backToMain: function(){
            this.$router.push({name: 'Main'});
        },
        ...mapActions([]),

    },
 
    async mounted() {
        await this.$store.dispatch('searchProject', this.projectId);

    },
    
}

</script>
<template>

    <div class = 'project-view padding-left-right'>

    <button class = 'btn back-btn' type = 'button' @click="backToMain">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </button>
    
    <h1 class = 'text-center bolded'>
        {{ this.requested_project.name }}
    </h1>

    <h5 class = 'mt-3'>
        Team Name
    </h5>

    <div class=  'general-description mt-3'>

        <p> <span class = 'bolded'>Skill Required:</span>  {{ this.requested_project["skill_required"]}}    </p>
        <p> <span class = 'bolded'>Location Type:</span> Remote</p>
        <p> <span class = 'bolded'>Date Posted:</span>  {{ this.requested_project["created_at"]}} </p>
    </div>

    <p class = 'description'>
       

    Building A Crypto Currency App: Embark on a digital financial revolution with our cutting-edge cryptocurrency app. Seamlessly navigate the world of decentralized finance, trade cryptocurrencies, monitor real-time market data, and manage your digital assets securely, all in one user-friendly and innovative platform. Stay ahead in the ever-evolving crypto landscape with our app's robust features and intuitive design, empowering you to take control of your financial future.
    <br>
    <br>
    <span class = 'bolded'> Responsibilities:</span> 

    App Development: You will be involved in designing, developing, and maintaining the cryptocurrency app. This involves coding, debugging, and implementing new features to ensure the platform remains cutting-edge and user-friendly.
    Decentralized Finance (DeFi): Dive into the exciting realm of decentralized finance. You'll work on integrating DeFi protocols, smart contracts, and liquidity pools to enable users to participate in the burgeoning DeFi ecosystem securely.
    <br>
    <br>
    <span class = 'bolded'>What You Gained:</span> 

    In-Depth Crypto Knowledge: You'll acquire a deep understanding of cryptocurrencies, blockchain technology, and decentralized finance, making you a valuable expert in this rapidly evolving field.
    Technical Expertise: Through app development and integration of blockchain technologies, you'll enhance your programming skills and gain hands-on experience with cutting-edge tech stacks.
    </p>

    <div class ='project-div mt-3'>
    
        <h5 class = 'bolded'>
            About {Project_Block}
        </h5>

        <p>
            <span class = 'bolded'>Who are we</span> 
            We are a forward-thinking, technology-driven team of professionals passionate about revolutionizing the financial landscape. With a deep-rooted belief in the transformative power of blockchain and cryptocurrencies, we've come together to create a cutting-edge cryptocurrency app that empowers individuals to take control of their financial futures.


        </p>

    </div>

    <div class = 'extra-des row d-flex flex-wrap '>


        <p class = 'd-flex flex-column col-md-4'>
            <span class = 'bolded'>Members</span> 
            <span class = ''>20</span> 
        </p>

        <p class = 'd-flex flex-column  col-md-4'>
            <span class = 'bolded'>Industry</span> 
            <span class = ''>Blockchain</span> 
        </p>

        <p class = ' d-flex flex-column  col-md-4 '>
            <span class = 'bolded'>Location</span> 
            <span class = ''>Austin</span> 
        </p>
    </div>




    <button class = 'btn apply-btn mt-4'> Apply</button>

    </div>


    
</template>

<style>

.project-view{
    padding: 20px 35px 150px 30px;
}
.bolded { font-weight: bold; }

.extra-des{
    justify-content: space-between;

}

.back-btn{
    font-size: 25px;
}


.apply-btn:hover{

    background-color: var(--gray);
    color: var(--hover-text-color);



}

</style>