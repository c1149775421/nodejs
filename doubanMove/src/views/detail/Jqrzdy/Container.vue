<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">机器人总动员 WALL·E</span>
			<span class="year">(2008)</span>
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
import Subject from '@/views/detail/Jqrzdy/Subject'
import Evaluation from '@/views/detail/Jqrzdy/Evaluation'
import Intro from '@/views/detail/Jqrzdy/Intro'
import Also from '@/views/detail/Jqrzdy/Also'
import Aside from '@/views/detail/Jqrzdy/Aside'
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
