<script>
import {store} from '../data/store'
    export default {
        data(){
            return{
                store,
                name: ''
            }            
        },
        methods:{
            startSearch(){
                console.log('ricerca', this.name);
                this.store.queryParams = {
                    num: 20,
                    offset: 0,
                    name: this.name
                }
                this.$emit('startSearch');
                
            }
        }
    }
</script>

<template>
    <div class="text-center my-5 container">
        <h1>{{ store.mainTitle }}</h1>

        <label for="exampleDataList" class="form-label">Ricerca per nome</label>
        <input 
        class="form-control" 
        list="datalistOptions" 
        id="exampleDataList" 
        placeholder="Inserisci il nome" 
        v-model.trim="name"
        @keyup.enter="startSearch"
        >
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