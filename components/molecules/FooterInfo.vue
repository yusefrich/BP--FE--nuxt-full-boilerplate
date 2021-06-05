<template>
  <div class="footer-menu justify-content-center">
    <div class="content-container">
      <div class="row">
        <div class="col-4">
          <h3 class="text-white">Regulamento</h3>
          <a class="text-white text-decoration-none d-block" href="#">Jogo Responsável</a>
          <a class="text-white text-decoration-none d-block" href="#">Termos e condições</a>
          <a class="text-white text-decoration-none d-block" href="#">Regras de Apostas</a>
          <a class="text-white text-decoration-none d-block" href="#">Depósitos e Saques</a>
          <a class="text-white text-decoration-none d-block" href="#">Política de Privacidade</a>
          <a class="text-white text-decoration-none d-block" href="#">Política de Cookies</a>
        </div>
        <div class="col-4">
          <h3 class="text-white">Ajuda</h3>
          <a class="text-white text-decoration-none d-block" href="#">FAQ</a>
          <a class="text-white text-decoration-none d-block" href="#">Entre em Contato</a>
          <a class="text-white text-decoration-none d-block" href="#">Sobre Nós</a>
          <a class="text-white text-decoration-none d-block" href="#">Afiliados</a>
        </div>
        <div class="col-4">
          <h3 class="text-white">Siga-nos</h3>
          <a class="text-white text-decoration-none d-block" href="#"><fa class="me-2" :icon="['fab', 'facebook']" />Facebook</a>
          <a class="text-white text-decoration-none d-block" href="#"><fa class="me-2" :icon="['fab', 'instagram']" />Instagram</a>
          <a class="text-white text-decoration-none d-block" href="#"><fa class="me-2" :icon="['fab', 'twitter']" />Twitter</a>
          <a class="text-white text-decoration-none d-block" href="#"><fa class="me-2" :icon="['fab', 'youtube']" />Youtube</a>
          <a class="text-white text-decoration-none d-block" href="#"><fa class="me-2" :icon="['fab', 'whatsapp']" />Whastapp</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import "@/assets/layout/variables";
.footer-menu {
  padding-top: 80px;
  padding-bottom: 80px;
  background: $gray-900;
  display: flex;
}
.content-container {
  max-width: 800px;
  width: 100%;
}
h3{
    border-left: 4px solid $primary;
    padding-left: 10px;
    font-weight: bold;
}
a{
    padding-left: 15px;
    line-height: 3rem;
}
</style>
