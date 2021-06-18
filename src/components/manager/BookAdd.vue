<template>
  <div class="container">
      <ToIndex /><br/>
      <label for="name">书名：</label>
      <input type="text" name="name" v-model="name"/>
      <br/>

      <label for="price">价格：</label>
      <input type="text" name="price" v-model="price"/>
      <br/>

      <label for="author">作者：</label>
      <input type="text" name="author" v-model="author"/>
      <br/>

      <label for="sales">销量：</label>
      <input type="text" name="sales" v-model="sales"/>
      <br/>

      <label for="stock">库存：</label>
      <input type="text" name="stock" v-model="stock"/>
      <br/>

      <!-- <label for="img_path">图片：</label>
      <input type="file" accept="image/*" name="img_path"/>
      <br/> -->
      <label for="img_path">图片：</label>
      <input type="text" name="img_path" v-model="img_path"/>
      <br/>

      <button @click="sub" class="btn btn-primary">添加</button>
  </div>
</template>

<script>
import ToIndex from '@/components/btns/ToIndex.vue'
export default {
    components:{
        ToIndex
    },
    data(){
      return{
        name:null,
        price:null,
        author:null,
        sales:null,
        stock:null,
        img_path:null
      }
    },
    methods:{
      sub(){
        console.log("test:"+localStorage.token);
        let that=this
        that.$axios.get("/managerBookAdd",{params:{
            token:localStorage.token,
            name:that.name,
            price:that.price,
            author:that.author,
            sales:that.sales,
            stock:that.stock,
            img_path:that.img_path
          }}
        )
        .then(
          function(res){
            console.log(res)
            if(res.data.success){
                alert(res.data.success)
                that.name=null
                that.price=null
                that.author=null
                that.sales=null
                that.stock=null
                that.img_path=null
            }
            if(res.data.error){
                alert(res.data.error)
            }
          },
          function(err){
            console.log(err)
          }
        )
      }
    }
}
</script>

<style>

</style>