<template>
  <div class="cart">
    <h3>Toplam Sepet Tutarı: &#8378;19.99</h3>
      <div class="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
          alt="Simyacı"
        />
        <div>
          <h4>Simyaci</h4>
          <p>Yazar: Paulo Coelho</p>
          <p>Fiyat: &#8378;19.99</p>
          <p>Toplam: &#8378;19.99</p>
          <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
          <button class="btn btn-warning">-</button>
          <button class="btn btn-primary">Sepetten Çıkar</button>
          <button class="btn btn-warning">+</button>
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
