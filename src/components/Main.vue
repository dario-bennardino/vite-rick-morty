<script>
import {store} from '../data/store'
import ProductCard from './partials/ProductCard.vue'
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
   <div class="text-center">Ciao main vue</div>

</template>

<style lang="scss" scoped>
   
</style>