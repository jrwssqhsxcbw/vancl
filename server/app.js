const express=require("express");
const session=require("express-session");
const bodyParser=require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  connectionLimit:20,
  database:"vancl"
}) 
var server = express();
server.listen(8080);
server.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050"],
  credentials:true
}))
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}))
server.use(express.static("public"));
server.get("/reg",(req,res)=>{
  var phone=req.query.phone;
  var upwd=req.query.upwd;
  var uname=req.query.phone;
  var sql="select uid from vancl_user where phone=?"
  pool.query(sql,[phone],(err,result)=>{
    if(err)throw err
    if(result.length==0){
      var sql = "INSERT INTO vancl_user set phone=?,upwd=?,uname=?";
      pool.query(sql,[phone,upwd,uname],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
          res.send("1");
        }else{
          res.send("0")
        }
      })
    }else{
      res.send("-1")
    }
  })
})
server.get("/login",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  var sql="select uid from vancl_user where uname=?";
  pool.query(sql,[uname],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send("-1");
    }else{
      var sql="select uid from vancl_user where uname=? and upwd=?"
      pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
          res.send("0")
        }else{
          var uid=result[0].uid
          req.session.uid=uid;
          res.send("1")
        }
      })
    }
  })
})
server.get("/index",(req,res)=>{
  var uid=req.session.uid;
  var sql="select * from vancl_user where uid=?"
  if(!uid){
    res.send("-1")
  }else{
    pool.query(sql,[uid],(err,result)=>{
      if(err)throw err;
      res.send(result);
    })
  }
})
server.get("/logout",(req,res)=>{
  req.session=null;
  console.log(req.session)
  res.send("1");
})