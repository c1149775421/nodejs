<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">复仇者联盟 The Avengers</span>
			<span class="year">(2012)</span>
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
import Subject from '@/views/detail/Fczlm/Subject'
import Evaluation from '@/views/detail/Fczlm/Evaluation'
import Intro from '@/views/detail/Fczlm/Intro'
import Also from '@/views/detail/Fczlm/Also'
import Aside from '@/views/detail/Fczlm/Aside'
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
