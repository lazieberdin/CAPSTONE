<template>
<div class="row col-md-12 d-none d-lg-block text-center">
    <RouterLink class="navbar-brand" to="/">
      <img src="src/assets/nelpjBanner.png" />
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
              <RouterLink class="nav-link" to="/admin">Member's Profile</RouterLink>
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
              <RouterLink class="nav-link" to="/members">Messages</RouterLink>
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
<script></script>
<style scoped>
nav li.a.router-link-active,
nav li .router-link-exact-active {
  color: darkgreen;
  font-weight: bolder;
}
</style>
