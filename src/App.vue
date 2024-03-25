<script>
import axios from 'axios';
import { store } from './data/store';
import Main from './components/Main.vue'
export default {
        components:{
          Main
          
        },
        data(){
          return{
            store
          }
        },
        methods:{
          getApi(){
            console.log('get api');
            console.log(this.store);
            axios.get(this.store.apiUrl, {
              params:{
                num: 12,
                offset: 0,
                language: 'it'
              }
            })
            .then(result => {
              
              this.store.cardsList = result.data.data;
              console.log(this.store.cardsList);
            })
            .catch(error => {
              console.log(error);
            })
          }
        },
        mounted(){
          this.getApi()
        }
    }
  
</script>

<template>
   <Main />

</template>

<style lang="scss" scoped>
   @use './assets/scss/main.scss';  

</style>
