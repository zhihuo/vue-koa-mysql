# mysql 作为数据库，给web前端提供的接口的语法

# koa-generator 框架开发,能省时省力，不必手动去搭建，步骤如下：
```
  npm install -g koa-generator

  koa mysqlService && cd mysqlService && npm install

  npm start

  chome localhost:3000 (端口可以在bin\www文件下修改)

```

# 文档结构介绍：
```
	mysqlService
	     |
	     |__config(配置)
	     |    |
	     |    |__ mysql_config.js(数据库配置)
	     |
	     |
	     |____public（前端资源）
	     |
	     |
	     |____routes（接口路由）
	     |      |
	     |      |___ index.js(接口的统一出口)
	     |      |
	     |		|___ **.js (其他对应接口文件)
       |
       |
       |____ utils (方法统集，公共方法池)
       |       |
       |		 |___ mysql.js (表的创建以及操作)
       |       |
       |       |___ query.js (链接表的方法)
       |
       |
       |____ bin (www文件端口的设置)
       |
       |
       |____ app.js (服务的出口)

```



