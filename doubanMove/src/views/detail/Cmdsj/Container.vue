<template>
  <div id="main">
    <div id="left">
		<h1>
			<span class="movie-name">楚门的世界 The Truman Show</span>
			<span class="year">(1998)</span>
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
import Subject from '@/views/detail/Cmdsj/Subject'
import Evaluation from '@/views/detail/Cmdsj/Evaluation'
import Intro from '@/views/detail/Cmdsj/Intro'
import Also from '@/views/detail/Cmdsj/Also'
import Aside from '@/views/detail/Cmdsj/Aside'
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
