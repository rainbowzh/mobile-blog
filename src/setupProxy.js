/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-04-16 10:17:12
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-06-22 10:34:49
 */
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware("/api/article/list" ,{
    target : "http://localhost:3001" ,
    changeOrigin : true ,
  }))
};

