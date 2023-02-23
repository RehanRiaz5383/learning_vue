const app = Vue.createApp({
    data(){
        return {
            isBookShow:true,
            books : [
                {title:"Hello world",author:"Bye", isFav:true},
                {title:"Good Evening",author:"Test", isFav:false}
            ]
        }
    },
    methods: {
        toggleBooks(){
            this.isBookShow = !this.isBookShow
        },
        toggleFav(book){
            book.isFav = !book.isFav
        },
        
    },
    computed:{
        favoriteBooks(){
            return this.books.filter(book => book.isFav);
        }
    }
});

app.mount("#app");