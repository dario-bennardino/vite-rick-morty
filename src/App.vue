<script>
import axios from 'axios';
import Main from './components/Main.vue'
export default {
        components:{
          Main
        },
        data(){
          return{

          }
        },
        methods:{
          getApi(){
            console.log('get api');
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
