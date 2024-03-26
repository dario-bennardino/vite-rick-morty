<script>
import {store} from '../data/store'
import ProductCard from './partials/ProductCard.vue';
    export default {
        components:{
            ProductCard
        },
        data(){
            return{
                store
            }
        }
       
        
    }
</script>

<template>
    <div class="text-center my-5 container">

        <div class="row row-cols-4">

            <ProductCard 
            v-for=" card in this.store.cardList"
            :key="card.id"
            :name="card.name"
            :status="card.status"
            :species="card.species"
            :image="card.image"
            />


    
        </div>
    
    </div>      



</template>

<style lang="scss">
   .container{
    margin: 0 auto;
   }
</style>