<template>
    <div>
        <div class="out">
            <div class="search">
                <input type="text" class="input" v-model="inputvalue" @keyup.enter="add">
                <input type="button" class="btn" value="评论" @click="add">
            </div>

            <div class="row" v-for="(item,index) in list" :key="index">
                {{item}}
                <div class="close" @click="del(index)">×</div>
            </div>

            <div class="num" v-if="list.length>0">
                共有<b>{{list.length}}</b>条评论
            </div>

            <div class="comment" v-else>
                暂无评论
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputvalue:'',
            list:["这是一条内容1","这是一条内容2"]
        }
    },
    methods:{
        add(){
            this.list.push(this.inputvalue)
            this.inputvalue=''      
        },
        del(index){
            this.list.splice(index,1)
        }
    }
}
</script>

<style scoped>
    .out{
        width: 550px;
        min-height: 200px;
        border: 1px solid #eee;
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        margin: 100px auto;
        padding: 30px;
    }
    .search{
        display: flex;
        padding-bottom: 30px;
    }
    .search .input{
        width: 80%;
        height: 36px;
        border: none;
        background-color: #eee;
        border-radius: 3px;
        padding: 0 10px;
        /* 点击光标后的外轮廓 */
        outline: none;
    }
    .search .btn{
        width: 20%;
        height: 36px;
        border: none;
        background-color: #4fc08d;
        color: #fff;
        /* 点击光标后的外轮廓 */
        outline: none;
        /* 设置鼠标形状 */
        cursor: pointer;
    }
    .row{
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        height: 40px;
        line-height: 40px;
        display: flex;
    }
    .row .close{
        color: #ff976a;
        padding-left: 400px;
        display: none;
        /* 设置鼠标形状 */
        cursor: pointer;
    }
    .row:hover .close{
        display: block;
    }
    .num{
        padding-top: 20px;
        text-align: center;
    }
    .comment{
        text-align: center;
    }
</style>