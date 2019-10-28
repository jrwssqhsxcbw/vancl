<template>
  <div class="full">
    <div id="headerTopArea" class="headerTopAreaBox">
      <div class="headerTopArea">
        <div class="headerTop">
          <div class="headerTopRight">
            <div class="active vanclCustomer">
              <a href="javascript:;" target="_blank" class="mapDropTitle">网站公告</a>
            </div>
            <div class="payattention">
              <em></em>
              <a href="javascript:;" class="vweixinbox">
                <span
                  class="vweixin"
                  style="background: url(http://i1.vanclimg.com/cms/20150605/w1.jpg) no-repeat left 3px;"
                ></span>
                <b class="vweixinTip" style="display:none"></b>
              </a>
              <a
                href="javascript:;"
                class="track vanclweibo"
                target="_blank"
                style="background: url(http://i2.vanclimg.com/cms/20150605/w2.jpg) no-repeat left 3px;"
              ></a>
            </div>
          </div>
          <div class="headerTopLeft">
            <div class="top loginArea"
            :style="show==true?{'display':'none'}:{'display':'block'}">
              您好
              <span class="top">欢迎光临凡客诚品! &nbsp;</span>
              <span>
                <router-link to="login" class="top track">登录</router-link>
                &nbsp;|&nbsp;
                <router-link to="reg" class="top track">注册</router-link>
              </span>
            </div>
            <div class="top loginArea" :style="show==false?{'display':'none'}:{'display':'block'}">
              您好
              <a href="javascript:;" class="top track" name="head-denglu" style="color:rgb(51,51,51);">{{uname}}</a>
              <span style="color:#a10000">
                <span @click="logout"><router-link to="" class="top track" style="color:#a10000" target="_parent">退出登录</router-link></span>
                &nbsp;|&nbsp;
                <router-link to="login" class="track" style="color:#a10000">更换用户</router-link>
              </span>
            </div>
            <div class="recommendArea">
              <a href="javascript:;" rel="nofollow" class="track">我的订单</a>
            </div>
          </div>
          <span class="blank0"></span>
        </div>
      </div>
    </div>
    <div class="vanclLogoSearch">
      <div class="vanclSearch fr">
        <div class="searchTab">
          <div class="search fl">
            <input type="text" class="searchText ac_input textBox Enter fl" value="搜“熊本熊”，体验与众不同" @mouseenter="goin"/>
            <button class="searchBtn sousuoBtn btn"></button>
          </div>
          <div class="active">
            <p>
              <a href="javascript:;" class="shopborder track cartab">
                购物车(
                <span>0</span>)
              </a>
              <s></s>
            </p>
            <div class="bottomlines"></div>
            <div class="BuycarTab shopDropList">
              <div class="shopnopru">
                <div class="SCtotalpageno">您的购物车中没有任何商品</div>
                <div class="SCtotalpageBottom"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="hotWord">
          <p>
            热门搜索:
            <a href="javascript:;" class="track" target="_blank">免烫衬衫</a>
            <a href="javascript:;" class="track" target="_blank">羽绒服</a>
            <a href="javascript:;" class="track" target="_blank">外套</a>
            <a href="javascript:;" class="track" target="_blank">熊本熊</a>
            <a href="javascript:;" class="track" target="_blank">运动户外</a>
            <a href="javascript:;" class="track" target="_blank">帆布鞋</a>
            <a href="javascript:;" class="track" target="_blank">水柔棉</a>
          </p>
        </div>
      </div>
    </div>
    <div class="navlist clearfix">
      <ul>
        <li class="vancllogo_Con">
          <a href="javascript:;"></a>
        </li>
        <li>
          <a href="javascript:;">首页</a>
          <span class="NavLine"></span>
        </li>
        <li>
          <a href="javascript:;" class="track" target="_blank">
            衬衫
            <em
              style="display:block;width:25px; height:13px; background:url(http://i3.vanclimg.com/cms/20170329/icon_hot.png) no-repeat scroll; position:absolute;left:67px;top:-5px;"
            ></em>
          </a>
          <span class="NavLine"></span>
          <div class="subNav">
            <span></span>
            <ul>
              <li>
                <a href="javascript:;" class="track" target="_blank">免烫</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">易打理</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">休闲</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">高支</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">法兰绒</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">牛津纺</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">牛仔</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">麻棉</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">水洗棉</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">泡泡纱</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">商务衬衫</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="javascript:;" class="track" target="_blank">
            T恤
            <em
              style="display:block;width:25px; height:13px; background:url(http://i5.vanclimg.com/cms/20170308/new_0308.png) no-repeat scroll; position:absolute;left:62px;top:-5px;"
            ></em>
          </a>
          <span class="NavLine"></span>
          <!-- 23:49   -->
          <div class="subNav">
            <span></span>
            <ul>
              <li>
                <a href="javascript:;" class="track" target="_blank">本广</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">李翔伟</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">张广先</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">药</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">长厂雄</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">创可贴</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">周南</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">山鸟叔</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">简鱼</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">欧飞鸿</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">好小猪</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">剪纸猪</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">赵老师的猪</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">熊本熊</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">水柔棉T</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">运动T恤</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">POLO</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="javascript:;" class="track" target="_blank">卫衣</a>
          <span class="NavLine"></span>
          <div class="subNav">
            <span></span>
            <ul>
              <li>
                <a href="javascript:;" class="track" target="_blank">熊本熊</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">开衫</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">连帽</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">圆领</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">水柔棉</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="javascript:;" class="track" target="_blank">外套</a>
          <span class="NavLine"></span>
          <div class="subNav">
            <span></span>
            <ul>
              <li>
                <a href="javascript:;" class="track" target="_blank">皮肤衣</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">C9设计款</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">夹克</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">西服</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">nautilus</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">大衣</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">羽绒服</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="javascript:;" class>针织衫</a>
          <span class="NavLine"></span>
          <div class="subNav">
            <span></span>
            <ul>
              <li>
                <a href="javascript:;" class="track" target="_blank">空调衫</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">棉线衫</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">羊毛衫</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="javascript:;" class="track" target="_blank">裤装</a>
          <span class="NavLine"></span>
          <div class="subNav">
            <span></span>
            <ul>
              <li>
                <a href="javascript:;" class="track" target="_blank">针织裤</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">休闲裤</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">牛仔裤</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">沙滩裤</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="javascript:;" class="track" target="_blank">鞋</a>
          <span class="NavLine"></span>
          <div class="subNav">
            <span></span>
            <ul>
              <li>
                <a href="javascript:;" class="track" target="_blank">复古跑鞋</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">帆布鞋</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">休闲鞋</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">运动鞋</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">皮鞋</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">凉鞋</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="none">
          <a href="javascript:;" class="track" target="_blank">家具配饰</a>
          <span class="NavLine"></span>
          <div class="subNav">
            <span></span>
            <ul>
              <li>
                <a href="javascript:;" class="track" target="_blank">内衣袜子</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">床单套件</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">被子</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">毯子</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">枕</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">家居服</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">家居鞋</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">毛巾</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">手机壳</a>
              </li>
              <li>
                <a href="javascript:;" class="track" target="_blank">皮带</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="javascript:;" class="track" target="_blank">特惠</a>
          <span class="NavLine"></span>
          <div class="subNav">
            <span></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:true,
      uname:""
    }
  },
  methods:{
    goin(e){
      var input=e.target;
      if(input!=""){
        input.focus();
        input.select();
      }
    },
    logout(){
      this.axios.get("logout").then(res=>{
        console.log(res)
        if(res.data==1){
          this.show=false;
        }else{
          alert("退出登录失败，请重试");
        }
      })
    }
  },
  created(){
    this.axios.get("index").then(res=>{
      if(res.data==-1){
        this.show=false
        console.log(res.data)
      }else{
        this.show=true;
        this.uname=res.data[0].uname;
      }
    })
  }
};
</script>

<style scoped>
.full {
  width: 100%;
  height: auto;
  font-size: 12px;
}
/* top */
.headerTopAreaBox {
  width: 100%;
  height: 32px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  color: #808080;
}

.headerTopAreaBox a {
  color: #808080;
}

.headerTopArea {
  width: 100%;
  height: 31px;
  background: #f7f7f7;
}

.headerTopArea .headerTop {
  width: 980px;
  height: 31px;
  line-height: 32px;
  margin: 0 auto;
  background: #f7f7f7;
}

.full .headerTopArea .headerTop {
  width: 1200px;
}

.headerTopArea .headerTopRight {
  width: 126px;
  float: right;
  position: relative;
  z-index: 9000;
}

.headerTopArea .vanclCustomer {
  width: 70px;
  height: 18px;
  line-height: 18px;
  margin: 7px 0 0 0px;
  float: left;
  display: inline;
  position: relative;
  z-index: 1000;
  cursor: pointer;
}

.headerTopArea .mapDropTitle,
.headerTopArea .hover .mapDropTitle {
  background: url(http://i4.vanclimg.com/cms/20160912/notice.png) no-repeat
    scroll 0px 0px;
  width: 55px;
  padding-left: 23px;
  text-align: left;
}

.headerTopArea .mapDropTitle {
  background-position: 0px 0px;
  display: block;
}

.headerTopArea .payattention {
  float: right;
}

em,
strong,
th {
  font-style: normal;
  font-weight: normal;
}

.payattention em,
.payattention a.vanclweibo,
.payattention .vweixin {
  float: left;
  background: url(http://i2.vanclimg.com/cms/20140414/vanclsprite.png) no-repeat
    scroll;
  margin-top: 4px;
}

.payattention em {
  background-position: 0px -117px;
  width: 47px;
  height: 22px;
  display: none;
}

.payattention a.vanclweibo,
.vweixinbox .vweixin {
  background-position: -48px -23px;
  width: 20px;
  height: 25px;
}

.vweixinbox .vweixin {
  background-position: -24px -23px;
  float: left;
  margin-left: 10px;
  display: inline;
  cursor: pointer;
  height: 21px;
}

.vweixinbox .vweixinTip {
  position: absolute;
  width: 148px;
  height: 169px;
  right: 0px;
  top: 30px;
  border: 1px solid #e5e5e5;
  background: url(http://i2.vanclimg.com/header/20130116/weixin.png) no-repeat;
  overflow: hidden;
  display: none;
  cursor: pointer;
  z-index: 10000;
}

.full .headerTopArea .headerTopLeft {
  min-width: 240px;
  float: right;
}

.headerTopArea .loginArea {
  float: left;
}

.headerTopArea .loginArea span {
  color: #808080;
}

.full .headerTopArea .recommendArea {
  margin: 0px 0 0 13px;
  float: left;
  display: inline;
}

.full .headerTopArea .recommendArea a {
  padding-right: 14px;
}

.blank0 {
  display: block;
  width: 100%;
  height: 0px;
  line-height: 0px;
  font-size: 0px;
  clear: both;
  overflow: hidden;
}

/* middle */
.vanclLogoSearch {
  width: 980px;
  height: 62px;
  margin: 20px auto 25px;
}
.full .vanclLogoSearch {
  width: 1200px;
}
.fr {
  float: right;
}
.vanclSearch {
  width: 438px;
  padding-top: 8px;
}
.searchTab {
  height: 29px;
}
.fl {
  float: left;
}
.searchTab .Enter {
  width: 249px;
  height: 27px;
  padding: 0px 5px;
  line-height: 27px;
  border: 1px solid #c9caca;
}
.searchTab .btn {
  width: 49px;
  height: 29px;
  border: none;
  cursor: pointer;
  background: url(http://i2.vanclimg.com/cms/20150228/vanclsprite.png) no-repeat
    scroll -100px 0px;
}
.searchTab .active {
  width: 105px;
  height: 27px;
  border: 1px solid #c1383e;
  background: url(http://i2.vanclimg.com/cms/20150228/vanclsprite.png) no-repeat
    scroll -154px 0px;
  position: relative;
  z-index: 10;
  float: right;
}
.searchTab .active:hover {
  border-bottom: 1px solid #ffffff;
  background: url(http://i2.vanclimg.com/cms/20150228/vanclsprite.png) no-repeat
    scroll -153px -29px;
  width: 105px;
  height: 29px;
  position: relative;
  z-index: 1001;
  float: right;
}
.searchTab .active:hover .bottomlines {
  background: #fff;
  position: absolute;
  height: 4px;
  width: 100%;
  z-index: 10;
  top: 25px;
}
.searchTab .active:hover a.cartab {
  color: #c1383e;
}
.searchTab .hover p a {
  display: block;
  padding-left: 29px;
  padding-top: 6px;
  font-size: 12px;
  color: #fff;
}
.searchTab .active:hover .BuycarTab {
  display: block;
}
.searchTab .active a.cartab {
  display: block;
  padding-left: 29px;
  padding-top: 6px;
  font-size: 12px;
  color: #fff;
}
.BuycarTab {
  width: 315px;
  height: auto;
  padding: 5px;
  border: 1px solid #b81c22;
  position: absolute;
  right: -1px;
  top: 27px;
  background: #fff;
  display: none;
}
.hotWord {
  width: 440px;
  padding-top: 5px;
  line-height: 18px;
  color: #727171;
  padding-left: 15px;
}
.hotWord p a:link,
.hotWord p a:visited,
.hotWord p a:hover,
.hotWord p a:active {
  color: #727171;
  margin: 0 5px 0 0;
}
/* bottom */
.navlist {
  width: 780px;
  height: 22px !important;
  margin: 30px auto !important;
  padding-left: 200px !important;
  position: relative !important;
  z-index: 300 !important;
}
.full .navlist {
  width: 1000px;
  height: 22px;
  margin: 30px auto;
  padding-left: 200px;
  position: relative;
  z-index: 300;
}
li {
  list-style: none;
}
.full .navlist ul li {
  float: left;
  width: 99px;
  line-height: 22px;
  padding: 0px 0px 10px;
  text-align: center;
  font-size: 16px;
  font-family: "Microsoft YaHei";
  position: relative;
  z-index: 220;
}
.full .navlist ul li.none {
  background: none;
}
.full .navlist ul li.vancllogo_Con {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0px;
  background: none;
  width: 100%;
}
.full .navlist ul li.vancllogo_Con a {
  display: block;
  width: 185px;
  height: 46px;
  background: url(http://i4.vanclimg.com/cms/20160923/logo18546.png) no-repeat
    scroll;
}
.full.navlist ul li a:link,
a:visited,
.navlist ul li a:active {
  color: #727171;
}
.NavLine {
  display: block;
  height: 16px;
  width: 1px;
  border-right: 1px solid #888;
  position: absolute;
  right: 1px;
  top: 5px;
  overflow: hidden;
}
.full .subNav {
  width: 99px;
  background: #fff;
  position: absolute;
  left: -2px;
  top: 30px;
}
.full .subNav span {
  display: block;
  width: 100%;
  height: 5px;
  border-top: 5px solid #b81c22;
}
.full .navlist ul li a:link,
.navlist ul li a:visited,
.navlist ul li a:active {
  color: #727171;
}
.full .navlist ul li a em {
  display: block;
  width: 25px;
  height: 13px;
  background: url(http://i3.vanclimg.com/cms/20170329/icon_hot.png) no-repeat
    scroll;
  position: absolute;
  left: 67px;
  top: -5px;
}
.full .subNav {
  width: 99px;
  background: #fff;
  position: absolute;
  left: -2px;
  top: 30px;
}
.full .navlist ul li .subNav {
  max-height: 0px;
  overflow: hidden;
  transition: all 0.3s linear;
}
.full .navlist ul li:hover .subNav {
  max-height: 630px;
  opacity: 1;
}
.full .subNav ul {
  border: 1px solid #efefef;
  border-top: 0px;
  padding: 10px 0px;
}
.full .subNav ul li {
  text-align: center;
  line-height: 35px;
  background: none;
  padding: 0px;
  float: none;
  font-size: 16px;
}
.clearfix:after {
  content: "";
  height: 0px;
  display: block;
  visibility: hidden;
  clear: both;
}
</style>