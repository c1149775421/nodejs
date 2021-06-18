<template>
    <div>

    </div>
</template>

<script>
export default {
    created(){
        if(this.$route.params.toPage==null){
            this.$router.replace("/")
        }
        alert(this.$route.params.message)
        this.$router.replace(this.$route.params.toPage)
    }
}
</script>

<style>

</style>