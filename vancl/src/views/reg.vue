<template>
  <div class="parent">
    <div class="header">
      <img src="img/logo_new.jpg" alt="凡客诚品" title="凡客诚品" />
    </div>
    <div class="regist">
      <h1>
        注册新用户
        <span>
          我已经注册，现在就
          <router-link to="/login">登录</router-link>
        </span>
      </h1>
      <div style="width: 100%; height: 10px; overflow: hidden; clear: both;"></div>
      <div class="content_left">
        <ul id="v2regListInfo_bar">
          <li class="v2reg_bg1">
            <input
              type="text"
              placeholder="验证码"
              @blur="regm(-1,$event)"
              @focus="regm(1,$event)"
              v-model="iscanreg.regm"
            />
            <img src="img/CalculateValidateCode.jpg" alt />
            <span
              class="v2reg_tips02"
              :style="rm==true?{'display':'inline-block'}:{'display':'none'}"
            >请输入图片验证码</span>
          </li>
          <li class="v2reg_bg1">
            <input
              type="text"
              placeholder="请输入手机号"
              maxlength="11"
              @focus="geshi(1,$event)"
              @blur="geshi(-1,$event)"
              v-model="phone"
            />
            <button class="asPhoneregBtn" @click="phonereg">获取验证码</button>
            <span
              style="color:#a2a2a2"
              :style="preg==true?{'display':'inline-block'}:{'display':'none'}"
            >请输入真实的手机号，并进行验证</span>
            <span
              class="v2reg_tips02"
              :style="pr==true?{'display':'inline-block'}:{'display':'none'}"
            >请输入有效的手机号</span>
          </li>
          <li class="v2reg_bg1">
            <input
              class="inputLong"
              type="text"
              placeholder="填写手机验证码"
              maxlength="6"
              @focus="getM(1)"
              @blur="getM(-1)"
              v-model="iscanreg.phoneregm"
            />
            <span
              style="color:#a2a2a2"
              :style="ps==true?{'display':'block'}:{'display':'none'}"
            >请输入手机接收到的验证码</span>
          </li>
          <li class="v2reg_bg1">
            <input
              class="inputLong"
              type="password"
              placeholder="设定登录密码"
              maxlength="16"
              @focus="setupwd(1,$event)"
              @blur="setupwd(-1,$event)"
              v-model="upwd"
            />
            <span
              :class="isshow"
              :style="vs==true?{'display':'block'}:{'display':'none'}"
              style="color:#a2a2a2"
            >{{pwdreg}}</span>
            <div
              class="v2reg_Safetyinfo"
              :style="vs1==false?{'display':'none'}:{'display':'block'}"
            >
              <span class="v2regfl">安全强度：</span>
              <div :class="mmqd"></div>
              <span class="v2reg_Class">{{qdtxt}}</span>
            </div>
          </li>
          <li class="v2reg_bg1">
            <input
              class="inputLong"
              type="text"
              placeholder="再次输入密码"
              @focus="confirmUpwd(-1,$event)"
              @blur="confirmUpwd(1,$event)"
              v-model="iscanreg.confUp"
            />
            <span
              :class="confcss==true?'v2reg_tips02':''"
              :style="confcss==false?{'color':'#a2a2a2'}:''"
            >{{confUp}}</span>
          </li>
          <li class="v2reg_bg1" style="height:17px;margin-top: 30px;">
            <label>
              <input type="checkbox" v-model="is_check" />请阅读
            </label>
            <a href="javascript:;" style="color: #b52024;">《VANCL凡客诚品服务条款》</a>
          </li>
          <li class="v2reg_bg1">
            <button
              id="reg"
              class="submitStyle inputLong"
              :class="is_check?'checked':''"
              @click="goreg"
            >立即注册</button>
          </li>
        </ul>
      </div>
      <div class="content_right">
        <img src="img/login120412_newlogo.jpg" alt />
      </div>
    </div>
    <reg-footer></reg-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_check: false,
      preg: false,
      pr: false,
      rm: false,
      ps: false,
      vs: false,
      vs1: false,
      ass: true,
      confcss: false,
      upwd: "",
      pwdreg: "",
      isshow: "",
      mmqd: "",
      qdtxt: "",
      confUp: "",
      conspan: "",
      phone: "",
      iscanreg: {
        regm: "",
        phoneregm: "",
        confUp: ""
      },
      regM: "",
      regPhonem: ""
    };
  },
  created() {
    var arr = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
    for (var i = 0; i < 4; i++) {
      this.regM += arr[Math.floor(Math.random() * arr.length)];
    }
    console.log(this.regM);
  },
  methods: {
    goreg() {
      if (
        this.iscanreg.regm == this.regM &&
        (this.phone != "" && this.pr == false) &&
        this.iscanreg.phoneregm == this.regPhonem &&
        (this.qdtxt == "弱" || this.qdtxt == "中" || this.qdtxt == "强") &&
        this.iscanreg.confUp == this.upwd && this.is_check==true
      ) {
        var $url="reg"
        var data={
          "phone":this.phone,
          "upwd":this.upwd
          }
        this.axios.get($url,{
          params:data
        }).then(res=>{
          var code=res.data;
          console.log(res)
          if(code==-1){
            alert("用户已注册，请登录")
            this.$router.push("login")
          }else if(code==1){
            alert("注册成功")
            this.$router.push("index")
          }else{
            alert("注册失败")
          }
        })
      }
    },
    confirmUpwd(n, e) {
      if (n == -1) {
        this.confcss = false;
        this.confUp = "请再次输入登录密码，两次输入必须一致";
      }
      if (n == 1 && e.target.value == "") {
        (this.confUp = ""), (this.confcss = "");
      }
      if (n == 1 && e.target.value != this.upwd) {
        this.confcss = true;
        this.confUp = "两次密码输入不一致,请重新输入";
      }
    },
    setupwd(n, e) {
      var reg = /\w{6,}/;
      var reg1 = /\s+/;
      var reg2 = /((?=[\x21-\x7e]+)[^A-Za-z0-9])+/;
      var reg3 = /[a-zA-Z]+/;
      var reg4 = /[0-9]+/;
      if (n == 1) {
        this.pwdreg = "6-16位字符,可用字母、数字或符号的组合";
        this.vs = true;
        this.vs1 = false;
        this.isshow = "";
      } else if (n == -1 && e.target.value == "") {
        this.vs = false;
        this.vs1 = false;
        this.pwdreg = "";
        this.isshow = "";
      } else if (reg1.test(e.target.value)) {
        this.vs = true;
        this.vs1 = false;
        this.ass = false;
        this.pwdreg = "密码中不允许输入空格,请重新输入";
        this.isshow = "v2reg_tips02";
      } else if (e.target.value.length <= 6) {
        this.vs = true;
        this.vs1 = false;
        this.pwdreg = "密码必须大于6位,请重新输入";
        this.isshow = "v2reg_tips02";
      } else if (reg2.test(e.target.value) && reg.test(e.target.value)) {
        this.vs = false;
        this.vs1 = true;
        this.pwdreg = "";
        this.mmqd = "v2regimg_03";
        this.qdtxt = "强";
      } else if (
        (reg2.test(e.target.value) && reg3.test(e.target.value)) ||
        (reg2.test(e.target.value) && reg4.test(e.target.value)) ||
        (reg3.test(e.target.value) && reg4.test(e.target.value))
      ) {
        this.vs = false;
        this.vs1 = true;
        this.pwdreg = "";
        this.mmqd = "v2regimg_02";
        this.qdtxt = "中";
      } else {
        this.vs = false;
        this.vs1 = true;
        this.pwdreg = "";
        this.mmqd = "v2regimg_01";
        this.qdtxt = "弱";
      }
    },
    getM(n) {
      if (n == 1) {
        this.ps = true;
      } else {
        this.ps = false;
      }
    },
    regm(n, e) {
      if (n == 1) {
        this.rm = true;
      } else if (n == -1 && e.target.value != "") {
        this.rm = false;
      } else {
      }
    },
    geshi(s, e) {
      var reg = /^1[3-9]\d{9}$/;
      if (s == 1 && this.phone == "") {
        this.preg = true;
        this.pr = false;
      } else if (s == -1 && this.phone == "") {
        this.preg = false;
        this.pr = false;
        return
      }
      if (s == -1&&!reg.test(this.phone)) {
        this.pr = true;
        this.preg = false;
      }else{
        this.pr = false;
        this.preg = false;
      }
    },
    phonereg(){
    var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < 6; i++) {
      this.regPhonem += arr1[Math.floor(Math.random() * arr1.length)];
    }
    console.log(this.regPhonem);
    }
  }
};
</script>

<style>
@import url("../assets/css/reg.css");
</style>