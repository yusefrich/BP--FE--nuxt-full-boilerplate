<template>
  <div class="game-card">
    <div class="game-card-header d-flex bg-dark justify-content-between">
      <div class="d-flex">
        <fa class="icon text-primary" :icon="['fas', 'futbol']" />
        <div>
          <h5 class="mb-0 text-primary">Campeonato Brasileiro A</h5>
          <p class="mb-0"><small class="text-primary">Futebol - Brasil</small></p>
        </div>
      </div>
      <h5 class="text-white pt-2 pe-3">17:00</h5>
    </div>
    <div class="text-center text-container">
      <h3 class="text-white">Flamengo X Palmeiras</h3>
      <div class="d-flex justify-content-between px-4 pt-2">
        <button class="btn text-white btn-bet px-4"> <span>1</span> 1.35 </button>
        <button class="btn text-white btn-bet px-4"> <span>X</span> 4.75 </button>
        <button class="btn text-white btn-bet px-4"> <span>2</span> 7.75 </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  @import "@/assets/layout/variables";
  .btn-bet{
    border: 1px solid $white;
    border-radius: 5px;
    span{
        background: $white;
        color: $black;
        padding: 0px 6px;
        border-radius: 100px;
    }
  }
  .text-container{
    margin-top: 40px;
  }
  .game-card{
    width: 400px !important;
    margin-right: 10px;
    height: 200px;
    border-radius: 10px;
    border: 1px solid $white;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/campo.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    .game-card-header{
        border-radius: 10px 10px 0px 0px;
        border-bottom: 1px solid $white;
        .icon{
            font-size: 30px;
            margin-right: 10px;
            margin: 10px;
        }
    }
  }
</style>
