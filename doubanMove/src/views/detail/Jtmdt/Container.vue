<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">惊天魔盗团 Now You See Me</span>
			<span class="year">(2013)</span>
    	</h1>
	<Subject/>
	<Evaluation/>
	<Intro/>
	<Also/>
	</div>
	<div id="aside">
	<Aside/>
	</div>
	<Copyright/>
  </div>
</template>

<script>
import Subject from '@/views/detail/Jtmdt/Subject'
import Evaluation from '@/views/detail/Jtmdt/Evaluation'
import Intro from '@/views/detail/Jtmdt/Intro'
import Also from '@/views/detail/Jtmdt/Also'
import Aside from '@/views/detail/Jtmdt/Aside'
import Copyright from '@/components/Copyright'
export default {
  name: 'container',
	components: {
		Subject,
		Evaluation,
		Intro,
		Also,
		Aside,
		Copyright
	}
}
</script>
<style lang="scss">
@import '~@/assets/css/score.css';
</style>
