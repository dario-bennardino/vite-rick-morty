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

    <div class="col">
            <div class="card" style="width: 18rem;">
                <img :src="image" class="card-img-top" :alt="name">
                <div class="card-body">
                    <h5 class="card-text">nome</h5>
                    <h5 class="card-text">status</h5>
                    <h5 class="card-text">specie</h5>
                </div>
            </div>
    </div> 
    

</template>

<style lang="scss" scoped>
   
</style>