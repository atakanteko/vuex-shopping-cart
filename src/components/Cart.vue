<template>
  <div class="cart">
    <h3 style="color:red">Toplam Sepet Tutarı: &#8378;{{getCurrentPrice}}</h3>
    <h5 >Sepette Bulunan Kitap Adeti: {{getCurrentNumberOfBooks}}</h5>
      <div
       class="book" 
       v-for="item in getShoppingCart" 
       :key="item.id">
        <img
          :src="item.image"
          :alt="item.name"
        />
        <div>
          <h4>{{item.name}}</h4>
          <p>Yazar: {{item.author}}</p>
          <p>Fiyat: &#8378; {{item.price}}</p>
          <button class="btn btn-warning">-</button>
          <button class="btn btn-primary">Sepetten Çıkar</button>
          <button class="btn btn-warning">+</button>
        </div>
      </div>
     
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Products',
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['getShoppingCart']),
    getCurrentPrice(){
      return this.getShoppingCart.reduce((total, item) => (total += item.price),0)
    },
    getCurrentNumberOfBooks(){
      return this.getShoppingCart.length
    }
  }
}
</script>

<style scoped>
.cart{
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
