<template>
  <div>
    <div class="footer-menu-sponsor justify-content-center">
      <div class="content-container">
        <img src="/img/visa-logo.png" height="30" width="auto" alt="">
        <img src="/img/mastercard.png" height="30" width="auto" alt="">
        <img src="/img/neteller.png" height="30" width="auto" alt="">
        <img src="/img/skrill.png" height="30" width="auto" alt="">
        <img src="/img/ecoPayz.png" height="30" width="auto" alt="">
        <img src="/img/boleto.png" height="30" width="auto" alt="">
        <img src="/img/astropay.png" height="30" width="auto" alt="">
      </div>
    </div>
    <div class="footer-menu-sponsor justify-content-center">
      <p class="text-white align-self-center pt-2 pe-4">Powered by FDS Software. Todos os direitos Reservados. Jogue com Responsabilidade.</p>
      <div class="bg-primary rounded-circle age-restriction">
        <h3 class="text-white">+18</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import "@/assets/layout/variables";
.footer-menu-sponsor {
  padding-top: 20px;
  padding-bottom: 20px;
  background: $gray-800;
  display: flex;
}
.age-restriction{
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  h3{
    align-self: center;
  }
}
.content-container {
  img{
    filter:  brightness(0) invert(1);
    margin-left: 20px;
    margin-right: 20px;
    display: inline;
  }
}
a{
    padding-left: 15px;
    line-height: 3rem;
}
</style>
