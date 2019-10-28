<template>
  <div class="full">
    <my-header></my-header>
    <div class="wrapper">
      <!-- 页面位置简介 -->
      <dl class="position">
        <dt>
          您当前的位置：
          <router-link to>凡客首页</router-link>
        </dt>
        <dd>
          >
          <router-link to>我的凡客</router-link>
        </dd>
        <dd>
          >
          <span>
            <router-link to>我的订单</router-link>
          </span>
        </dd>
      </dl>
      <!-- 左侧导航栏 -->
      <div class="side-nav">
        <div class="my_vancl">
          <h2>
            <router-link to class="track">我的凡客</router-link>
          </h2>
        </div>
        <dl>
          <dt>
            <h3>订单中心</h3>
          </dt>
          <dd v-for="(item,index) of orderlist" :key="index">
            <router-link to class="track">·{{item}}</router-link>
          </dd>
        </dl>
        <dl>
          <dt>
            <h3>客户服务</h3>
          </dt>
          <dd v-for="(item,index) of fuwulist" :key="index">
            <router-link to class="track">·{{item}}</router-link>
          </dd>
        </dl>
        <dl class="service-rate">
          <dt>
            <h3>账户管理</h3>
          </dt>
          <dd v-for="(item,index) of zhanghulist" :key="index">
            <router-link to class="track">·{{item}}</router-link>
          </dd>
        </dl>
      </div>
      <!-- 订单详情 -->
      <div class="ordercontainer">
        <h3>
          <span>我的订单</span>
          <router-link to target="_blank">谨防诈骗公告</router-link>
        </h3>
        <div class="AsecurityBox01">
          <div class="asProgress">
            <em>账户安全：</em>
            <div class="asProgSpeed">
              <span class="asProgNow">弱</span>
              <span class>中</span>
              <span class>强</span>
            </div>
          </div>
          <ul class="asProgUl">
            <li class="asProgPhone01">
              <a href="/SafeCenter" title="手机未验证" class="track" name="my-order-safe-phone">
                <em></em>手机未验证
              </a>
            </li>
            <li class="asProgEmail01">
              <a href="/SafeCenter" title="邮箱未验证" class="track" name="my-order-safe-email">
                <em></em>邮箱未验证
              </a>
            </li>
            <li class="asProgPassword01" style="display:none;">
              <a href="/SafeCenter" title="未设置支付密码" class="track" name="my-order-safe-pay">
                <em></em>未设置支付密码
              </a>
            </li>
          </ul>
          <div class="asProgAtarts" style="display:none;">
            为保障账户及资金安全,建议您开启全部
            <router-link to class="track">安全设置</router-link>
          </div>
        </div>
        <div class="wtitle">
          <div class="wtitle_l">
            <a href="javascript:;">
              全部订单
              <span>(0)</span>
            </a>
            <a href="javascript:;">
              进行中
              <span>(0)</span>
            </a>
            <a href="javascript:;">
              已完成
              <span>(0)</span>
            </a>
            <a href="javascript:;">
              无效
              <span>(0)</span>
            </a>
            <a href="javascript:;">
              待评价商品
              <span>(0)</span>
            </a>
          </div>
          <div class="wtitle_r">
            <select name="posttime" id="posttime">
              <option selected="selected" value="2019-08-26,2019-09-24">30天内的订单</option>
              <option value="2019-01-01,2019-12-31">2019年的订单</option>
              <option value="2018-01-01,2018-12-31">2018年的订单</option>
              <option value="2017-01-01,2017-12-31">2017年的订单</option>
            </select>
          </div>
        </div>
        <div>
          <div style="display:none">
            正在为您提交，请稍等……
            <img
              src="http://i.vanclimg.com/AlterOrder/loading.gif"
              class="imglodding"
              alt
            />
          </div>
          <div class="orderinfo">
            <div style="vertical-align:middle;height:30px;">
              <label style="line-height:30px">
                <input
                  id="selectAllOrder"
                  type="checkbox"
                  value="全选"
                  name="selectAllOrder"
                  style="margin-right: 10px;width: 13px; height: 13px; vertical-align: middle; line-height: 30px;"
                />全选
              </label>
              <router-link to class="delAllOrder">删除无效订单</router-link>
            </div>
            <div class="windent">
              <center style="margin:40px 0">目前您暂无30天内的订单记录，请选择其他时间段查看。</center>
            </div>
          </div>
          <div id="confrim" style="display: none"></div>
        </div>
        <div class="deleteOrder_Box" style="position: absolute; z-index: 1000; background-color: white; display: none;">
          <div class="deleteOrder_Tab">
            <h2>
              <span>取消订单</span>
              <router-link to style="color:White">关闭</router-link>
            </h2>
            <div class="deleteOrder_Content">
              <h3>选择取消原因</h3>
              <ul>
                <li v-for="(item,index) of quitorder" :key="index">
                  <input type="radio" :value="index+1" />
                  <span v-text="item"></span>
                </li>
              </ul>
              <div class="deleteOrder_Area" style="display:none;">
                <textarea
                  id="txtCancelReason"
                  style="max-height: 39px; min-height: 39px; max-width: 271px;min-width: 271px; overflow: auto;"
                ></textarea>
              </div>
              <div class="deleteOrder_btn">
                <router-link to style="color:white">提交</router-link>
              </div>
              <p class="delectOrder_nowTj" style="display:none">
                <em></em>
                <span>正在提交</span>
              </p>
            </div>
          </div>
          <div class="deleteOrder_Pointer"></div>
        </div>
        <div class="deleteOrder_Box">
          <div class="deleteOrder_Tab" style="display:none">
            <h2>
              <span>取消订单</span>
              <a href="javascript:;">关闭</a>
            </h2>
            <div class="deleteOrder_Content deleteOrder_Content02">
              <div class="delectOrder_Ok">
                <em></em>
                <span>成功取消!</span>
                <p>温馨提示：您已经支付的金额将原渠道退还给您，请您注意查收。</p>
                <div class="deleteOrder_btn deleteOrder_btn01">
                  <a style="color: White;">确定</a>
                  <a onclick="ReShopping();" class="deleteOrder_newSelect">重新购物&gt;&gt;</a>
                </div>
              </div>
            </div>
            <div class="deleteOrder_Pointer"></div>
          </div>
        </div>
        <div style="display:none">
          <p>温馨提示：您已经支付的金额将原渠道退还给您，请您注意查收。</p>
          <p>温馨提示：订单已取消或超出取消时限。</p>
          <p>
            温馨提示:系统繁忙，请刷新
            <a
              onclick="JumpToMyOrder();"
              style="color: #A10000; text-decoration: underline;"
            >我的订单</a>后重试
          </p>
        </div>
      </div>
      <!-- 为您推荐 -->
      <div class="myOrder_buyProductsBar" style="margin-top:15px">
        <div class="mv_RecommendedTitle">
          <h3 class="titname" fid="titname">为您推荐</h3>
        </div>
        <ul class="myOrder_buyProductsList" style="display: block;">
          <li>
            <p class="pic">
              <router-link
                to
                rel="undefined"
                class="track"
                target="_blank"
                title="凡客衬衫 牛津纺 领尖扣 男款 樱粉色"
              >
                <img
                  src="http://p1.vanclimg.com/130/product/6/3/8/6385827/big/6385827-1j201904191152572408.jpg"
                  width="130"
                  height="130"
                />
              </router-link>
            </p>
            <p class="prod_name">
              <a
                href="http://item.vancl.com/6385827.html"
                rel="undefined"
                class="track"
                name="my-recommend-first-producname"
                target="_blank"
                title="凡客衬衫 牛津纺 领尖扣 男款 樱粉色"
              >凡客衬衫 牛津纺 领尖扣 男款 樱粉色</a>
            </p>
            <p class="s_price">
              市场价：￥
              <span>198.00</span>
            </p>
            <p class="price">售价：￥198.00</p>
          </li>
        </ul>
      </div>
      <div style="float:right;width:778px;margin-top:5px;display:none;">
        <div class="RecommendedTitle_Pages">
          <span>
            <label>1</label>
            <span>/1</span>
          </span>
          <span>
            <div class="pagination">
              <span class="prev track"></span>
              <span class="next track"></span>
            </div>
          </span>
        </div>
      </div>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderlist: ["我的订单", "我的定制订单", "我的优惠券", "我的积分"],
      fuwulist: ["退换货办理", "我要评价", "商品提问"],
      zhanghulist: [
        "账户余额",
        "收货地址",
        "账户安全",
        "我的资料",
        "我的关联账户"
      ],
      quitorder: [
        "忘选优惠品",
        "支付失败",
        "有缺货商品",
        "等待太久",
        "订购错误",
        "已在别处购买",
        "价格太贵",
        "更换其他商品",
        "订单重复",
        "测试订单",
        "其他"
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.side-nav,
.side-nav dl,
.side-nav dt,
.side-nav dd,
.side-nav h2,
.side-nav h3,
.side-nav a {
  font-size: 12px;
  font-family: "宋体";
  color: #333;
  margin: 0;
  padding: 0;
}
.position {
  margin: -5px 0 5px;
  color: #888;
  line-height: 27px;
  height: 27px;
}
.position dt {
  display: inline;
}
.position dd {
  display: inline;
  font-weight: normal;
}
.position a:link,
.position a:visited {
  color: #888;
  text-decoration: none;
}
.side-nav {
  float: left;
  width: 180px;
}

.my_vancl {
  height: 28px;
  line-height: 28px;
  border: 1px solid #c8c8c8;
  margin-bottom: 10px;
}
.side-nav .my_vancl h2 {
  background: url(http://i.vanclimg.com/my/01.jpg) no-repeat 25px center;
  padding-left: 46px;
  display: block;
  font-weight: bold;
  color: #656565;
}
a {
  text-decoration: none;
}
.side-nav dl {
  border-left: 1px solid #c8c8c8;
  border-right: 1px solid #c8c8c8;
  padding-bottom: 5px;
}
.side-nav dl dd {
  background: url(http://i.vanclimg.com/my/05.jpg) no-repeat center bottom;
}
.side-nav dl dd a:hover {
  color: #a10000;
  _margin-left: 2px;
  background: url(http://i.vanclimg.com/my/side-nav.gif) no-repeat 0 -87px;
}
.side-nav h3 {
  background: url(http://i.vanclimg.com/my/02.jpg) repeat-x;
  line-height: 30px;
  color: #fff;
  text-align: center;
  font-weight: bold;
}
.side-nav dl dd a,
.side-nav dl dt a {
  padding: 0 0 0 30px;
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  display: block;
}
.side-nav .service-rate {
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 10px;
}
.side-nav dl dd:last-child {
  background: none;
}
.ordercontainer {
  width: 780px;
  float: right;
  margin: 0;
}
.ordercontainer,
.orderinfo,
.myOrder_buyProductsBar,
.content,
.RecommendContainer,
.mngbox .main,
.listtable,
.nedit-nav,
.mngbox,
.mngbox,
nedit-nav,
.conimg,
.titlebot,
.rightdiv,
.gmmess,
.ProductAskTab,
.ProductAskTitle,
.ProductAskContent,
.account,
.edit-nav,
.glzh,
.glzh .bangding {
  width: 1000px !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
.ordercontainer h3 {
  background: url(http://i.vanclimg.com/my/2012/recommand/bg_accountcol.png)
    repeat-x scroll 50% bottom transparent;
  height: 24px;
  margin: 0 0 10px;
}
.ordercontainer h3 span {
  border-bottom: 2px solid #92002d;
  float: left;
  font: 700 14px/22px "宋体";
  padding: 0 6px;
}
.ordercontainer h3 a {
  color: #a10000;
  float: right;
  border: none;
  font-size: 12px;
  font-weight: normal;
  background: url(http://i4.vanclimg.com/cms/20151231/pic_my.jpg) no-repeat left
    center;
  text-indent: 20px;
  margin: 0 5px 0 0;
}
.AsecurityBox01 {
  height: 18px;
  line-height: 18px;
  margin:10px 0px 10px 0px;
  overflow: hidden;
}
.asProgress {
  float: left;
  color: #000;
  height: 15px;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
.asProgress em {
  float: left;
}
.asProgSpeed {
  float: left;
  width: 136px;
  height: 13px;
  border: 1px solid #cfcfcf;
  margin-top: 2px;
}
.asProgSpeed span {
  float: left;
  width: 44px;
  height: 11px;
  line-height: 11px;
  color: #fff;
  text-align: center;
  background: #c8c8c8;
  margin: 1px 0px 1px 1px;
  display: inline;
}
.asProgSpeed span.asProgNow {
  background: url(http://i.vanclimg.com/my/2012/accountsafe/securitysprites.png)
    no-repeat left top;
}
.asProgUl,
.asLevelUl {
  float: left;
  height: 18px;
  line-height: 18px;
  margin-left: 7px;
  display: inline;
}
.asProgUl li,
.asLevelUl li {
  float: left;
  margin-right: 10px;
}
.asProgUl li a {
  float: left;
  color: #a10000;
  padding-left: 2px;
}

.asProgUl li em {
  float: left;
  margin-right: 1px;
  width: 20px;
  height: 18px;
  background: url(http://i.vanclimg.com/my/2012/accountsafe/securitysprites.png)
    no-repeat;
}
.asProgUl li.asProgPhone01 em {
  background-position: 1px -13px;
}
.asProgUl li.asProgEmail01 em {
  background-position: 0px -33px;
}
.asProgUl li.asProgPassword01 em {
  background-position: 2px -53px;
}
.asProgAtarts {
  float: right;
}
.asProgAtarts a {
  color: #a10000;
  padding-left: 7px;
}
.wtitle {
  border-bottom: #a20806 2px solid;
  height: 26px;
}
.wtitle_l {
  float: left;
}
.wtitle_l a {
  width: 91px;
  height: 26px;
  line-height: 26px;
  float: left;
  margin-right: 2px;
  display: block;
  background: url(http://i.vanclimg.com/my/2012/order/tab.gif) left no-repeat;
  text-align: center;
  color: #333;
}
.wtitle_r select {
  width: 99px;
  height: 21px;
  line-height: 19px;
  font-size: 12px;
  text-align: center;
  float: right;
  margin-right: 5px;
}
img {
  border: none;
}
.imglodding {
  padding-right: 3px;
  margin-bottom: -7px;
  width: 25px;
}
.windent {
  border: #d8d8d8 1px solid;
}
.deleteOrder_Box {
    width: 339px;
    height: auto;
    z-index: 100;
}
.deleteOrder_Tab {
    width: 329px;
    height: auto;
    padding-bottom: 15px;
    border: 1px solid #a10100;
    float: left;
}
.deleteOrder_btn {
    margin-left: 115px;
}
.deleteOrder_Tab h2 {
    width: 309px;
    height: 30px;
    padding: 0px 10px;
    line-height: 30px;
    color: #ffffff;
    background: url(http://i.vanclimg.com/my/2012/order/deletebg.png) no-repeat scroll 0px 0px;
}
.deleteOrder_Tab h2 span {
    float: left;
}
.deleteOrder_Box a {
    cursor: pointer;
}
.deleteOrder_Tab h2 a {
    display: block;
    width: 27px;
    height: 11px;
    line-height: 11px;
    float: right;
    margin-top: 10px;
    padding-left: 16px;
    background: url(http://i.vanclimg.com/my/2012/order/close.gif) no-repeat 0px 0px;
}
.delectOrder_Ok{
    text-align: center;
    margin: 28px;
}
.deleteOrder_Content02 p {
    text-align: center;
    padding: 0px 8px;
}
.deleteOrder_Content ul {
    float: left;
    margin: 0px 0px 0px 9px;
    display: inline;
}
.deleteOrder_Content ul li {
    margin-top: 10px;
    float: left;
    width: 160px;
    height: 24px;
}li
.deleteOrder_btn {
    margin-left: 115px;
}
.deleteOrder_btn01 {
    margin-left: 80px;
}
.deleteOrder_btn a {
    display: block;
    width: 79px;
    height: 27px;
    float: left;
    text-align: center;
    line-height: 27px;
    background: url(http://i.vanclimg.com/my/2012/order/deletebg.png) no-repeat scroll 0px -56px;
}
.deleteOrder_btn01 .deleteOrder_newSelect {
    width: auto;
    margin-left: 30px;
    background: none;
}
.deleteOrder_Pointer {
    float: left;
    width: 8px;
    height: 15px;
    background: url(http://i.vanclimg.com/my/2012/order/deletebg.png) no-repeat scroll 0px -41px;
    margin: 86px 0px 0px -1px;
}
.mv_RecommendedTitle {
    height: 27px;
    line-height: 27px;
    border-bottom: 1px #d2d2d2 solid;
    background: url(http://i.vanclimg.com/my/2012/order/rectitbg.png) repeat-x left top;
    overflow: hidden;
}
.mv_RecommendedTitle .titname {
    text-indent: 18px;
    font-weight: bold;
}
.myOrder_buyProductsList {
    padding-left: 5px;
}
.myOrder_buyProductsList li{
    width: 132px;
    height: 205px;
    margin-top: 20px;
    overflow: hidden;
    float: left;
    line-height: 18px;
    margin-left: 18px;
    display: inline;
}
.myOrder_buyProductsList .pic {
    border: 1px #c8c8c8 solid;
    margin-bottom: 5px;
}
.myOrder_buyProductsList .prod_name {
    height: 36px;
    overflow: hidden;
}
.s_price {
    color: #999;
    display: none;
}
.price {
    color: #a10000;
}
.s_price span {
    text-decoration: line-through;
}、
.RecommendedTitle_Pages {
    float: right;
    padding-right: 18px;
}
.pagination {
    font-size: 12px;
    line-height: 14px;
    display: inline;
}
.pagination a, .pagination span {
    background-image: url(https://sslimg.vancl.com/my/2012/share/vancl.plugin/pagination/button.gif);
    display: inline-block;
    height: 17px;
    margin-left: 10px;
    vertical-align: middle;
    _margin-top: 5px;
}
.pagination .prev {
    width: 19px;
}
.pagination span.prev {
    background-position: 0 -17px;
}
.pagination .next {
    width: 48px;
}
.pagination span.next {
    background-position: -19px -17px;
}
.myOrder_buyProductsBar {
    width: 778px;
    float: right;
    margin-bottom:30px;
    border: 1px #d2d2d2 solid;
}
</style>