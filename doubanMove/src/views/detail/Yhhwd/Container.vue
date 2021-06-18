<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">银河护卫队 Guardians of the Galaxy</span>
			<span class="year">(2014)</span>
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
import Subject from '@/views/detail/Yhhwd/Subject'
import Evaluation from '@/views/detail/Yhhwd/Evaluation'
import Intro from '@/views/detail/Yhhwd/Intro'
import Also from '@/views/detail/Yhhwd/Also'
import Aside from '@/views/detail/Yhhwd/Aside'
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
