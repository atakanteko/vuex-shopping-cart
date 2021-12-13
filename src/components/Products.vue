<template>
  <div class="products">
    <div 
      class="book"
      v-for="book in getBookList"
      :key="book.id">
      <img
          :src="book.image"
          :alt="book.name"
        />
        <div>
          <h4>{{book.name}}</h4>
          <p>Yazar: {{book.author}}</p>
          <p>Fiyat: &#8378; {{book.price}}</p>
          <button class="btn btn-primary" @click="addBook(book.id)">Sepete Ekle</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Products',
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['getBookList'])
  },
  methods:{
    ...mapActions(['addToCart']),
    addBook(param){
      this.addToCart(param)
    }
  }
}
</script>

<style scoped>
.products{
  margin-top:20px;
}
.book {
  display: flex;
  padding: 10px;
  margin: 0 0 10px 0;
  border: 1px solid #ccc;
  transition: all 0.5s;
}

.book img {
  width: 130px;
  margin: 0 10px 0 0;
}
</style>
