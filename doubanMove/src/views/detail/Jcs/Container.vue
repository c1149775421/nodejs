<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">巨齿鲨 The Meg</span>
			<span class="year">(2018)</span>
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
import Subject from '@/views/detail/Jcs/Subject'
import Evaluation from '@/views/detail/Jcs/Evaluation'
import Intro from '@/views/detail/Jcs/Intro'
import Also from '@/views/detail/Jcs/Also'
import Aside from '@/views/detail/Jcs/Aside'
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
