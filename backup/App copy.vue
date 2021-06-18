<template>
	<div id="app">
		<NavBar/>
		<div class="content">
			<transition mode="out-in" name="fade">
                <router-view/>
            </transition>
		</div>
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar.vue'
	export default{
		components:{
			NavBar,
		},
		methods:{

		}
	}
</script>

<style lang="scss">
    .active,.router-link-exact-active{
        font-weight: bold;
        background: lightyellow;
        color:red;
        padding: 5px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>
