<template>
    <div class="dropdown">
        <button @click="toggleActions" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Actions <span class="caret"></span>
          </button>
          
        <div v-if="showcontrols" class="controlsdiv">
            <ul>
                <li><a @click="onExport">Export</a></li>
                <li><a @click="remove">Remove</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            showcontrols:false
        }
    },
    methods:{
        toggleActions(){
            this.showcontrols = !this.showcontrols
        },
        remove(){
            this.showcontrols = !this.showcontrols
            this.$emit("remove");
            
        },
        onExport(){
            this.showcontrols = !this.showcontrols
            this.$emit("onExport");
        }
    }
}
</script>

<style scoped>
    .dropdown{
        position:relative;
       
    }
    .controlsdiv{
        position:absolute;
        height:90px;
        padding:10px;
        width:120px;
        top:45px;
        background-color:white;
        border:1px solid #ccc;
        box-shadow:2px 2px 2px #eee;
    }

    ul{
        margin:0;
    }

    ul li{
        display:block;
        padding:5px 0px;
    }
</style>