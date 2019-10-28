<template>
  <div class="full">
    <div
      :style="toTop==true?{'display':'block'}:{'display':'none'}"
      style="right:10px;bottom:10px;position:fixed;z-index:9999;"
    >
      <a href="#">
        <div
          style="cursor: pointer;background-image:url(http://i.vanclimg.com/channel/list2013/go2top.png);background-color:transparent;background-repeat:no-repeat;width:25px;height:90px"
        ></div>
      </a>
    </div>
    <my-header></my-header>
    <div class="commondefault2016">
      <decarousel :imglist="imglist"></decarousel>
      <div class="channelContent2016">
        <div class="shirt_navs nautilus_subnav nautilus_subnav_two">
          <ul class="shirt_nav">
            <li class="activeLi">
              <a href="javascript:;" style="color:white">休闲</a>
              <p class="triangle"></p>
            </li>
            <li>
              <a href="javascript:;" style="color:black">商务</a>
              <p></p>
            </li>
          </ul>
          <ul class="shirt_subnav shirt_subnav_sw shirt_subnav_sw_nav sw_nav" style="display:none">
            <li v-for="(item,index) of affMenu" :key="index">
              <a :href="item.href" v-text="item.title"></a>
              <img src="../../public/img/point137.png" />
            </li>
          </ul>
          <ul class="shirt_subnav xx_nav shirt_subnav_xx" style="display: block;">
            <li v-for="(item,index) of arderMenu" :key="index">
              <a :href="item.href" v-text="item.title"></a>
              <img src="../../public/img/point137.png" alt />
            </li>
          </ul>
        </div>
        <div v-for="(item,index) of Yfclass" :key="index">
          <div>
            <img
              src="http://i2.vanclimg.com/cms/20161031/chpdg_03_01.jpg"
              width="1200"
              height="34"
              :alt="item.titleAlt"
              style="display:inline"
            />
          </div>
          <div>
            <img
              :src="item.titleImg"
              :alt="item.titleAlt"
              style="display:inline"
              class="titleIMG"
            />
          </div>
          <div class="shirt-list shirt-list0926" :id="item.id">
            <ul class="shirts-product-list clearfix">
              <li v-for="(Item,Index) of item.details" :key="Index">
                <router-link to class="product-img" :title="Item.title">
                  <img
                    :src="Item.img_url"
                    :alt="Item.title"
                  />
                  <h3>
                    <span class="tehui">特惠</span>
                    <span class="sprice">¥198</span>
                  </h3>
                </router-link>
                <router-link
                  to
                  :title="Item.title"
                  style="display:inline"
                  class="tit"
                >休闲衬衫 灯芯绒 男款灰色</router-link>
                <span
                  class="price line-through"
                  style="display:inline;font-size:15px;padding:1px;"
                >￥398</span>
                <img src="http://i5.vanclimg.com/cms/20160926/new3323.png" class="catalog_half_point" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Yfclass:[
        {titleImg:require("../../public/img/xinpin.jpg"),
        titleAlt:"免烫衬衫",
        id:"xxxp",
        details:[
          {img_url:require("../../public/img/xinpin1.jpg"),title:"休闲衬衫 法兰绒 男款 姜黄色"},
          {img_url:require("../../public/img/xinpin2.jpg"),title:"休闲衬衫 法兰绒 男款 黑卫士格绿"},
          {img_url:require("../../public/img/xinpin3.jpg"),title:"休闲衬衫 法兰绒 男款 罗伊小格绿黑"},
          {img_url:require("../../public/img/xinpin4.jpg"),title:"休闲衬衫 法兰绒 男款 白色"},
          {img_url:require("../../public/img/xinpin5.jpg"),title:"休闲衬衫 法兰绒 男款 保罗格蓝"}
        ]},
        {titleImg:require("../../public/img/dengxin.jpg"),
        titleAlt:"灯芯绒衬衫",
        id:"xxdxr",
        details:[
          {img_url:require("../../public/img/dengxin1.jpg"),title:"休闲衬衫 灯芯绒 男款 灰色"},
          {img_url:require("../../public/img/dengxin2.jpg"),title:"休闲衬衫 灯芯绒 男款 姜黄色"},
          {img_url:require("../../public/img/dengxin3.jpg"),title:"休闲衬衫 灯芯绒 男款 蓝色"},
          {img_url:require("../../public/img/dengxin4.jpg"),title:"休闲衬衫 灯芯绒 男款 黑色"},
          {img_url:require("../../public/img/dengxin5.jpg"),title:"休闲衬衫 灯芯绒 男款 藏青色"}
        ]},
        {titleImg:require("../../public/img/falan.jpg"),
        titleAlt:"法兰绒衬衫",
        id:"xxflr",
        details:[
          {img_url:require("../../public/img/falan1.jpg"),title:"休闲衬衫 法兰绒 男款 姜黄色"},
          {img_url:require("../../public/img/falan2.jpg"),title:"休闲衬衫 法兰绒 男款 黑卫士格绿"},
          {img_url:require("../../public/img/falan3.jpg"),title:"休闲衬衫 法兰绒 男款 罗伊小格绿黑"},
          {img_url:require("../../public/img/falan4.jpg"),title:"休闲衬衫 法兰绒 男款 白色"},
          {img_url:require("../../public/img/falan5.jpg"),title:"休闲衬衫 法兰绒 男款 保罗格蓝"},
          ]},
        {titleImg:require("../../public/img/niujin.jpg"),
        titleAlt:"牛津纺衬衫",
        id:'xxnjf',
        details:[
          {img_url:require("../../public/img/niujin1.jpg"),title:"牛津纺 拼接 男款 黑色"},
          {img_url:require("../../public/img/niujin2.jpg"),title:"凡客衬衫 牛津纺  男款 深蓝红白格"},
          {img_url:require("../../public/img/niujin3.jpg"),title:"凡客衬衫 牛津纺  男款 牛仔蓝"},
          {img_url:require("../../public/img/niujin4.jpg"),title:"牛津纺 迷彩拼接 男款 蓝色"},
          {img_url:require("../../public/img/niujin5.jpg"),title:"凡客衬衫 牛津纺  男款 深蓝铅笔条"},
        ]},
        {titleImg:require("../../public/img/shuiximian.jpg"),
        titleAlt:"水洗棉衬衫",
        id:"xxsxm",
        details:[
          {img_url:require("../../public/img/shuixi1.jpg"),title:"凡客衬衫 水洗棉 小方领 短袖 男款 灰色"},
          {img_url:require("../../public/img/shuixi2.jpg"),title:"凡客衬衫 水洗棉 小方领 短袖 男款 红蓝白套格"},
          {img_url:require("../../public/img/shuixi3.jpg"),title:"凡客衬衫 水洗棉 小方领 短袖 男款 蓝白大方格"},
          {img_url:require("../../public/img/shuixi4.jpg"),title:"凡客衬衫 水洗棉 小方领 短袖 男款 天蓝小套格"},
          {img_url:require("../../public/img/shuixi5.jpg"),title:"凡客衬衫 水洗棉 小方领 短袖 男款 天蓝方格"},
          ]},
        {titleImg:require("../../public/img/machenshan.jpg"),
        titleAlt:"麻衬衫",
        id:"xxm",
        details:[
          {img_url:require("../../public/img/machenshan1.jpg"),title:"衬衫 麻棉 小方领 男款 水蓝宽条"},
          {img_url:require("../../public/img/machenshan2.jpg"),title:"衬衫 麻棉 小方领 男款 水蓝方格"},
          {img_url:require("../../public/img/machenshan3.jpg"),title:"衬衫 麻棉 小方领 男款 苍青方格"},
          {img_url:require("../../public/img/machenshan4.jpg"),title:"衬衫 麻棉 小方领 男款 苍青铅笔条"},
          {img_url:require("../../public/img/machenshan5.jpg"),title:"衬衫 麻棉 小方领 男款 苍青"},
          ]},
        {titleImg:require("../../public/img/tehui.jpg"),
        titleAlt:"休闲特惠",
        id:"xxth",
        details:[
          {img_url:require("../../public/img/tehui1.jpg"),title:"凡客衬衫 牛津纺 领尖扣 短袖 男款 白蓝格"},
          {img_url:require("../../public/img/tehui2.jpg"),title:"凡客衬衫 牛津纺 领尖扣 短袖 男款 天蓝白铅笔条"},
          {img_url:require("../../public/img/tehui3.jpg"),title:"凡客衬衫 牛津纺 领尖扣 短袖 男款 蓝白维西格"},
          {img_url:require("../../public/img/tehui4.jpg"),title:"凡客衬衫 牛津纺 领尖扣 短袖 男款 白蓝铅笔条"},
          {img_url:require("../../public/img/tehui5.jpg"),title:"凡客衬衫 牛津纺 领尖扣 短袖 男款 天蓝白格"},
          ]},
      ],
      imglist: [
        { url: require("../../public/img/detc1.jpg") },
        { url: require("../../public/img/detc2.jpg") },
        { url: require("../../public/img/detc3.jpg") },
        { url: require("../../public/img/detc4.jpg") }
      ],
      affMenu: [
        { title: "新品", href: "#swzz" },
        { title: "商务短袖", href: "#swdx" },
        { title: "商务通勤", href: "#swtq" },
        { title: "商务休闲", href: "#swxx" },
        { title: "高支", href: "#swgz" },
        { title: "特惠", href: "#swtlxs" }
      ],
      arderMenu: [
        { title: "新品", href: "#xxxp" },
        { title: "牛津纺", href: "#xxnjf" },
        { title: "法兰绒", href: "#xxflr" },
        { title: "灯芯绒", href: "#xxdxr" },
        { title: "麻", href: "#xxm" },
        { title: "特惠", href: "#xxth" }
      ],
      toTop: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 5) {
        this.toTop = true;
      } else if (scrollTop == 0) {
        this.toTop = false;
      }
    }
  }
};
</script>

<style scoped>
.commondefault2016 {
  width: 1200px;
  margin: 0 auto;
}
.nautilus_subnav {
  width: 1200px;
  margin: 0 auto;
  background-color: transparent;
  height: 130px;
  padding-top: 3px;
  font-family: 微软雅黑;
  padding: 0px;
}
.shirt_nav {
  height: 61px;
}
.shirt_navs ul {
  overflow: hidden;
}
li {
  list-style: none;
}
.activeLi {
  background-color: #b82c22 !important;
  color: transparent;
}
.shirt_nav li {
  position: relative;
  float: left;
  font-size: 17px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  padding: 0px;
  width: 50%;
  background-color: #f3f3f3;
}
.nautilus_subnav ul li a {
  color: black;
  display: block;
}
.triangle {
  width: 0;
  height: 0;
  position: absolute;
  bottom: -6px;
  left: 50%;
  margin-left: -7px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #b82c22;
  transform: rotate(180deg);
}
.sw_nav,
.dz_nav {
  display: none;
}
.shirt_subnav_sw_nav li,
.shirt_subnav_dz_nav li {
  width: 191px;
  margin: 0px 10px 0px 0px;
}
.shirt_subnav li a {
  color: black;
  display: block;
  width: 80%;
  margin: 0 10%;
  background-color: #f3f3f3;
}
.shirt_subnav_sw li a,
.shirt_subnav_dz li a {
  width: 100%;
  margin: 0px;
  background: none;
  background-color: #f3f3f3;
  font-size: 16px;
}
.channelContent2016{
  margin-top:20px;
}
.channelContent2016 img {
  transition: 0.2s all linear;
  -webkit-transition: 0.2s all linear;
}
.shirt_subnav li img {
  position: absolute;
  bottom: 0px;
  left: 47%;
}
.shirt_subnav_sw_nav li:last-child,
.shirt_subnav_dz_nav li:last-child {
  margin: 0px;
}
.shirt_subnav {
  margin-top: 20px;
}
.shirt_navs ul {
  overflow: hidden;
}
.shirt_subnav li {
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0px;
  width: 240px;
  margin: 0px auto 0px;
  position: relative;
  float: left;
  font-size: 17px;
}
.shirt_subnav li {
  width: 300px;
}
.shirt_subnav_xx li {
  width: 193px;
  margin-right: 8px;
}
.shirt_subnav_xx li a {
  width: 100%;
  margin: 0;
  background-color: #f3f3f3;
  font-size: 16px;
}
.shirt_subnav_xx li:last-child {
  margin-right: 0px;
}
.channelContent2016 img {
  transition: 0.2s all linear;
  -webkit-transition: 0.2s all linear;
}
.channelContent2016 img:hover {
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.shirts-product-list{
  margin-bottom:30px;
}
.shirts-product-list li {
  background: #fff;
  margin: 20px 19px 45px 19px;
  border: 1px solid #e8e7ec;
  height: 300px;
  width: 260px;
  float: left;
}
.shirts-product-list li {
  margin: 20px 19px 0px 19px;
}
.shirt-list0926 ul li {
  position: relative;
}
.shirts-product-list .product-img {
  position: relative;
}
.shirts-product-list .product-img h3 {
  position: absolute;
  right: -260px;
  bottom: 21px;
  background: #a10000;
  color: #fff;
  font-size: 15px;
  font-family: microsoft yahei;
  height: 45px;
  width: 45px;
  text-align: center;
  border-radius: 50%;
  padding: 5px;
}
.shirts-product-list li .tit,
.shirts-product-list li .price {
  display: inline;
}
.shirts-product-list li .tit {
  height: 17px;
  line-height: 17px;
  text-align: center;
  color: #676767;
  font-weight: bold;
  background: #ffffff;
  text-align: center;
  overflow: hidden;
  margin-top: 5px;
  margin-left: 10px;
}
.shirts-product-list li .price {
  font-size: 15px;
  font-family: "微软雅黑";
  color: #b80001;
  line-height: 15px;
  text-align: center;
  padding: 1px;
  float: right;
  margin-right: 10px;
}
.catalog_half_point {
  width: 33px;
  height: 23px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.titleIMG{
  width:1200px;
  
}
</style>