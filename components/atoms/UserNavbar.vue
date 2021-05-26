<template>
    <nav class="navbar navbar-expand-lg navbar-primary bg-dark">
      <div class="container-fluid">
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
        <div class="collapse navbar-collapse" id="navbarNav">
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
        </div>
      </div>
    </nav>
</template>
<script>
export default {
}
</script>
