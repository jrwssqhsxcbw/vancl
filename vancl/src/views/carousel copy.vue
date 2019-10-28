<template>
  <div class="w1200" @mouseenter="enter" @mouseleave="leave">
    <ul :class="tran" :style="ulStyle">
      <a href="javascript:;" class="prev" @click="moveTo(-1)"></a>
      <a href="javascript:;" class="next" @click="moveTo(+1)"></a>
      <li v-for="(item,index) of listImg" :key="index">
        <img :src="item.url" alt />
      </li>
      <ul class="dian">
        <li
          v-for="(item,idx) in dian"
          :key="idx"
          :class="idx==index?'active':''"
          @click="move(idx)"
        ></li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { setTimeout, setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      listImg: [
        { url: require("../../public/img/1.jpg") },
        { url: require("../../public/img/2.jpg") },
        { url: require("../../public/img/3.jpg") },
        { url: require("../../public/img/4.jpg") },
        { url: require("../../public/img/5.jpg") },
        { url: require("../../public/img/1.jpg") }
      ],
      i: 0,
      m: 0,
      tran: "tran",
      canclick: true,
      liclick:true,
      time: ''
    };
  },
  methods: {
    moveTo(to) {
      if (this.canclick) {
        this.canclick = false;
        setTimeout(() => {
          this.canclick = true;
        }, 500);
        this.i += to;
        if (this.i == -1) {
          this.tran = "";
          this.i = this.listImg.length - 1;
          setTimeout(() => {
            if (this.i == this.listImg.length - 1) {
              this.tran = "tran";
              this.i = this.listImg.length - 2;
            }
          }, 50);
        } else if (this.i == this.listImg.length) {
          this.tran = "";
          this.i = 0;
          setTimeout(() => {
            if (this.i == 0) {
              this.tran = "tran";
              this.i = 1;
            }
          }, 50);
        }
      }
    },
    move(n) {
      if(this.liclick){
        this.liclick=false;
        setTimeout(()=>{
          this.liclick=true
        },500)
        this.i = 0;
        this.moveTo(n);
      }
    },
    leave() {
      this.time = setInterval(() => {
        this.moveTo(1);
      }, 2000);
    },
    enter() {
      clearInterval(this.time);
    }
  },
  computed: {
    ulStyle() {
      var width = 1200 * this.listImg.length + "px";
      var marginLeft = -this.i * 1200 + "px";
      return { width, marginLeft };
    },
    dian() {
      return this.listImg.length - 1;
    },
    index() {
      var c = this.i;
      if (this.i == 5) {
        c = 0;
      }
      return c;
    }
  }
};
</script>

<style scoped>
.w1200 {
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}
ul.tran {
  transition: margin-left 0.5s linear;
}
ul > li {
  list-style: none;
  float: left;
}
a {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 10;
  opacity: 0.6;
}
.prev {
  top: 230px;
  left: 20px;
  background: url(../../public/img/previous.png) no-repeat center center;
}
.next {
  top: 230px;
  left: 1080px;
  background: url(../../public/img/next.png) no-repeat center center;
}
.dian {
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -100px;
}
.dian > li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 20px;
}
li.active {
  background-color: red;
}
</style>
