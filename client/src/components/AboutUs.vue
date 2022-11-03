<!-- @format -->

<template>
	<BannerComponent />

	<RouterView />
	<P>welcome to about us page</P>
	<!-- Vision -->
	<div></div>
	<!-- Mission -->
	<div></div>
	<!-- History -->
	<!-- Other detail if any -->

	<!-- directors corner -->
	<div></div>
	<RouterView />
	<NELPJFooter />
</template>
<script setup>
	import BannerComponent from "../components/AboutUs.vue";
	import NELPJFooter from "../components/NELPJFooter.vue";

	let vision =
		"The New Earth of Love, Peace and Joy where Jesus is King because Mother Mary is greatly loved, beginning from the Philippines.";
	let mission =
		"To spread the prayer and practice of Total Consecration to Jesus thru Mary as the foundation of love--the Revolution of Love--- that will give rise to works of love that will transform the Philippines and then the world into God’s Kingdom on earth : The New Earth of Love Peace and Joy.";
</script>
<style></style>
