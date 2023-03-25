<template>
  <div class="container">
    <header>
  
        <nav>
          <RouterLink :to="{name:'home'}" class="btn btn-primary btn-sm">Posts</RouterLink>
          <RouterLink :to="{name:'about'}" class="btn btn-primary btn-sm">Registeration Form</RouterLink>
        </nav>
        <p class="m-3">Navigation example</p>
        <button class="btn btn-primary" @click="redirect">Redirect</button>
        <button class="btn btn-primary" @click="back">Back</button>
        <button class="btn btn-primary" @click="forward">Forward</button>
    </header>
    <RouterView />
  </div>

</template>
<script>
  export default {
    methods: {
      redirect(){
        this.$router.push({name:'about'})
      },
      back(){
        this.$router.go(-1);
      },
      forward(){
        this.$router.go(1)
      }
    }
  }
</script>
<style scoped>
  .btn{
    margin:0 10px;
  }
  .container{
    margin:50px auto;
  }
</style>

