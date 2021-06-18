<template>
  <div id="main">
    <div id="left">
		<h1>
        	<span class="movie-name">头号玩家 Ready Player One</span>
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
import Subject from '@/views/detail/Thwj/Subject'
import Evaluation from '@/views/detail/Thwj/Evaluation'
import Intro from '@/views/detail/Thwj/Intro'
import Also from '@/views/detail/Thwj/Also'
import Aside from '@/views/detail/Thwj/Aside'
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