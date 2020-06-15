/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-04-16 10:17:12
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-04-26 11:25:23
 */
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware("/api/find" ,{
    target : "http://zprecommend.58.com" ,
    changeOrigin : true ,
  }))
};

