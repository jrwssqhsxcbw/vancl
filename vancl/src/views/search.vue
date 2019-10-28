<template>
  <div class="full cols_manage">
    <my-header></my-header>
    <div style="margin:0 auto">
      <div class="sr_contastion">
        <div class="sr_left">
          <div class="breadnav">
            <div class="locationdiv">
              <span>当前位置:</span>
              <router-link to>所有分类</router-link>
            </div>
            <div class="tsmsg">
              找到和
              <span>水柔...</span>
              相关商品
              <span>6</span>
              款
            </div>
          </div>
          <div class="selectarea">
            <div class="typearea">
              <div class="autoheightcontrol selectareali01 clearfix">
                <div class="selectareaLeft">
                  <em>服装</em>
                </div>
                <div class="selectareaRight autoheight">
                  <ul>
                    <li>
                      <router-link to>
                        男装
                        <span>(6)</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <span class="selectareali_a" toggle="0" style></span>
            </div>
          </div>
          <div style="background-color: white; z-index: 80; position: static; top: 0px;margin-top: 15px;">
            <div class="filterTabBarN5">
              <ul class="searchTabbarN5">
                <li class="hover">
                  <router-link to>全部商品</router-link>
                </li>
              </ul>
              <div class="pageBoxN5">
                <div class="pagediv">
                  <span>1/1</span>
                  <span>
                    <router-link to class="prevpage margintop11"></router-link>
                  </span>
                  <span>
                    <router-link to class="nextage margintop11"></router-link>
                  </span>
                </div>
              </div>
            </div>
            <div class="filterFormN5">
              <div class="filterForm0703">
                <div class="searchCol">
                  <ul>
                    <li class="moren">
                      <router-link to title="按推荐由高到低">
                        <em>默认</em>
                        <span class="upTrendBottom">按推荐由高到低</span>
                      </router-link>
                    </li>
                    <li class="xiaoliang">
                      <router-link to title="按销量由高到低">
                        <em>销量</em>
                        <span class="upTrendBottom">按销量由高到低</span>
                      </router-link>
                    </li>
                    <li class="haoping">
                      <router-link to title="按评价从高到低">
                        <em>好评</em>
                        <span class="upTrendBottom">按评价从高到低</span>
                      </router-link>
                    </li>
                    <li class="zuixin">
                      <router-link to title="上架新品">
                        <em>最新</em>
                        <span class="upTrendBottom">上架新品</span>
                      </router-link>
                    </li>
                    <li class="jiage jiageHover">
                      <router-link to title="按价格从低到高">
                        <em>价格</em>
                        <span class="upTrendBottom">按价格从低到高</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="searchbarPrice">
                  <div class="searchbarTextN50124">
                    <div class="searchbarInit">
                      <input type="text" title="按价格区间筛选 最低价" class="FpriceText0124" />
                      <span class="Fline0124">-</span>
                      <input
                        type="text"
                        title="按价格区间筛选 最低价"
                        class="FpriceText0124 FpriceTextMal0124"
                      />
                    </div>
                    <div class="searchbarFoused" style="display:none">
                      <p>
                        <router-link to class="searchbarBtnCommon">清空</router-link>
                        <router-link to class="searchbarBtnStrong"></router-link>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="hbDpBox">
                  <ul>
                    <li class="hblist hblistHover">
                      <router-link to>合并同款</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="pruarea pruarea0124 clearfix">
            <ul>
              <li class="scListArea borCdbd7d6 productwrapper border">
                <div class="pic">
                  <router-link to="" title="T恤 水柔棉 50支 2.0 圆领 男款 黑色">
                    <img class="productPhoto" alt="T恤 水柔棉 50支 2.0 圆领 男款 黑色" width="230" height="230" src="http://p2.vanclimg.com/300/300/product/6/3/8/6386494/mid/6386494-1j201907091613526618.jpg" style="display: block;">
                  </router-link>
                  <div class="teshui">198</div>
                  <div class="newview"></div>
                  <div class="vancllist_logo"></div>
                </div>
                <p>
                  <router-link to="" title="T恤 水柔棉 50支 2.0 圆领 男款 黑色v">
                    T恤 水柔棉 50支 2.0 圆领 男款 黑色
                  </router-link>
                </p>
                <div class="Mpricediv0124">
                  <span class="Sprice">
                    售价¥
                    <strong>298</strong>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="searchPage20111226">
            <input type="button" class="pageGGsub20111226">
            <strong>页</strong>
            <input type="text" class="pageGGshuru20111226">
            <strong>到第</strong>
            <em class="allpagesNumber20111226">共1页</em>
            <span class="nextpage20111226">
              <a>下一页</a>
            </span>
            <ul>
              <li class="currentpage20111226">1</li>
            </ul>
            <span class="prevpage20111226">
              <a>上一页</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sr_contastion{
  width:980px;
  margin:0 auto;
}
.full .sr_contastion{
  width:1200px;
}
.sr_left{
  width:980px;
  display:inline;
  float:left;
}
.full .sr_left{
  width:1200px;
}
.breadnav{
  line-height:40px;
  clear:both;
}
.locationdiv{
  display:inline;
}
.breadnav {
    line-height: 40px;
    clear: both;
}
.locationdiv span {
    color: #b4b4b4;
}
a{
    color: #333;
    text-decoration: none;
}
.tsmsg {
    display: inline;
    float: right;
    color: #b4b4b4;
}
.tsmsg span {
    color: #a00000;
    padding: 0px 2px;
}
.selectarea {
    border: 1px solid #C7CACD;
    clear: both;
    padding: 0px 1px 0px 0px;
}
.clearfix {
    display: inline-block;
    overflow: hidden;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.selectareali, .selectareali01 {
    clear: both;
    overflow: hidden;
    zoom: 1;
    line-height: 24px;
    background: #f5f5f5;
}
.selectareali01 {
    background: #fff;
}
.selectareaLeft {
    display: inline;
    float: left;
    width: 50px;
    text-align: center;
}
.full .selectareaLeft {
    width: 66px;
}
em, strong, th {
    font-style: normal;
    font-weight: normal;
}
.selectareaLeft span, .selectareaLeft strong, .selectareaLeft em {
    color: #959595;
    height: 24px;
    line-height: 24px;
    display: block;
    padding: 5px 0px;
}
.selectareaLeft em {
    color: #2f2f2f;
}
.selectareaRight {
    display: inline;
    float: left;
    width: 926px;
    padding: 5px 0px 5px;
    border-left: 1px solid #ccc;
    background: #fff;
}
.full .selectareaRight {
    width: 1130px;
}
.selectareaRight ul {
    overflow: hidden;
    height: auto;
}
li {
    list-style: none;
}
.selectareaRight ul li {
    display: block;
    float: left;
    height: 24px;
    line-height: 24px;
    margin-left: 25px;
    white-space: nowrap;
}
.selectareaRight li a {
    display: block;
    float: left;
    min-width: 11px;
}
.selectareaRight li a span {
    color: #999;
    height: 20px;
}
.selectareali_a {
    height: 1px;
    overflow: hidden;
    display: block;
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) repeat 0 -2279px;
}
.filterTabBarN5 {
    border-bottom: 2px solid #b81c22;
    width: 981px;
    height: 30px;
    line-height: 30px;
    position: relative;
}
.full .filterTabBarN5 {
    width: 1200px;
}
.searchTabbarN5 {
    margin-left: 1px;
    width: 755px;
}
.searchTabbarN5 li {
    float: left;
    height: 28px;
    cursor: pointer;
    text-align: center;
    line-height: 28px;
    background: #b81c22;
    color: #343434;
    border: 1px solid #ccc;
    border-bottom: none;
    padding: 0px 20px 0px;
    margin: 1px 0px 0px -1px;
    position: relative;
    overflow: hidden;
}
.searchTabbarN5 li.hover {
    color: #fff;
    height: 30px;
    line-height: 30px;
    margin-top: 0px;
    background: #b81c22;
    border: none;
}
.searchTabbarN5 li a {
    color: #343434;
}
.searchTabbarN5 li.hover a {
    color: #fff;
}
.pageBoxN5 {
    line-height: 40px;
    position: absolute;
    right: 0px;
    top: -2px;
}
.pagediv {
    display: inline;
    float: right;
}
.pagediv span {
    display: block;
    float: left;
    margin-left: 12px;
}
.prevpage {
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) no-repeat 0px -72px;
    height: 17px;
    width: 19px;
    cursor: pointer;
    display: block;
}
.margintop11 {
    margin-top: 11px;
}
.nextpage {
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) no-repeat 0px -89px;
    cursor: pointer;
    height: 17px;
    width: 48px;
    display: block;
}
.filterFormN5 {
    width: 979px;
    border-top: none;
    height: 34px;
    position: relative;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
}
.full .filterFormN5 {
    width: 1200px;
}
.searchCol {
    float: left;
    position: relative;
}
.searchCol ul li {
    float: left;
    height: 34px;
    border: 1px solid #f5f5f5;
    border-left-color: #ddd;
    border-bottom: none;
    border-top: none;
    line-height: 34px;
    padding: 0px 12px 0px 20px;
}
.searchCol ul li.moren {
    border-left: none;
}
.searchCol ul li a {
    color: #656565;
    display: inline-block;
    text-decoration: none;
}
.searchCol ul li em {
    display: inline-block;
    vertical-align: middle;
}
.searchCol ul li a span {
    display: inline-block;
    height: 11px;
    width: 11px;
    line-height: 11px;
    margin-left: 0px;
    text-indent: -9999px;
    vertical-align: middle;
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) no-repeat;
}
.searchCol ul li a span.upTrendBottom {
    background-position: 0px -3090px;
}
.searchbarPrice {
    float: left;
    height: 34px;
    border-right: 1px solid #ddd;
    width: 133px;
}
.searchbarTextN50124 {
    float: left;
    width: 109px;
    position: relative;
    height: 29px;
    z-index: 1;
    margin-left: 15px;
    display: inline;
    margin-top: 2px;
}
.searchbarTextN50124 .searchbarInit {
    position: absolute;
    width: 107px;
    height: 27px;
    z-index: 6;
}
.FpriceText0124 {
    border: 1px solid #aeb1b4;
    height: 17px;
    line-height: 17px;
    width: 35px;
    padding-left: 3px;
    float: left;
    margin: 6px 0px 0px 6px;
    display: inline;
    color: #999;
}
.Fline0124 {
    margin: 6px 3px 0px;
    float: left;
    display: inline;
    line-height: 19px;
    color: #999;
    font-size: 19px;
}
.FpriceTextMal0124 {
    margin-left: 0px;
}
.searchbarFoused {
    position: absolute;
    width: 110px;
    height: 50px;
    z-index: 5;
    border: 1px solid #b4b4b4;
    background: #fff;
    left: -2px;
}
.searchbarFoused p {
    height: 21px;
    position: relative;
    top: 27px;
}
.searchbarFoused p .searchbarBtnCommon {
    line-height: 19px;
    padding-left: 14px;
    display: inline-block;
    vertical-align: middle;
}
.searchbarFoused p .searchbarBtnStrong {
    display: inline-block;
    vertical-align: middle;
    background: url(http://i2.vanclimg.com/search/tabbgn6_ws.png) no-repeat -0px -58px;
    width: 45px;
    height: 19px;
    margin-left: 10px;
}
.hbDpBox {
    float: right;
}
.hbDpBox li {
    float: left;
    height: 34px;
    border-left: 1px solid #ccc;
    line-height: 34px;
    width: 88px;
    text-align: center;
    position: relative;
}
.hbDpBox li.hblistHover {
    background: #eee;
}
.hbDpBox li.hblist {
    position: relative;
}
.pruarea {
    padding-bottom: 20px;
    width: 981px;
}
.full .pruarea{
    width: 1200px;
    margin-top: 20px;
}
.pruarea ul {
    width: 1019px;
    list-style: none outside none;
}
.full .pruarea ul {
    width: 1215px;
}
.pruarea li {
    width: 231px;
    height: auto;
    margin: 0px 12px 20px 0px;
    display: inline;
    float: left;
}
.full .pruarea li {
    float: left;
    margin: 0px 12px 20px 0px;
    display: inline;
    width: 231px;
}
.pruarea li > div, .pruarea li .Mpricediv0124 {
    text-align: center;
    display: inline-block;
    width: 100%;
}
.pruarea li .pic {
    width: 230px;
    height: 230px;
    z-index: 0;
    position: relative;
    text-align: center;
}
.pruarea li .pic img {
    display: block;
    border: 1px solid #dbd7d6;
    width: 228px;
    height: 228px;
}
.teshui {
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) no-repeat 0px -841px transparent;
    bottom: 0;
    color: #FFFFFF;
    font-family: "arial";
    font-size: 16px;
    height: 25px;
    padding: 18px 0 2px 6px;
    position: absolute;
    right: 0;
    text-align: center;
    width: 40px;
    text-indent: -5px;
}
.newview {
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) no-repeat scroll 0 -631px transparent;
    color: #FFFFFF;
    font-family: "arial";
    font-size: 16px;
    height: 23px;
    left: 0;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 40px;
    z-index: 2;
}
.vancllist_logo {
    background: url(http://i4.vanclimg.com/search/vlistlogob.png) no-repeat scroll 0 0 transparent;
    _background: none;
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="http://i4.vanclimg.com/search/vlistlogob.png" ,sizingMethod="crop");
    bottom: 4px;
    height: 24px;
    left: -6px;
    position: absolute;
    width: 111px;
    display: none;
}
.pruarea li p {
    margin-top: 10px;
    padding: 0px 3px 5px;
    line-height: 20px;
    text-align: center;
    font-size: 13px;
    font-family: "Microsoft YaHei";
    height: 38px;
    overflow: hidden;
}
.pruarea li p a {
    margin-top: 10px;
    padding: 0px 3px 5px;
    line-height: 38px;
    text-align: center;
    font-size: 13px;
    font-family: "Microsoft YaHei";
}
.pruarea li p a, .pruarea li p a:link, .pruarea li p a:visited, .pruarea li p a:hover, .pruarea li p a:active {
    color: #727171;
}
.pruarea li .Mpricediv0124 {
    color: #b81c22;
    font-weight: bold;
}
.pruarea li > div, .pruarea li .Mpricediv0124 {
    text-align: center;
    display: inline-block;
    width: 100%;
}
.Sprice, .Pprice {
    color: #b81c22;
}
.Sprice {
    font-weight: bold;
}
.pruarea li .Mpricediv0124 span {
    padding: 0px 3px 5px;
    line-height: 20px;
    text-align: center;
    font-size: 13px;
    font-family: "Microsoft YaHei";
}
.Sprice strong {
    font-weight: bold;
    text-decoration: line-through;
}
.searchPage20111226 {
    display: inline;
    float: right;
    margin-bottom:20px;
}
.pageGGsub20111226 {
    float: right;
    width: 49px;
    height: 26px;
    border: none;
    border: 0;
    margin-left: 10px;
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) no-repeat scroll 0px -2044px;
    cursor: pointer;
}
.searchPage20111226 strong {
    float: right;
    margin-top: 6px;
}
.pageGGshuru20111226 {
    float: right;
    width: 26px;
    height: 24px;
    border: 1px solid #ededed;
    line-height: 24px;
    text-align: center;
    margin: 0px 4px;
}
.searchPage20111226 strong {
    float: right;
    margin-top: 6px;
}
.allpagesNumber20111226 {
    float: right;
    display: inline-block;
    margin: 6px 10px 0px;
}
.nextpage20111226 {
    cursor: pointer;
    display: block;
    width: 43px;
    height: 24px;
    padding-right: 14px;
    line-height: 24px;
    text-align: right;
    border: 1px solid #efefef;
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) no-repeat scroll 46px -1954px;
}
.searchPage20111226 span {
    display: inline;
    float: right;
}
.searchPage20111226 ul {
    display: inline;
    float: right;
    margin-right: 7px;
}
.searchPage20111226 li {
    display: inline;
    float: left;
    margin-left: 7px;
    text-align: center;
}
.searchPage20111226 .currentpage20111226 {
    color: #FFFFFF;
    font-weight: bold;
    background: #b81c22;
    width: 26px;
    line-height: 24px;
    height: 24px;
    border: 1px solid #ededed;
}
.prevpage20111226 {
    cursor: pointer;
    display: block;
    width: 43px;
    height: 24px;
    padding-left: 14px;
    line-height: 24px;
    text-align: left;
    border: 1px solid #efefef;
    background: url(http://i.vanclimg.com/search/sprites_20130606.png) no-repeat scroll 3px -1996px;
}
</style>