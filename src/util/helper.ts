/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-04-09 14:09:12
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-06-12 14:39:18
 */
const win:any = window ;

const plantform = navigator.userAgent.toLowerCase().match(/android/i) ? "android" : "ios" ;

export { 
  plantform ,
  win
}