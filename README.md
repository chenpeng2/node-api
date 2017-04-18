# node-api
use node to design the API 
方案1：
重新开始创建项目：
第一步：
npm install -g express-generator
express -e blog
cd blog && npm install
第二部：
参考网站：http://www.cnblogs.com/wen-wen/p/6149847.html，向项目的app.js加入里面的api.js
注意：默认浏览器通过url只会访问get方式，在这里，运行项目前需要开启mongodb的2个服务，再在index.ejs里可以直接请求了

mongodb的安装与启动服务：----两者都是在<img src="http://onkk2668f.bkt.clouddn.com/3YI%7D%7B%60%60P2TI1%5BNOBM@IV%60M3.png">路径下
1,mongod.exe --dbpath c:\data\db
2,第一条前台开了才能开启：
mongo

在mongodb2个服务开启了之后，我们就可以npm start开启项目了


方案2：你也可以直接用git直接clone项目，执行npm install装一下依赖包，再如方案1开启mongodb的2个服务和npm start就ok

