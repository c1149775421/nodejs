<template>
  <div id="main">
    <div id="left">
	<Rotate/>
	<Banner/>
	<Tab/>
	</div>
	<div id="aside">
	<Billboard/>
	<Contact/>
	</div>
	<Copyright/>
  </div>
</template>

<script>
import Rotate from '@/views/index/Rotate'
import Banner from '@/views/index/Banner'
import Tab from '@/views/index/Tab'
import Billboard from '@/views/index/Billboard'
import Contact from '@/views/index/Contact'
import Copyright from '@/components/Copyright'
export default {
  name: 'container',
	components: {
		Rotate,
		Banner,
		Tab,
		Billboard,
		Contact,
		Copyright
	}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/index.css';
</style>