<template>
    <div>
        <Cate :list="listData"/>
    </div>
</template>

<script>
import Cate from './Cate.vue'
export default {
    components:{
        Cate
    },
    data(){
        return{
            listData:[
                {
                    id:1,
                    name:'羽毛球',
                    price:200,
                    count:1
                },
                {
                    id:2,
                    name:'足球',
                    price:300,
                    count:1
                },
                {
                    id:3,
                    name:'乒乓球',
                    price:400,
                    count:1
                },
                {
                    id:4,
                    name:'篮球',
                    price:500,
                    count:1
                }
            ]
        }
    }
}
</script>