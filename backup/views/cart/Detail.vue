<template>
    <div align="center">
        <h1>购物车的详情页面</h1>
        {{detailid}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            detailid: ''
        }
    },
    created(){
        console.log(this)
        // this.detailid=this.$route.params.id
        this.detailid=this.$route.params.detail
    }
}
</script>

<style scoped>

</style>