<template>
  <!-- <BannerComponent /> -->
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
              <RouterLink class="nav-link" to="/member"
                >Member's Profile</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/member/events"
                >Events</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/member/activities"
                >Activities</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/member/aboutUs"
                >About Us</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/member/materials"
                >Materials</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/member/sponsorships"
                >Sponsorships</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/member/messages"
                >Messages</RouterLink
              >
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
<script setup>
// import BannerComponent from '../general/BannerComponent.vue'
</script>
<style scoped>
nav li.a.router-link-active,
nav li .router-link-exact-active {
  color: darkgreen;
  font-weight: bolder;
}
</style>
