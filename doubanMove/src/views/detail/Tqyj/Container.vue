<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">通勤营救 The Commuter</span>
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
import Subject from '@/views/detail/Tqyj/Subject'
import Evaluation from '@/views/detail/Tqyj/Evaluation'
import Intro from '@/views/detail/Tqyj/Intro'
import Also from '@/views/detail/Tqyj/Also'
import Aside from '@/views/detail/Tqyj/Aside'
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
