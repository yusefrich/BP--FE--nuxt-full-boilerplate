<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-dark">
    <div class="container-fluid ps-4">
      <a v-if="brand" class="navbar-brand" href="/">
        <img :src="brand" alt="" height="34">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse justify-content-between">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"><fa :icon="['fab', 'whatsapp']" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><fa :icon="['fab', 'instagram']" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><fa :icon="['fab', 'facebook']" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><fa :icon="['fab', 'twitter']" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><fa :icon="['fab', 'youtube']" /></a>
          </li>
        </ul>
        <ul class="navbar-nav float-end">
          <li class="nav-item">
            <a class="nav-link text-white" href="/register">Criar Conta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/reset">Esqueci a senha</a>
          </li>
          <li class="nav-item">
            <fut-login />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import FutLogin from '@/components/molecules/FutLogin'
export default {
  components: { FutLogin },
  props: {
    brand: {
      type: String,
      default: null
    }
  }
}
</script>
