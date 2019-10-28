#设置客户端连接服务器使用UTF8字符集
SET NAMES UTF8;
#丢弃数据库biy如果存在的话
DROP DATABASE IF EXISTS vancl;
#创建一个新的by表使用UTF8字符集
CREATE DATABASE vancl CHARSET=UTF8;
#进入数据库biy
USE vancl;

/*****用户模块相关的表*****/
#用户信息表
CREATE TABLE `vancl_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `avatar` varchar(128) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
INSERT INTO biy_user VALUES
('1', 'dingding','123456','444456789@qq.com','13501111111','img/avatar/default.png', '丁春秋', '0'),
('2', 'dangdang','123456','333453789@qq.com','13502222222','img/avatar/default.png', '当当喵', '1'),
('3', 'doudou','123456','113432789@qq.com','13503333333','img/avatar/default.png', '豆豆', '1'),
('4', 'yaya','123456','113456111@qq.com','13604444444','img/avatar/default.png', '秦小雅', '0');