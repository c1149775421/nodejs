<template>
  <div id="main">
    <div id="left">
		<h1>
        	<span class="movie-name">美女与野兽 Beauty and the Beast</span>
            <span class="year">(2017)</span>
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
import Subject from '@/views/detail/Mnyys/Subject'
import Evaluation from '@/views/detail/Mnyys/Evaluation'
import Intro from '@/views/detail/Mnyys/Intro'
import Also from '@/views/detail/Mnyys/Also'
import Aside from '@/views/detail/Mnyys/Aside'
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