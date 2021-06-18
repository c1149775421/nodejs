<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">火星救援 The Martian</span>
			<span class="year">(2015)</span>
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
import Subject from '@/views/detail/Hxjy/Subject'
import Evaluation from '@/views/detail/Hxjy/Evaluation'
import Intro from '@/views/detail/Hxjy/Intro'
import Also from '@/views/detail/Hxjy/Also'
import Aside from '@/views/detail/Hxjy/Aside'
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
