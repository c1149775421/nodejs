<template>
  <div>
      <button v-if="isRoot" @click="toBookUpdate" class="btn btn-lg btn-primary">修改图书</button>
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
        toBookUpdate(){
            this.$router.push('/bookUpdate')
        }
    }
}
</script>

<style>

</style>