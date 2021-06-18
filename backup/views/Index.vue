<template>
    <div>
        <h1 align="center">
            这是我的首页
        </h1>
        {{str}}
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState({
            str:state=>state.home.str
        })
    },
}
</script>

<style scoped>

</style>