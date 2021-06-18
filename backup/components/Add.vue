<template>
    <div align="center">
        <input type="text" v-model="username" @keyup.enter="add">
        <button @click="add">添加</button><br/>
        <div v-if="show">{{listChange}}</div>
        <ul class="list1">
            <transition-group name="fade" tag="div">
                <li v-for="(item,index) in arrs" :key="item" v-show="item.show">
                    {{item.value}} <button @click="del(index)">删除</button>
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',//输入值
            arrs:[],//原数组
            listChange:[],//新数组
            show:false//新数组的显示状态
        }
    },
    methods:{
        //添加方法
        add(){
            //把输入的值赋给value，显示状态为true
            this.arrs.push({value:this.username,show:true});
            //清空输入框的内容
            this.username='';
            //调用显示方法
            this.setListChange();
        },
        //删除方法
        del(index){
            //原数组对应的值，把显示状态改为false
            this.arrs[index].show=false;
            //调用显示方法
            this.setListChange();
        },
        //显示方法
        setListChange(){
            //指定为空数组，防止数组的值叠加成两倍
            //每次调用方法都会清空新数组，根据原数组的状态true和false来判断是否显示
            this.listChange=[];
            //循环原数组，赋给变量element
            this.arrs.forEach(element => {
                //如果显示状态为true
                if(element.show==true){
                    //把输入的值添加到新数组中
                    this.listChange.push(element.value);
                }
            })
            //如果新数组的长度小于或等于0
            if(this.listChange.length<=0){
                //不显示
                this.show=false
            }else{
                //否则，显示
                this.show=true
            }
            // console.log(this.listChange)
        }
    }
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active{
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.list1 li{
    list-style: none;
}
</style>