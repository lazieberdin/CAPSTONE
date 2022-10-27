<template>
  <!-- <title>NELPJ</title>
    <img alt="Vue logo" class="logo" src="@/assets/icon192x192.png" />
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1"
          ><RouterLink to="/">SampleRoute</RouterLink></span
        >
      </div>
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1"
          ><RouterLink to="/">Navbar</RouterLink></span
        >
      </div>
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1"
          ><RouterLink to="/">OPtions</RouterLink></span
        >
      </div>
    </nav> -->
  <div class="row col-md-12 d-none d-lg-block text-center">
    <RouterLink class="navbar-brand" to="/">
      <img src="src/assets/nelpj.jpg" />
    </RouterLink>
  </div>
  <div class="row col-md-12 d-block d-sm-block d-md-none text-center">
    <RouterLink class="navbar-brand" to="/">
      <img src="src/assets/nelpj-small.jpg" />
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
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Events</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Activities</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Foundations Info</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Materials</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Sponsorships</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Members</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Log-out</RouterLink>
            </li>
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
