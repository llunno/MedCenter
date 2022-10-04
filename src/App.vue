<template>
	<div id="app">
		<router-link to="/" aria-current="page" />
		<router-view />
	</div>
</template>

<script>
export default {
	name: "app",
};
</script>

<style>
@font-face {
	font-family: "Montserrat";
	src: local("Montserrat"), url("@/fonts/Montserrat-Medium.ttf") format("truetype");
}

@font-face {
	font-family: "Montserrat-Regular";
	src: local("Montserrat"), url("@/fonts/Montserrat-Regular.ttf") format("truetype");
}
</style>
