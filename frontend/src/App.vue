<template>
  <div class="container mx-auto">
  
  <div class="p-5 scrollablediv"  @scroll="onScroll">
    <h1>Contacts</h1>
      <!-- Dropdown menu -->
     <div class="grid grid-cols-3">
        <div>
          <span v-show="!allCheckboxes">Showing</span>
          <span v-show="allCheckboxes">Selected {{getSelectedContacts().length}} of</span> 
          {{maincontacts.length}} contacts
        </div>
        <div>
          <actions v-if="getSelectedContacts().length" @onExport="handleBulkExport" @remove="handleBulkRemove"/>
        </div>
     </div>
      <custom-table @onCheckChange="onCheckboxChanged" :maincontacts="maincontacts"/>
      <div v-show="loading" class="text-center">Loading Contacts....</div>
  </div>
</div>
</template>
<style scoped>
 
  .scrollablediv{
    height:100vh;
    width:100vw;
    overflow:auto;
  }
  
  
</style>
<script>
  import axios from 'axios';
  import CustomTable from './components/Table.vue';
  import Actions from './components/Actions.vue';

  export default {
    components: {
      CustomTable,
      Actions
    },
    data(){
      return {
        contacts:[],
        offset:0,
        limit:50,
        apiUrl:"http://localhost:8080/contacts",
        loading:true,
        previousOffsets: [],
        allCheckboxes:false
      }
    },
    methods:{
     
      getCircleRandomName(){
        
       
      },
      fetchContacts(){
        if(this.previousOffsets.findIndex(offset => this.offset == offset) === -1){
          this.previousOffsets.push(this.offset);
        this.loading = true;
          axios.get(this.apiUrl + `?offset=${this.offset}&limit=${this.limit}`)
          .then(response => {
            this.contacts = [...this.contacts,...response.data];
            
            this.offset = this.offset + this.limit;
            this.loading = false;
          })
        }
      },
      onScroll(e) {
        const { scrollTop, offsetHeight, scrollHeight } = e.target
        if ((scrollTop + offsetHeight) >= scrollHeight) {
          this.fetchContacts();
        }
      },
      getSelectedContacts(){
        return this.maincontacts.filter(contact=>contact.isChecked == true);
      },
      onCheckboxChanged(newvalue){
        this.allCheckboxes = newvalue;
      },
      handleBulkRemove(){
         //doing only front end remove as backend is databot staging
         const idsToRemove = this.maincontacts.map(contact => {
          return contact.isChecked == true ? contact.id : null;
         }).filter(x => x !== null);
        
         this.contacts = this.contacts.filter(contact => idsToRemove.indexOf(contact.id) === -1);


      },
      handleBulkExport(){
        const contactsToExport = this.maincontacts.filter(contact => contact.isChecked == true);
        const keys = Object.keys(contactsToExport[0]);
        const commaSeparatedString = [keys.join(",") , contactsToExport.map(row => keys.map(key => row[key]).join(",")).join("\n")].join("\n")
        const csvBlob = new Blob([commaSeparatedString])
        const url = URL.createObjectURL(csvBlob)
        window.open(url);
      }
    },
    watch:{
        'allCheckboxes':function(newvalue,oldvalue)
        {
          this.maincontacts = this.maincontacts.map(contact => {
              contact.isChecked = newvalue;
              return contact;
          });
        }
    },
    mounted(){
      this.fetchContacts();
    },
    computed:{
      maincontacts(){
        const classes = ['bg-indigo-500','bg-orange-200','bg-pink-400','bg-purple-100','bg-yellow-500'];
       
          return this.contacts.map(contact => {
            contact.isChecked = false;
            contact.color = classes[Math.floor(Math.random() * classes.length)];
            return contact;
          })
       },
       
    }

  }

</script>
