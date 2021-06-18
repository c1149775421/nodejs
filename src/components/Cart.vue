<template>
  <div align="center">
    <table v-if="list.length > 0" cellpadding="10" cellspacing="0" style="width:50%;margin-top:20px;">
      <tr>
        <th>序号</th>
        <th>商品名称</th>
        <th>商品单价</th>
        <th>商品数量</th>
        <th>操作</th>
      </tr>

      <tr
        v-for="(item, index) in list"
        :key="index"
        :class="{ action1: index % 2 != 0, action2: index % 2 == 0 }"
      >
        <td>{{ item.id }}</td>
        <td @click="getDetail(item.id)">{{ item.name }}</td>
        <td>{{ item.price | formatPrice }}</td>
        <td>
          <button @click="countDel(index)" :disabled="item.num <= 0">-</button>
          {{ item.num }}
          <button @click="countAdd(index)">+</button>
        </td>
        <td><button @click="remove(index)">删除</button></td>
      </tr>

      <tr>
        <td colspan="5" style="text-align: right">
          总价：￥{{ totalPrice | formatPrice }} (元)
        </td>
      </tr>

      <tr align="center">
        <td colspan="5">
            <button style="margin:10px;font-size:20px;" class="btn btn-primary" @click="accounts">结账</button>
        </td>
      </tr>
    </table>
    <div v-else style="margin:50px;font-size:20px;">购物车为空</div>
    <ToIndex />
  </div>
</template>

<script>
import ToIndex from '@/components/btns/ToIndex.vue'
export default {
  components:{
      ToIndex
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    let arr = JSON.parse(localStorage.getItem("localCarts"));
    // console.log(arr);
    for (const key in arr) {
      if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        this.list.push(element);
      }
    }
  },
  computed: {
    totalPrice() {
      var total = 0;
      for (var i = 0; i < this.list.length; i++) {
        total += this.list[i].price * this.list[i].num;
      }
      localStorage.setItem('totalPrice',total)
      return total;
    },
  },
  filters: {
    formatPrice(value) {
      return value.toFixed(2);
    },
  },
  methods: {
    countAdd(index) {
      this.list[index].num += 1;
      this.setLocalCarts();
    },
    countDel(index) {
      if (this.list[index].num <= 0) {
        return;
      }
      this.list[index].num -= 1;
      this.setLocalCarts();
    },
    remove(index) {
      let isConfirm = confirm("确定删除该商品吗？")
      if(isConfirm==false){
          return
      }
      this.list.splice(index, 1);
      this.setLocalCarts();
    },
    setLocalCarts() {
      let arr = {};
      for (const key in this.list) {
        if (Object.hasOwnProperty.call(this.list, key)) {
          const element = this.list[key];
          // console.log(element);
          arr[element.id] = {
            id: element.id,
            name: element.name,
            author: element.author,
            price: element.price,
            sales: element.sales,
            stock: element.stock,
            num: element.num,
          };
        }
      }
      localStorage.setItem("localCarts", JSON.stringify(arr));
      // console.log(JSON.parse(localStorage.getItem("localCarts")));
    },
    accounts(){
        let arr = {}
        for (const key in this.list) {
          if (Object.hasOwnProperty.call(this.list, key)) {
            const element = this.list[key];
            if(element.num<=0){
              arr[element.id] = element
            }
          }
        }
        localStorage.setItem('localCarts',JSON.stringify(arr))
        this.$router.push('/selectAccounts')
    }
  }
};
</script>

<style lang="scss" scoped>
.action1 {
  background-color: lightgray;
}
.action2 {
  background-color: yellow;
}
</style>