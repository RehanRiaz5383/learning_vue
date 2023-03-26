<template>
  <div class="card mt-3">
      <div class="card-body">
          <h3>Signup to get started</h3>
          <hr/>
          <form @submit.prevent="submitform">
              <label for="">
                  First Name
                  <input type="text" class="form-control" v-model="user.first_name">
              </label>
              <label for="">
                  Last Name
                  <input type="text" class="form-control" v-model="user.last_name">
              </label>
              <label for="">
                  Email
                  <input type="email" class="form-control" v-model="user.email">
              </label>
              <label for="">
                  Select Your Country
                  <select class="form-control" v-model="user.country">
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                  </select>
              </label>
              <label for="">
                Enter your skills (and press coma with alt to save)
                <input type="text" v-model="tempSkill" class="form-control" @keyup.alt="saveskill">
                <span class="badge bg-primary m-2" role="button" @click="removeSkill(skill)" v-for="skill in user.skills">{{ skill }}</span> (total {{ totalSkills }} skills)
              </label>
              <label for="">
                Select Your hobbies
                <input type="checkbox" v-model="user.hobbies" value="Cricket">Cricket
                <input type="checkbox" v-model="user.hobbies" value="Football">Football
                <input type="checkbox" v-model="user.hobbies" value="Music">Music
                <input type="checkbox" v-model="user.hobbies" value="Movies">Movies<br/>
                <span class="badge bg-success m-2" v-for="hobby in user.hobbies">{{ hobby }}</span>
              </label>
              <label>
                <input type="checkbox" v-model="user.accept_terms"> I have read the terms and conditions
              </label>
              <input type="submit" value="Register Now" class="btn btn-primary btn-block">
          </form>
      </div>
      <div class="card-footer">
          <h4>Your first name is {{ user.first_name }}</h4>
          <h4>Your last name is {{ user.last_name }}</h4>
          <h4>Your email is {{ user.email }}</h4>
          <h4>Your country is {{ user.country }}</h4>
          <h4>User has accepted terms: {{ user.accept_terms }}</h4>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        user:{
          first_name:'',
          last_name:'',
          email:'',
          country:'Pakistan',
          skills:[],
          hobbies:[],
          accept_terms:false
        },
        tempSkill:''
      }
    },
    methods:{
      saveskill(e){
          if(!this.user.skills.includes(this.tempSkill)){
            this.user.skills.push(this.tempSkill);
          }
          this.tempSkill = '';
          
      },
      submitform(){
        alert("Form submited successfully");
      },
      removeSkill(skill){
        this.user.skills = (this.user.skills.filter(_skill => _skill !== skill));
      }
    },
    computed:{
      totalSkills(){
        return this.user.skills.length
      }
    }
  }

</script>
<style scoped>
  label{
    display:block;
  }
</style>
