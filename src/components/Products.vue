<template>
  <div class="products">
    <div 
      class="book"
      v-for="book in this.getBookList"
      :key="book.id">
      <img
          :src="book.image"
          :alt="book.name"
        />
        <div>
          <h4>{{book.name}}</h4>
          <p>Yazar: {{book.author}}</p>
          <p>Fiyat: &#8378; {{book.price}}</p>
          <button class="btn btn-primary">Sepete Ekle</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Products',
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['getBookList'])
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
