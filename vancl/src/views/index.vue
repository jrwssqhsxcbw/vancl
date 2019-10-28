<template>
  <div class="full">
    <my-header></my-header>
    <!-- 主体部分 -->
    <div class="vanclContent vanclCon">
      <div class="vanclFocusAd">
        <carousel></carousel>
      </div>
      <span class="blank20"></span>
      <div class="getMoney"></div>
      <div style="width:1200px;height:10px;margin:0 auto;">
        <router-link to>
          <img src="../../public/img/tl.jpg" alt="充100返100" width="1195" height="69" border="0" />
        </router-link>
      </div>
      <br />
      <br />
      <div class="new_miaosha_area" style="display:block;">
        <router-link to target="_blank">
          <h2 class="new_miaosha_title">
            <span id="seckill_2017_timecounting">
              <em class="wordBox">该场秒杀已结束</em>
              00
              <em></em>
              00
              <em></em>
              00
            </span>
          </h2>
        </router-link>
      </div>
      <div class="seckill_2017_container" style="display:block">
        <ul>
          <li v-for="(item,index) of xlist" :key="index">
            <router-link to target="_blank" class="track">
              <img :src="item.url" :alt="item.alt" />
              <div class="new-miaosha-productname">
                <span>{{item.title}}</span>
              </div>
              <div class="new-miaosha-price">
                <span class="new-miaosha-oldprice">
                  ¥
                  <em>{{item.oldprice}}</em>
                </span>
                <span class="new-miaosha-saleprice">
                  ¥
                  <em>{{item.saleprice}}</em>
                </span>
                <span class="new-miaosha-afterdeposit">
                  充值后
                  <em>{{item.afterdeposit}}</em>元
                </span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="proAreabox clearfix">
        <div>
          <div class="xphead">
            <img src="../../public/img/xhsm_g.jpg" alt />
            <router-link to></router-link>
          </div>
          <ul>
            <li v-for="(item,index) of xplist" :key="index">
              <img :src="item.url" alt />
            </li>
          </ul>
        </div>
        <div class="twoL">
          <div>
            <router-link to>
              <img src="../../public/img/zqxp_11.jpg" alt />
            </router-link>
            <ul>
              <li v-for="(item,index) of towList" :key="index">
                <img :src="item.url" alt />
              </li>
            </ul>
          </div>
        </div>
        <div class="piclist shangzhuanglist shangzhuanglist_top clearfix">
          <h2>优选推荐</h2>
          <div v-for="(item,index) of threeL" :key="index">
            <ul>
              <li class="pic_one">
                <router-link to class="track" target="_blank">
                  <img :src="item[0].url" alt />
                </router-link>
                <h3>
                  <span>{{item[0].price}}</span>
                  {{item[0].title}}
                </h3>
              </li>
              <li class="pic_two">
                <div>
                  <router-link to>
                    <img :src="item[1].url" alt />
                  </router-link>
                  <h3>
                    <span>{{item[1].price}}</span>
                    {{item[1].title}}
                  </h3>
                </div>
                <div>
                  <router-link to>
                    <img :src="item[2].url" alt />
                  </router-link>
                  <h3>
                    <span>{{item[2].price}}</span>
                    {{item[2].title}}
                  </h3>
                </div>
              </li>
              <li class="pic_three" style="margin-right:0px;">
                <router-link to>
                  <img :src="item[3].url" alt />
                </router-link>
                <h3>
                  <span>
                    <em>{{item[3].price}}</em>
                  </span>
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="piclist kuzhuanglist clearfix">
          <h2>下装推荐</h2>
          <ul>
            <li v-for="(item,index) of xzlist" :key="index">
              <router-link to target="_blank" class="track">
                <img :src="item.url" alt />
              </router-link>
              <h3>
                <span>
                  充值购买相当于
                  <em>{{item.price}}</em>
                  元起
                </span>
                {{item.title}}
              </h3>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div class="piclist otherlist clearfix">
          <h2>更多精品</h2>
          <ul>
            <li v-for="(item,index) of xxxlist" :key="index" style="margin-bottom:10px;">
              <router-link to>
                <img :src="item.url" alt />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
    <bay-window></bay-window>
    <div :style="overlay==true?{'display':'block'}:{'display':'none'}">
      <div
        style="background:#000;filter:alpha(opacity=40);opacity:0.4;-moz-opacity:0.4;width:100%;height:100%; position:fixed; _position:absolute;left:0px;top:0px; z-index:999998;"
      ></div>
      <div class="screenAdPop">
        <p class="screenAdPopfull">
          <router-link to class="track" target="_blank">
            <img
              width="1200px"
              height="600px"
              src="https://i1.vanclimg.com/cms/20190917/1200x600x.jpg"
              alt="甄选新品 第二件半价 "
            />
          </router-link>
        </p>
        <p class="screenAdPopnarrow">
          <router-link to class="track" target="_blank">
            <img
              width="980px"
              height="660px"
              src="https://i1.vanclimg.com/cms/20190917/980x660x.jpg"
              alt="甄选新品 第二件半价 "
            />
          </router-link>
        </p>
        <span class="screenAdClose" @click="CPMshow"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xlist: [
        {
          url: require("../../public/img/main_1.jpg"),
          alt: "凡客T恤 药 傻子药 浅花灰色",
          title: "T恤 苏航 红墙 白色",
          oldprice: "118",
          saleprice: "18",
          afterdeposit: "9"
        },
        {
          url: require("../../public/img/main_2.jpg"),
          alt: "凡客T恤 药 傻子药 浅花灰色",
          title: "T恤 长场雄 6 黑色",
          oldprice: "118",
          saleprice: "18",
          afterdeposit: "9"
        },
        {
          url: require("../../public/img/main_3.jpg"),
          alt: "凡客T恤 药 傻子药 浅花灰色",
          title: "T恤 李翔伟 The No Face 白色",
          oldprice: "118",
          saleprice: "18",
          afterdeposit: "9"
        },
        {
          url: require("../../public/img/main_4.jpg"),
          alt: "凡客T恤 药 傻子药 浅花灰色",
          title: "T恤 山鸟叔 维特根斯坦 白色",
          oldprice: "118",
          saleprice: "18",
          afterdeposit: "9"
        },
        {
          url: require("../../public/img/main_5.jpg"),
          alt: "凡客T恤 药 傻子药 浅花灰色",
          title: "T恤 山鸟叔 维特根斯坦 白色",
          oldprice: "278",
          saleprice: "118",
          afterdeposit: "59"
        }
      ],
      xplist: [
        { url: require("../../public/img/xp_1.jpg") },
        { url: require("../../public/img/xp_2.jpg") },
        { url: require("../../public/img/xp_3.jpg") },
        { url: require("../../public/img/xp_4.jpg") },
        { url: require("../../public/img/xp_5.jpg") },
        { url: require("../../public/img/xp_6.jpg") },
        { url: require("../../public/img/xp_7.jpg") },
        { url: require("../../public/img/xp_8.jpg") },
        { url: require("../../public/img/xp_9.jpg") },
        { url: require("../../public/img/xp_10.jpg") },
        { url: require("../../public/img/xp_11.jpg") },
        { url: require("../../public/img/xp_12.jpg") }
      ],
      towList: [
        { url: require("../../public/img/qjxp_01.jpg") },
        { url: require("../../public/img/qjxp_02.jpg") },
        { url: require("../../public/img/qjxp_03.jpg") },
        { url: require("../../public/img/qjxp_04.jpg") },
        { url: require("../../public/img/qjxp_05.jpg") },
        { url: require("../../public/img/qjxp_06.jpg") },
        { url: require("../../public/img/qjxp_07.jpg") },
        { url: require("../../public/img/qjxp_08.jpg") },
        { url: require("../../public/img/qjxp_09.jpg") },
        { url: require("../../public/img/qjxp_10.jpg") },
        { url: require("../../public/img/qjxp_11.jpg") },
        { url: require("../../public/img/qjxp_12.jpg") },
        { url: require("../../public/img/qjxp_13.jpg") },
        { url: require("../../public/img/qjxp_14.jpg") },
        { url: require("../../public/img/qjxp_15.jpg") },
        { url: require("../../public/img/qjxp_16.jpg") }
      ],
      threeL: [
        [
          {
            url: require("../../public/img/3L1.jpg"),
            title: "4.0日式免烫衬衫",
            price: "充值后购买更优惠"
          },
          {
            url: require("../../public/img/3L2.jpg"),
            title: "全棉舒适素色T",
            price: "充值购买相当于 19元"
          },
          {
            url: require("../../public/img/3L3.jpg"),
            title: "凡客新品",
            price: "充值购买相当于 19元起"
          },
          {
            url: require("../../public/img/3L4.jpg"),
            title: "水柔棉卫衣",
            price: "充值购买相当于 99元"
          }
        ],
        [
          {
            url: require("../../public/img/3L5.jpg"),
            title: "牛津纺",
            price: "充值购买相当于 99元起"
          },
          {
            url: require("../../public/img/3L6.jpg"),
            title: "麻棉衬衫",
            price: "充值购买相当于 99元"
          },
          {
            url: require("../../public/img/3L7.jpg"),
            title: "熊本熊 卫衣",
            price: "充值购买相当于 89元"
          },
          {
            url: require("../../public/img/3L8.jpg"),
            title: "户外运动",
            price: "充值购买更优惠"
          }
        ]
      ],
      xzlist: [
        {
          url: require("../../public/img/xz1.jpg"),
          title: "休闲裤",
          price: "69"
        },
        {
          url: require("../../public/img/xz2.jpg"),
          title: "低裆锥牛仔裤",
          price: "99"
        },
        {
          url: require("../../public/img/xz3.jpg"),
          title: "牛仔裤",
          price: "69"
        },
        {
          url: require("../../public/img/xz4.jpg"),
          title: "重水洗锥形窄脚",
          price: "69"
        }
      ],
      xxxlist: [
        { url: require("../../public/img/xxx1.jpg") },
        { url: require("../../public/img/xxx2.jpg") },
        { url: require("../../public/img/xxx3.jpg") },
        { url: require("../../public/img/xxx4.jpg") },
        { url: require("../../public/img/xxx5.jpg") },
        { url: require("../../public/img/xxx6.jpg") }
      ],
      overlay: true
    };
  },
  methods: {
    CPMshow() {
      this.overlay = false;
    }
  },
  created() {
    setTimeout(() => {
      this.CPMshow();
    }, 3000);
  }
};
</script>

<style>
.full {
  font-size: 12px;
  font-family: "宋体";
  color: #333;
}
.new_miaosha_area {
  margin: 60px auto;
  width: 1200px;
}
.new_miaosha_title {
  background: url(http://i1.vanclimg.com/cms/20190417/mm.jpg) no-repeat scroll
    0px 0px;
}
.new_miaosha_area h2 {
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-family: "Microsoft YaHei";
  color: #9a9a9a;
  font-size: 18px;
}
span#seckill_2017_timecounting {
  color: #a10000;
  margin-left: 20px;
  float: right;
  padding-right: 30px;
}
span#seckill_2017_timecounting em {
  padding-left: 36px;
}
span#seckill_2017_timecounting em.wordBox {
  color: #fff;
  padding-right: 25px;
}
.seckill_2017_container {
  width: 1200px;
  color: #474747;
  font-weight: bold;
  margin: 0 auto;
  font-family: "Microsoft YaHei";
}
.seckill_2017_container ul {
  overflow: hidden;
  margin: 10px 0 0 0;
  padding: 0;
  width: 1210px;
}
.seckill_2017_container ul li {
  float: left;
  width: 232px;
  margin-right: 10px;
}
.seckill_2017_container ul li a,
.seckill_2017_container ul li a:focus {
  text-decoration: none;
  color: #474747;
}
.seckill_2017_container ul li img {
  width: 232px;
  height: 232px;
}
.seckill_2017_container ul li .new-miaosha-productname {
  font-size: 16px;
  margin-top: 10px;
  height: 45px;
  font-weight: normal;
}
.seckill_2017_container ul li .new-miaosha-price {
  position: relative;
}
.seckill_2017_container ul li .new-miaosha-price .new-miaosha-oldprice {
  display: block;
  color: #d3d3d3;
  font-size: 14px;
  text-decoration: line-through;
  font-weight: normal;
}
.seckill_2017_container ul li .new-miaosha-price .new-miaosha-saleprice {
  display: block;
  color: #bb2b34;
  font-size: 16px;
}
.seckill_2017_container ul li .new-miaosha-price .new-miaosha-afterdeposit {
  position: absolute;
  right: 10px;
  bottom: 0;
  font-size: 16px;
  font-weight: normal;
}
.seckill_2017_container ul li .new-miaosha-price .new-miaosha-afterdeposit em {
  font-size: 24px;
  font-style: normal;
  color: #bb2b34;
  font-weight: bolder;
}
.proAreabox {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
}
.proAreabox .xphead a {
  position: absolute;
  width: 150px;
  height: 56px;
  background-color: transparent;
  top: 1px;
  right: 0px;
}
.proAreabox ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.proAreabox .twoL {
  margin: 20px 0;
}
.proAreabox .twoL a img {
  margin-bottom: 20px;
}
.piclist {
  width: 1200px;
}
.shangzhuanglist {
  overflow: hidden;
}
.piclist h2 {
  text-align: center;
  line-height: 50px;
  margin: 30px 0px;
  font-family: "Microsoft YaHei";
  color: #9a9a9a;
  font-size: 18px;
}
.shangzhuanglist ul li {
  float: left;
  margin-right: 17px;
  display: inline;
}
.shangzhuanglist ul li.pic_one {
  width: 590px;
}
.shangzhuanglist ul li.pic_two {
  width: 290px;
}
.shangzhuanglist ul li.pic_three {
  width: 286px;
}
.shangzhuanglist ul li h3,
.kuzhuanglist ul li h3 {
  height: 28px;
  padding: 20px 12px;
  line-height: 28px;
  border: 1px solid #e8e7ec;
  border-top: 0px;
  font-family: "Microsoft YaHei";
  font-size: 14px;
}
.shangzhuanglist ul li h3 span,
.kuzhuanglist ul li h3 span {
  float: right;
  color: #a10000;
  font-family: Arial;
  line-height: 24px;
  font-size: 14px;
}
.shangzhuanglist ul li div {
  margin-bottom: 16px;
}
.kuzhuanglist {
  overflow: hidden;
}
.kuzhuanglist ul li {
  width: 280px;
  height: 508px;
  float: left;
  display: inline;
  margin-right: 20px;
  margin-bottom: 20px;
}

.shangzhuanglist ul li h3 span,
.kuzhuanglist ul li h3 span {
  float: right;
  color: #a10000;
  font-family: Arial;
  line-height: 24px;
  font-size: 14px;
}
.screenAdPop {
  width: 980px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -300px;
  z-index: 999999;
  margin-left: -490px;
  overflow: hidden;
}
.full .screenAdPop {
  width: 1200px;
  margin-left: -600px;
}
img {
  display: block;
}
.screenAdPop a img {
  vertical-align: top;
}
.full .screenAdPop .screenAdPopnarrow {
  display: none;
}
.screenAdPop a {
  display: block;
}
a:link,
a:visited {
  color: #333;
  text-decoration: none;
}
.screenAdClose {
  display: block;
  position: absolute;
  right: 14px;
  top: 14px;
  background: url(http://i5.vanclimg.com/cms/20181018/closedz01.png) no-repeat left top;
  width: 29px;
  height: 29px;
  cursor: pointer;
}
</style>