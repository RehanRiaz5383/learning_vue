<template>
  <div class="game">
    <h1>{{title}}</h1>
    <button @click="start" :disabled="isPlaying">play</button>
    <Block v-if="isPlaying" @end="end" :delay="delay"/>
    <p v-if="showResults">Your score is {{score}} ms</p>
  </div>
</template>
<style scoped>
  .game{
    width:800px;
    margin:0 auto;
    align-items: center;
    text-align:center;
  }
</style>
<script>
import Modal from './components/Modal.vue';
import Block from './components/Block';

export default {
  components:{Modal,Block},
  name: 'App',
  data(){
    return {
      title:"Hello world",
      isPlaying:false,
      delay:null,
      score:null,
      showResults:false
    }
  },
  methods:{
   start(){
    this.delay = 2000 + Math.random()*5000;
    this.isPlaying = true;
    this.showResults = false;
   },
   end(score){
    this.score = score;
    this.showResults = true;
    this.isPlaying = false;
   }
  }
}
</script>
