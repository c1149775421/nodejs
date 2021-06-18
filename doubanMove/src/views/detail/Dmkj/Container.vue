<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">盗梦空间 Inception</span>
			<span class="year">(2010)</span>
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
import Subject from '@/views/detail/Dmkj/Subject'
import Evaluation from '@/views/detail/Dmkj/Evaluation'
import Intro from '@/views/detail/Dmkj/Intro'
import Also from '@/views/detail/Dmkj/Also'
import Aside from '@/views/detail/Dmkj/Aside'
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
