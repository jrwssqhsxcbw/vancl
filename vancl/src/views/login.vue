<template>
  <div>
    <login-header></login-header>
    <div class="wrapper clearfix">
      <div class="loginTitle">
        <h3>
          凡客 Vancl 登录
          <span class="gotoReg">
            没有账户免费
            <router-link to="reg">
              注册
            </router-link>
          </span>
        </h3>
      </div>
      <div class="login">
        <div class="tag">
          <ul class="tags">
            <li @click="on(1)" :class="show==1?'on':''">普通登录</li>
            <li @click="on(0)" :class="show==0?'on':''">快速登录</li>
          </ul>
        </div>
        <div class="shows">
          <div class="user_infor" v-if="show==1">
            <div class="newtxt">
              <input type="text" class="inputTextColor" placeholder="请输入用户名" v-model="uname">
            </div>
            <div class="tips" style="visibility:hidden;">用户名不能为空!</div>
            <div class="newtxt">
              <input type="password" class="inputTextColor" placeholder="请输入密码" v-model="upwd">
            </div>
            <div class="tips" :style="regshow==true?{'visibility':'visible'}:{'visibility':'hidden'}">{{reguser}}</div>
            <div class="bt">
              <span style="none">
                <router-link class="forget" to="javascript:;" style="display:none;">账户解冻</router-link>
              </span>
              <router-link class="forget" to="">找回密码</router-link>
              <div @click="login"><router-link to="" class="log">登录</router-link></div>
            </div>
          </div>
          <div class="user_infor" v-else>
            <div class="newtxt phoneReg">
              <input type="text" placeholder="输入手机号">
            </div>
            <router-link to="javascript:;" class="asPhoneregBtn" id="getSmsCode" style="display:block">
              获取短信验证码
            </router-link>
            <div class="asPhoneregBtn" id="sendedSmsCode" style="display:none">已发送</div>
            <div class="asPhoneregBtn" id="sendingSmsCode" style="display:none">正在发送验证码</div>
            <div id="err_phone" class="tips"></div>
            <div class="newtxt" style="border: 0 none;">
              <input type="text" placeholder="验证码" class="phoneMa">
              <img class="Mapic" src="img/CalculateValidateCode.jpg" alt="">
              <router-link to="javascript:;" class="changeMapic">看不清?换一张</router-link>
            </div>
            <div class="tips">验证码不能为空</div>
            <div class="newtxt">
              <input type="text" placeholder="请输入手机验证码">
            </div>
            <div class="tips">请输入有效的手机号码</div>
            <div class="bt">
              <router-link to="javascript:;" class="log">登录</router-link>
            </div>
          </div>
          <div class="glup">
            <h1 class="hezuo">使用合作网站账号登录凡客</h1>
            <p class="qkimg">
              <router-link to="javascript:;" class="weixin"></router-link>
              <router-link to="javascript:;" class="xiaomi"></router-link>
              <router-link to="javascript:;" class="zhifubao"></router-link>
              <router-link to="javascript:;" class="qq"></router-link>
              <router-link to="javascript:;" class="qihu360"></router-link>
              <router-link to="javascript:;" class="weibo"></router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="advert">
        <img src="img/login120412_newlogo.jpg" alt="">
      </div>
    </div>
    <reg-footer></reg-footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:1,
      uname:"",
      upwd:"",
      reguser:"",
      regshow:false,
      vsi:false
    }
  },
  methods:{
    on(i){
      if(i==1){
        this.show=1;
      }else if(i==0){
        this.show=0;
      }
    },
    login(){
      var data={
        uname:this.uname,
        upwd:this.upwd
      }
      this.axios.get("login",{
        params:data
      }).then(res=>{
        if(res.data==-1){
         this.regshow=true;
         this.reguser="账户不存在"
        }else if(res.data==0){
          this.regshow=true;
          this.reguser="账户和密码不匹配"
        }else{
          this.$router.push("index");
        }
      })
    }
  }
}
</script>

<style>
@import url("../assets/css/login.css");
</style>