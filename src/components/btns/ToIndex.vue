<template>
  <div>
      <button @click="toIndex" class="btn btn-lg btn-success">返回</button>
  </div>
</template>

<script>
export default {
    methods:{
        toIndex(){
            this.$router.back()
        }
    }
}
</script>

<style>

</style>