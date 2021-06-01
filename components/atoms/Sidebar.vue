<template>
  <div>
    <div class="img-container">
      <img
        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
        width="80%"
        height="auto"
        alt=""
      />
    </div>
    <ul class="list-unstyled ps-0">
      <li class="mb-1 section-container">
        <p class="section-title mb-0">
          Filtrar período
        </p>
        <div class="slider-holder p-2">
          <label for="customRange1" class="form-label text-center text-primary w-100">Próximos eventos</label>
          <input type="range" class="form-range" min="0" max="4" id="customRange1">
          <div class="d-flex justify-content-between">
            <p class="text-white">Todos</p>
            <p class="text-white">3d</p>
            <p class="text-white">1d</p>
            <p class="text-white">3hrs</p>
            <p class="text-white">1hr</p>
          </div>
        </div>
      </li>
      <li class="mb-1 section-container">
        <button
          class="btn section-title btn-dark align-items-start text-start rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#home-collapse"
          aria-expanded="true"
        >
          <fa class="text-primary" :icon="['far', 'futbol']" /> futebol
        </button>
        <div class="collapse show m-0" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li class="section-link"><a href="#" class="link-light btn btn-block text-start rounded text-decoration-none ">Brasil</a></li>
            <li class="section-link"><a href="#" class="link-light btn btn-block text-start rounded text-decoration-none ">Canada</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import "@/assets/layout/variables";
.slider-holder{
    background: $gray-800;

}
.section-container{
  margin-top: 3px;
  margin-bottom: 3px;

  .section-title{
    background: $black;
    width: 100%;
    color: $white;
    padding: 7px;
    border-left: 3px solid $primary;
  }
  .section-link{
    margin-top: 5px;
    margin-bottom: 5px;
    background: $gray-800;
    a{
      width: 100%;
    }
  }
}
.img-container {
  /* ff8f0d */ /* ffb710 */
  background: rgb(255, 143, 13);
  background: linear-gradient(
    0deg,
    rgba(255, 143, 13, 1) 0%,
    rgba(255, 183, 16, 1) 100%
  );
  min-height: 112px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
