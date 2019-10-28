<template>
  <div class="BayWindow" style="position: fixed; right: 10px; bottom: 20px; z-index:10">
    <ul>
      <li class="newPeople">
        <a href="javascript:;" target="_blank"></a>
      </li>
      <li class="downApp">
        <a href="javascript:;" target="_blank"></a>
      </li>
      <li class="online">
        <a href="javascript:;" target="_blank"></a>
      </li>
      <li class="BlackTop">
        <a href="javascript:;" onclick="javascript:document.getElementById('headerTopArea').scrollIntoView()"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.BayWindow{
  width:73px;
  height:281px;
  border:1px solid #b81b22;
  border-bottom:none;
  margin-bottom:30px;
}
.BayWindow ul li{
  width:73px;
  border-bottom:1px solid #b81b22;
}
.BayWindow ul li a{
  display:block;
  width:73px;
}
.BayWindow ul li.newPeople a {
  height: 76px;
  background: url(https://i2.vanclimg.com/cms/20190716/baywindow0716.png) no-repeat -1px -1px;
}
.BayWindow ul li.downApp a {
  height: 76px;
  background: url(http://i2.vanclimg.com/cms/20160802/baywindow.png) no-repeat -1px -1px;
}
.BayWindow ul li.online a {
  height: 71px;
  background: url(http://i2.vanclimg.com/cms/20160802/baywindow.png) no-repeat -1px -78px;
}
.BayWindow ul li.BlackTop a {
  height: 55px;
  background: url(http://i2.vanclimg.com/cms/20160802/baywindow.png) no-repeat -1px -149px;
}
</style>