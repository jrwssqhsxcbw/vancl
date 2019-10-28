<template>
  <div class="mycart">
    <div class="wrapper">
      <div class="header clearfix">
        <router-link to="index" class="logo" title="凡客诚品">
          <img src="http://i2.vanclimg.com/cms/20140829/vancl-logo.png" alt="凡客诚品" />
        </router-link>
        <div class="help-center">
          <router-link to>帮助中心</router-link>
        </div>
        <div class="account">
          <p>
            您好
            <span class="username"></span>
            <router-link to="login" class="logout">退出登录</router-link>|
            <router-link to class="switch">更换用户</router-link>
          </p>
        </div>
      </div>
      <div class="location">
        <em>1.我的购物车</em>
        <span>2.填写核对信息单</span>
        <span>3.成功提交订单</span>
      </div>
      <div class="content">
        <div class="cart-gift">
          <div></div>
          <div class="cart-empty">
            您的购物车中没有商品，请您先
            <router-link to>选购商品>></router-link>
          </div>
        </div>
        <div class="cart-collocate">
          <div class="coudan-title" style="display:none">
            <h2>
              <strong>免运费凑单商品</strong>
              (您再买
              <span></span>
              凡客发货商品，即可享免运费优惠)
            </h2>
            <router-link to class="close">
              <img src="https://ssl.vanclimg.com/Others/2011/2/15/dpbox_06.gif" alt />
            </router-link>
          </div>
          <div
            id="collocate-list"
            class="product-list-panel coudan-content clearfix clearfixCD"
            style="display: none;"
          ></div>
        </div>
        <div id="remove-product" style="display:none;">
          <table cellspacing="0">
            <thead>
              <tr>
                <th scope="col" colspan="6">
                  您删除的商品，您可以
                  <span>重新购买</span>
                  或
                  <span>放入收藏夹</span>
                  。
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="gift"></div>
        <div class="cuxiao" style="display:none">
          <ul class="tab">
            <li class="seleted">
              <router-link to>最近浏览商品</router-link>
            </li>
            <li>
              <router-link to>推荐商品</router-link>
            </li>
            <li>
              <router-link to>收藏夹</router-link>
            </li>
          </ul>
          <div class="recent-browse product-list-panel clearfix" style="display:block"></div>
          <div class="tj-product product-list-panel clearfix" style="display: none;"></div>
          <div class="favorite product-list-panel clearfix" style="display: none;"></div>
        </div>
        <img src style="display:none" />
      </div>
      <div class="footer">
        <p
          class="copyrights"
        >Copyright 2007 - 2019 vancl.com All Rights Reserved 京ICP证100557号 京公网安备11010102000579号 出版物经营许可证新出发京批字第直110138号</p>
        <p class="certs">
          <a
            class="ectrustprc"
            title="中国电子商务诚信单位"
            href="http://www.ectrustprc.org.cn/seal/splash/1000020.htm"
            target="_blank"
          >
            <img alt="中国电子商务诚信单位" src="//ssl.vanclimg.com/shopping/cert-redlogo.gif" />
          </a>
          <span class="costumeorg" title="中国服装协会会员单位">
            <img alt="中国服装协会会员单位" src="//ssl.vanclimg.com/shopping/cert-costumeorg.gif" />
          </span>
          <a
            class="online315"
            href="http://www.315online.com.cn/member/315090053.html"
            title="网上交易保障中心"
            target="_blank"
          >
            <img alt="网上交易保障中心" src="//ssl.vanclimg.com/shopping/cert-wsjybzzx.gif" />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a{
  text-decoration: none;
  color:#333;
}
.wrapper{
  margin:0 auto;
  width:980px;
}
.header{
  border-bottom:1px solid #7a7f89;
  padding-top:15px;
}
a.logo{
  float:left;
  display:block;
  height:39px;
  width:311px;
}
img, input {
    vertical-align: middle;
}
img {
    border: none;
}
.help-center,.account{
  float:right;
  line-height:39px;
}
.account{
  margin-right:40px;
  color:#666;
  display:none;
}
.account a, a.login{
  color:#a10000;
  padding:0 5px;
}
.location{
  background: url(//ssl.vanclimg.com/shopping/newpromotions/newProm.gif);
  background-position: 0 0;
  height: 28px;
  width: 540px;
  margin-top: 10px;
}
.location em,.location span {
    color: #666;
    display: inline-block;
    font-weight: bold;
    line-height: 28px;
    text-align: center;
    width: 170px;
}
.location em, .location em a {
    color: #fff;
}
.content {
    margin-top: 10px;
}
.cart-empty, .cart-loading {
    color: Gray;
    font-size: 14px;
    font-weight: bold;
    height: 50px;
    margin-top: 50px;
    text-align: center;
}
.cart-empty a {
    color: #A10000;
    text-decoration: underline;
}
.cart-collocate {
    position: absolute;
    width: 820px;
    top: 144px;
    left: 80px;
    z-index: 100;
    top: 292.5px; 
    left: -130px;
}
.coudan-title {
    background: none repeat scroll 0 0 #B80000;
    width: 810px;
    height: 35px;
    padding-left: 10px;
    display: none;
}
.coudan-title h2 {
    float: left;
    display: inline;
    color: #FFF;
    font-size: 12px;
    line-height: 33px;
    font-weight: normal;
}
.coudan-title strong {
    font-size: 14px;
}
.coudan-title .close {
    float: right;
    display: inline;
    margin: 10px 10px 0 0;
}
.product-list-panel {
    border: 1px solid #DCDFE5;
    border-top: 0 none;
    width: 978px;
}
.coudan-content {
    width: 818px;
    overflow: hidden;
    border: 1px solid #900000;
    border-top: none;
    background-color: #FFF;
}
.clearfixCD {
    padding-top: 5px;
}
#collocate-list {
    display: none;
}
.remove-product {
    margin-top: 35px;
    display: none;
}
table {
    border-collapse: collapse;
    padding: 0;
    border-spacing: 0;
    width: 100%;
    border-collapse: separate;
}
.remove-product table {
    border: 1px solid #DCDFE4;
    border-top: 0 none;
}
table th, table td {
    text-align: center;
    vertical-align: middle;
}
table th {
    height: 37px;
}
.cart-product th,.remove-product th {
    border-top: 1px solid #DCDFE4;
    border-bottom: 1px solid #B7B7B7;
}
.remove-product th {
    text-align: left;
    text-indent: 12px;
    font-weight: normal;
}
.remove-product th span {
    font-weight: bold;
}
.cuxiao, .gift {
    clear: both;
    padding-top: 30px;
}
.tab {
    border-bottom: 1px solid #A10000;
    height: 33px;
    overflow: hidden;
}
.tab li {
    border: 1px solid #D6D6D6;
    font-weight: bold;
    float: left;
    height: 31px;
    line-height: 31px;
    margin-right: 2px;
    text-align: center;
    width: 108px;
    display: inline;
}
.tab li, .tab li.selected {
    background: transparent url(//ssl.vanclimg.com/shopping/sprite-tab.gif) repeat-x 0 0;
}
.tab li.selected {
    background-position: 0 -31px;
    background-color: #a10000;
    border: 1px solid #6F0019;
}
.tab li.selected a:link, .tab li.selected a:visited {
    color: #FFFFFF;
}
.tab li {
    border: 1px solid #D6D6D6;
    font-weight: bold;
    float: left;
    height: 31px;
    line-height: 31px;
    margin-right: 2px;
    text-align: center;
    width: 108px;
    display: inline;
}
.tj-product, .recent-browse, .favorite {
    display: none;
}
.footer{
  color:#999;
  padding:10px 0;
  text-align:center;
  margin-bottom:20px;
}
.footer p {
    margin-bottom: 20px;
}
.ectrustprc, .costumeorg, .online315 {
    display: inline-block;
    margin-right: 20px;
}
.ectrustprc {
    width: 156px;
    height: 46px;
}
.costumeorg {
    width: 156px;
    height: 45px;
}
.online315 {
    width: 96px;
    height: 42px;
}
</style>