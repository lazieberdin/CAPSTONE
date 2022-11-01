<template>
  <div class="row col-md-12 d-none d-lg-block text-center">
    <RouterLink class="navbar-brand" to="/">
      <img src="src/assets/nelpj1920x150.png" />
    </RouterLink>
  </div>
  <div class="row col-md-12 d-block d-sm-block d-md-none text-center">
    <RouterLink class="navbar-brand" to="/">
      <img src="src/assets/logo.png" />
    </RouterLink>
  </div>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="row">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Landingpage">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/visitor/Testimonials">Testimonials</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/visitor/Prayers">Prayers</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/visitor/BePartOfUs">Be part of us</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Materials">Materials</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/AboutUs">About Us</RouterLink>
            </li>
            <!-- <li class="nav-item">
              <RouterLink class="nav-link" to="/">Log-in</RouterLink>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script></script>
<style scoped>
nav li.a.router-link-active,
nav li .router-link-exact-active {
  color: darkgreen;
  font-weight: bolder;
}
</style>
