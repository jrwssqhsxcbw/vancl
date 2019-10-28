<template>
  <div>
    <div class="loginheader">
      <router-link to="index" class="logo"></router-link>
      <p>
        <a href="javascript:;" target="_blank">帮助</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div.loginheader{
  width:1200px;
  font-size:12px;
  color:#333;
  margin:0 auto;
  margin-top:15px;padding:0 0 15px 0;
  border-bottom:1px solid #7a7f89;
}
div.loginheader .logo{
  background:url("../../public/img/logo_new.jpg") no-repeat left top;
  display:inline-block;
  height:50px;
  width:187px;
}
div.loginheader p{
  float:right;
  margin:20px 0 5px 5px;

}
</style>