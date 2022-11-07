<template>
  <BannerComponent />
  <VisitorMenus />
  <RouterView />
  <NELPJFooter />
</template>
<script setup>
import VisitorMenus from '../components/visitor/VisitorMenus.vue'
import BannerComponent from '../components/general/BannerComponent.vue'
import NELPJFooter from '../components/NELPJFooter.vue'
</script>
<style></style>
