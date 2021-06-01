<template>
    <nav style="background-color: #292c31;" class="navbar navbar-expand-lg navbar-primary bg-gray ">
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
              <a class="nav-link" href="#">Esportes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Jogos AoVivo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Melhores Listas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Só Futebol</a>
            </li>
          </ul>
          <div class="navbar-nav">
            <li class="nav-item">
              <div class="input-group ">
                <span class="input-group-text" id="basic-addon1"><fa :icon="['fas', 'search']" /></span>
                <input type="text" class="form-control" id="search-header" placeholder="Buscar">
              </div>
            </li>
            <li class="nav-item d-flex px-2">
              <fa class="text-primary mt-2 pt-2" :icon="['fas', 'circle']" />
              <a class="nav-link text-white" href="#">Regras Gerais</a>
            </li>
            <li class="nav-item d-flex px-2">
              <fa class="text-primary mt-2 pt-2" :icon="['fas', 'circle']" />
              <a class="nav-link text-white" href="#">Jogo Responsável</a>
            </li>
            <li class="nav-item d-flex px-2">
              <fa class="text-primary mt-2 pt-2" :icon="['fas', 'circle']" />
              <a class="nav-link text-white" href="#">Suporte</a>
            </li>
            <li class="nav-item d-flex px-2 mt-1">
              <fa class="text-secondary mt-2 pt-0" :icon="['fas', 'sync-alt']" />
              <a class="nav-link py-1" href="#">R$ 00,00</a>
            </li>
            <li class="nav-item d-flex px-2 mt-1">
              <button class="btn btn-primary text-uppercase"><strong>depositar</strong></button>
            </li>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
}
</script>
