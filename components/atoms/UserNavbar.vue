<template>
    <nav class="navbar navbar-expand-lg navbar-primary bg-dark">
      <div class="container-fluid ps-4">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
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
              <a class="nav-link text-white" href="#">Criar Conta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Esqueci a senha</a>
            </li>
            <li class="nav-item">
              <input type="email" class="form-control" id="email-login">
            </li>
            <li class="nav-item">
              <input type="password" class="form-control" id="email-password">
            </li>
            <li class="nav-item">
              <button class="btn btn-primary text-uppercase font-weight-bold"><strong>log in</strong></button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
</template>
<script>
export default {
}
</script>
