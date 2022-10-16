<!--
Copyright ©

All files, resources, and documentation presented in the entire project are licensed under the terms specified in the file named "LICENSE" under the project root directory.

Copyright holders and authorship:

Lucas Nogueira <https://github.com/llunno>;
Matias Reinke <https://github.com/MatyOS25>;
Bruno Rudy <https://github.com/BK-Rudy>;
Pedro Fonseca <https://github.com/pefonseca>;

Attribution Required.
-->

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
</style>
