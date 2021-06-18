<template>
	<div id="app">
        <div class="out1">
            <div class="box1" v-for="(item,index) in list" :key="index">
                <img :src="item.picurl" alt="图片丢失">
                <div class="text1">
                    <h3>{{item.title}}</h3>
                    <p>{{item.author}}</p>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default{
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            let that=this
            that.$axios.get('https://ku.qingnian8.com/school/list.php')
            .then(
                function(res){
                    console.log(res)
                    that.list=res.data
                },
                function(err){
                    console.log(err)
                }
            )
        }
	}
</script>

<style lang="scss">
    *{
        padding: 0;
        margin: 0;
    }
    .out1{
        width: 500px;
        border: 1px solid #ccc;
        padding: 10px;
        margin: 50px auto;
    }
    .box1{
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
        display: flex;
        img{
            width: 150px;
            height: 100px;
        }
        .text1{
            padding-left: 20px;
            p{
                padding-top: 40px;
            }
        }
    }
</style>
