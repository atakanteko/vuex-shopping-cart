<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-jw" style="padding:0px;font-size:24px">
    <div><h2 class="title">Alışveriş Sepeti</h2></div>

    <div class="collapse navbar-collapse" id="appnav">
      <div class="nav navbar-nav">
        <router-link
          to="home"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Kitap Listesi
        </router-link>
        <router-link
          to="cart"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Sepetim
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
nav{
    display: flex;
    align-content: space-between;
    justify-content: space-between;
}
.title{
    color:steelblue
}
</style>