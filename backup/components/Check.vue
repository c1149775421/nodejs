<template>
    <div>
        <input type="text" v-model="inputvalue" @keyup.enter="inputvalueClear">
        <p>{{inputvalue}}</p>
        <textarea cols="30" rows="10" v-model="textvalue" @keyup.enter="textvalueClear"></textarea>
        <p>{{textvalue}}</p>
        <input type="checkbox" v-model="checked" id="ty"><label for="ty">点击表示您同意商城的《服务协议》</label>
        {{checked}}
        <br /><br />
        爱好：
        <input type="checkbox" value="看书" v-model="checks" id="book"><label for="book">看书</label>
        <input type="checkbox" value="看电影" v-model="checks" id="move"><label for="move">看电影</label>
        <input type="checkbox" value="听音乐" v-model="checks" id="music"><label for="music">听音乐</label>
        <input type="checkbox" value="打游戏" v-model="checks" id="game"><label for="game">打游戏</label>
        <p v-if="checks.length>0">
            {{checks}}
        </p>
        <br /><br />
        性别：
        <input type="radio" value="男" v-model="sex" id="boy"><label for="boy">男</label>
        <input type="radio" value="女" v-model="sex" id="girl"><label for="girl">女</label>
        <input type="radio" value="保密" v-model="sex" id="baomi"><label for="baomi">保密</label>
        <p>{{sex}}</p>
        学历：
        <select name="" id="" v-model="select">
            <option value="">请选择</option>
            <option value="大专">大专</option>
            <option value="本科">本科</option>
            <option value="研究生">研究生</option>
            <option value="博士">博士</option>
        </select>
        <p>{{select}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputvalue:'',
            textvalue:'',
            checked:false,
            checks:[],
            sex:'保密',
            select:''
        }
    },
    methods:{
        inputvalueClear(){
            this.inputvalue=''
        },
        textvalueClear(){
            this.textvalue=''
        }
    }
}
</script>