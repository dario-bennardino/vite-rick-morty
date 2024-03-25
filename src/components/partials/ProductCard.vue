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
        <div class="card">
            <img :src="image" class="card-img-top" alt="name">
            <div class="card-body">
                This is some text within a card body.
            </div>
        </div>    
    </div>
    

</template>

<style lang="scss" scoped>
   
</style>