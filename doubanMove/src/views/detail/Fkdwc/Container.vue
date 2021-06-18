<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">疯狂动物城 Zootopia</span>
			<span class="year">(2016)</span>
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
import Subject from '@/views/detail/Fkdwc/Subject'
import Evaluation from '@/views/detail/Fkdwc/Evaluation'
import Intro from '@/views/detail/Fkdwc/Intro'
import Also from '@/views/detail/Fkdwc/Also'
import Aside from '@/views/detail/Fkdwc/Aside'
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
