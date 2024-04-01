<script>
import {store} from '../data/store'
    export default {
        data(){
            return{
                store
            }
            
        }
    }
</script>

<template>
    <div class="text-center my-5 container">
        <h1>{{ store.mainTitle }}</h1>

        <label for="exampleDataList" class="form-label">Ricerca per nome</label>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Inserisci il nome">
        <datalist id="datalistOptions">
            <option 
            v-for="(name, index) in this.store.namesList" 
            :key="index"
            :value="name"
            ></option>
            
            
        </datalist>
       
    </div>
</template>



<style lang="scss" scoped>

</style>