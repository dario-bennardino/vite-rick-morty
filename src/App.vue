<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import SearchBar from './components/SearchBar.vue'

export default {
        components:{
          Header,
          Main,
          SearchBar,
        
          
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
                count: 20,
                pages: 0
                
              }
            })
            .then(result => {
              
              console.log(result.data.results);
              this.store.cardList = result.data.results;
              console.log(this.store.cardList);
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
  
  <Header />

  <SearchBar/>

  <Main />

</template>

<style lang="scss">
   @use './assets/scss/main.scss';  



</style>
