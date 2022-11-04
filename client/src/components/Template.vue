<template>
  <BannerComponent />
  <HeaderVisitor />
  <RouterView />
  <NELPJFooter />
</template>
<script setup>
import HeaderVisitor from '../components/visitor/HeaderVisitor.vue'
import BannerComponent from '../components/BannerComponent.vue'
import NELPJFooter from '../components/NELPJFooter.vue'
</script>
<style></style>
