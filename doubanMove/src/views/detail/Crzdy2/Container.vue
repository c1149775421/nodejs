<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">超人总动员2 Incredibles 2</span>
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
import Subject from '@/views/detail/Crzdy2/Subject'
import Evaluation from '@/views/detail/Crzdy2/Evaluation'
import Intro from '@/views/detail/Crzdy2/Intro'
import Also from '@/views/detail/Crzdy2/Also'
import Aside from '@/views/detail/Crzdy2/Aside'
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
