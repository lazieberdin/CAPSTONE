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
  <BannerComponent />
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
              <RouterLink class="nav-link" to="/admin">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/admin/events"
                >Events</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/admin/activities"
                >Activities</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/admin/fndsInfo"
                >Foundations Info</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/admin/materials"
                >Materials</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/admin/sponsorships"
                >Sponsorships</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/members">Members</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/public">Log-out</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import BannerComponent from '../BannerComponent.vue'
</script>
<style scoped>
nav li.a.router-link-active,
nav li .router-link-exact-active {
  color: darkgreen;
  font-weight: bolder;
}
</style>
