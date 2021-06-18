<template>
  <div id="main">
    <div id="left">
		<h1>
        	<span class="movie-name">摩天营救 Skyscraper</span>
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
import Subject from '@/views/detail/Mtyj/Subject'
import Evaluation from '@/views/detail/Mtyj/Evaluation'
import Intro from '@/views/detail/Mtyj/Intro'
import Also from '@/views/detail/Mtyj/Also'
import Aside from '@/views/detail/Mtyj/Aside'
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