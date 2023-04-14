<template>
    <table class="table-auto border-collapse">
        <thead>
          <tr>
              <td class="p-3">
                <input type="checkbox" @change="handleCheckChange">
              </td>
              <td></td>
              <td class="p-3">Name</td>
              <td class="p-3">Phone</td>
              <td class="p-3 w-px-300">Created At</td>
              <td class="p-3"></td>
          </tr>
        </thead>
        <tbody>

            <tr class="" v-for="contact in contacts" :key="contact.id">
              <td class="p-3 border-t-2 border-indigo-50"><input type="checkbox" v-model="contact.isChecked"></td>
              <td class="p-3 border-t-2 border-indigo-50">
                <div :class="'rounded-full circle ' + contact.color">
                  <span> {{initial(contact.first_name)}}{{initial(contact.last_name)}}</span>
                </div>
              </td>
              <td class="p-3 border-t-2 border-indigo-50">
                {{contact.first_name}} {{contact.last_name}}<br/>
                <svg style="display:inline;" class="mr-1" xmlns="http://www.w3.org/2000/svg" width="17px" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                <span class="text-gray-500">{{contact.email}}</span>
              </td>
              <td class="p-3 border-t-2 border-indigo-50">{{contact.phone}}</td>
              <td class="p-3 border-t-2 border-indigo-50">{{contact.created_at}}</td>
              <td class="p-3 border-t-2 border-indigo-50"></td>
            </tr>
  
          </tbody>
          <tfoot v-if="loading">
            <td colspan="5" align="center">Loading Contacts.....</td>
          </tfoot>
      </table>
</template>
<style scoped>
.table-auto{
    width:100%;
    
   }
   .circle{
    height:50px;
    width:50px;
    padding-top:15px;
    padding-left:13px;
  }
</style>
<script>
import moment from 'moment';

export default {
    name:'CustomTable',
    props:["maincontacts"],
    computed:{
        contacts(){
            return this.maincontacts.map(contact => {
                contact.created_at = moment(contact.created_at).format("MM/DD/YYYY");
                return contact;
            })
        }
    },  
    methods:{
        handleCheckChange(e){
            this.$emit("onCheckChange",e.target.checked);
        },
        initial(name){
        if(name){
        return name.charAt(0);
        }else{
          return '';
        }
      },
    }

}
</script>
