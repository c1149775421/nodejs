<template>
	<div id="app">
		<Top />
       <router-view />
	</div>
</template>

<script>
import Top from '@/components/Top.vue'
	export default{
		components:{
			Top
		}
	}
</script>

<style lang="scss">
</style>
