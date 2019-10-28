<template>
  <div class="w1200">
    <ul class="pics" @mouseenter="Ent" @mouseleave="Lea">
      <a href="javascript:;" class="prev" @click="move(-1)"></a>
      <a href="javascript:;" class="next" @click="move(1)"></a>
      <li v-for="(item,index) of imglist" :key="index" :class="index==i?'active':''">
        <img :src="item.url" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import { setTimeout, setInterval, clearInterval, setImmediate } from "timers";
export default {
  data() {
    return {
      i: 0,
      time: ""
    };
  },
  props:["imglist"],
  methods: {
    move(i) {
      this.i += i;
      if (this.i == 0 && i == -1) {
        this.i = this.imglist.length - 1;
        return
      } else if (this.i == this.imglist.length && i == 1) {
        this.i = 0;
      }
    },
    moveTo(idx) {
      this.i = 0;
      this.move(idx);
    },
    Lea() {
      this.time = setInterval(() => {
        this.move(1);
      }, 3000);
    },
    Ent() {
      clearInterval(this.time);
    }
  },
};
</script>

<style scoped>
.w1200 {
  width: 1200px;
  height: 535px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}
ul > li {
  float: left;
}
.pics > li {
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  transition: opacity 0.8s linear;
}
.pics > li.active {
  opacity: 1;
  z-index: 2;
}
a {
  position: absolute;
  width: 27px;
  height: 66px;
  z-index: 10;
  opacity: 0.6;
}
.prev {
  top: 230px;
  left: 20px;
  background: url(http://i3.vanclimg.com/cms/20160918/focus_lr0918.png)
    no-repeat scroll 0px 0px;
}
.prev:hover {
  background: url(http://i3.vanclimg.com/cms/20160918/focus_lr0918.png)
    no-repeat scroll 0px -61px;
}
.next {
  top: 230px;
  left: 1150px;
  background: url(http://i3.vanclimg.com/cms/20160918/focus_lr0918.png)
    no-repeat scroll -52px 0px;
}
.next:hover {
  background: url(http://i3.vanclimg.com/cms/20160918/focus_lr0918.png)
    no-repeat scroll -52px -61px;
}
</style>