<template>
  <div id="main">
    <div id="left">
		<h1>
        	<span class="movie-name">飞屋环游记 Up</span>
            <span class="year">(2009)</span>
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
import Subject from '@/views/detail/Fwhyj/Subject'
import Evaluation from '@/views/detail/Fwhyj/Evaluation'
import Intro from '@/views/detail/Fwhyj/Intro'
import Also from '@/views/detail/Fwhyj/Also'
import Aside from '@/views/detail/Fwhyj/Aside'
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