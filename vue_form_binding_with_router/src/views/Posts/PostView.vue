import RouterLink from 'vue-router'
<template>
  
  <div>
    <h3>Please click on the following posts to see its details</h3>
    <ul class="list-group">
      <li class="list-group-item list-group-item-action" v-for="post in posts">
        <RouterLink :to="{name:'postDetail',params:{id:post.id}}">{{ post.title }}</RouterLink>
      </li>
    </ul>
   
  </div>
</template>

<script>
  export default {
    data(){
      return {
        posts:[
          {title:"Learning Vue.js",id:1},
          {title:"Learning Node.js",id:2},
          {title:"Learning React.js",id:3}
        ]
      }
    }
  }
</script>

<style scoped>
  div{
    margin-top:30px;
  }
  .list-group-item{
    cursor:pointer;
  }

  a{
    text-decoration:none;
  }
</style>