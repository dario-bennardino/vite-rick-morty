<script>
    export default {
        props:{
            name: String,
            status: String,
            species: String,
            image: String
        }
    }
</script>

<template>

    <div class="col mb-4 ">
            <div class="card" style="width: 18rem;">
                <img :src="image" class="card-img-top" :alt="name">
                <div class="card-body">
                    <h5 class="card-text">{{name}}</h5>
                    <h6 class="card-text">{{status}}</h6>
                    <h6 class="card-text">{{species}}</h6>
                </div>
            </div>
    </div> 
    

</template>

<style lang="scss" scoped>
   
</style>