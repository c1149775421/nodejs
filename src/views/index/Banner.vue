<template>
  <div id="banner">
    <div id="box">
      <ul class="list">
        <transition-group name="fade" tag="div">
          <li v-for="(item, i) in banners" :key="item">
            <img v-if="i + 1 == index ? true : false" :src="item" />
          </li>
        </transition-group>
      </ul>

      <ul class="count">
        <li
          @mouseover="change(num)"
          v-for="num in 4"
          :key="num"
          :class="{ current: num == index }"
        >
          {{ num }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      banners: [
        require("@/assets/images/ad1.png"),
        require("@/assets/images/ad2.png"),
        require("@/assets/images/ad3.png"),
        require("@/assets/images/ad4.png"),
      ],
      index: 1,
      timer: "",
      flag: true,
    };
  },
  methods: {
    next() {
      this.index = this.index + 1 == 5 ? 1 : this.index + 1;
    },
    change(num) {
      if (this.flag) {
        this.flag = false;

        setTimeout(() => {
          this.flag = true;
        }, 1000);

        this.index = num;
        clearTimeout(this.timer);
        this.timer = setInterval(this.next, 3000);
      }
    },
  },
  computed: {
    //计算属性
  },
  mounted() {
    this.timer = setInterval(this.next, 3000);
  },
};
</script>


<style lang="scss">
#box ul li {
  list-style: none;
}
#box {
  width: 100%;
  height: 455px;
  // background: #fff;
  border-radius: 5px;
  position: relative;
  border-top:2px solid  #d2364c;
  margin-top: 45px;
}
#box .list {
  position: relative;
  height: 455px;
}
#box .list li {
  position: absolute;
  left: -100px;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  margin: auto;
  margin-top: 0;
}
#box img {
  width: 96%;
}
#box .count {
  position: absolute;
  left: 650px;
  bottom: 20px;
}
#box .count li {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: #6d6b6a;
  color: #fff;
  text-align: center;
  line-height: 20px;
  opacity: 0.7;
  margin-right: 5px;
  overflow: hidden;
}
#box .count li.current {
  color: #fff;
  font-weight: bold;
  background: #f00;
  opacity: 0.7;
  transition: all 3s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
