<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
        components:{
          Header,
          Main,
        
          
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
                pages: 0,
                name: this.store.queryParams.name
                
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
          },
          getAllNames(){
            axios.get(this.store.nameUrl)
            .then(res => {
              console.log(res.data);
              // this.store.namesList = res.data.map(item => item.results.name);
              //ottengo un array di stringhe
              this.store.namesList = res.data.results.map(character => character.name);
              console.log(this.store.namesList);
            })
          }
        },
        mounted(){
          this.getApi()
          this.getAllNames()
        }
    }
  
</script>

<template>
  
  <Header @startSearch="getApi"/>

  <Main />

</template>

<style lang="scss">
   @use './assets/scss/main.scss';  



</style>
