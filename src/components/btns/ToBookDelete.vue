<template>
  <div>
      <button v-if="isRoot" @click="toBookDelete" class="btn btn-lg btn-primary">删除图书</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isRoot: false
        }
    },
    mounted(){
        this.$isRoot((res)=>{
            if(res.data.isRoot=="0"){
                this.isRoot = false
            }else if(res.data.isRoot=="1"){
                this.isRoot = true
            }
        },(err)=>{
            console.log(err)
        })
    },
    methods:{
        toBookDelete(){
            this.$router.push('/bookDelete')
        }
    }
}
</script>

<style>

</style>