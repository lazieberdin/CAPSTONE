<template>
  <div class="row col-md-12 d-lg-block text-center">
    <RouterLink class="navbar-brand" to="/">
      <img :src="imgPath" style="max-width: 100%; height: auto" />
    </RouterLink>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue'

const imgPath = ref('')

const data = ref(window.innerWidth)

onBeforeMount(() => {
  imgPath.value = getImgPath()
})

const resizeEvent = (e) => {
  // data.value = window.innerWidth
  imgPath.value = getImgPath()
}

const getImgPath = () => {
  return window.innerWidth >= 1024
    ? './src/assets/nelpj1920x150.png'
    : './src/assets/nelpj.png'
}

window.addEventListener('resize', resizeEvent)
</script>
<style></style>
