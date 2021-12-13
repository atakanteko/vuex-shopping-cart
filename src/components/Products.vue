<template>
  <div class="products">
      <div class="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
          alt="Simyaci"
        />
        <div>
          <h4>Simyaci</h4>
          <p>Yazar: Paulo Coelho</p>
          <p>Fiyat: &#8378; 19.99</p>
          <button class="btn btn-primary">Sepete Ekle</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Products',
  props: {
 
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
