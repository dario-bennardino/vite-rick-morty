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
    <!-- <button @click="store.counter++" class="btn btn-primary mb-5">incrementa contatore</button> -->
    <!-- <input class="form-control" type="text" v-model="store"> -->
    <div class="row row-cols-4">
        <ProductCard 
        v-for="card in this.store.cardsList" 
        :key="card.results.id"
        :name="card.results.name" 
        :status="card.results.status"
        :species="card.results.species"
        :image="card.results.origin.url"
        />
        
        
    </div>
   </div>

</template>

<style lang="scss" scoped>
   
</style>