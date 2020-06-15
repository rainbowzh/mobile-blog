/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-04-09 14:15:59
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-06-12 14:40:58
 */
import axios from 'axios' ;
import fetchJsonp from 'fetch-jsonp' ;
import { plantform } from './helper' ;

const win :any = window ;
const host = `//zprecommend.58.com` ;

//首页聚合，用户已订阅，获取订阅标签，职位列表接口
const ListIndex = `${host}/api/find` ;

//mock
const Mock = `https://zprecommend.58.com/api/find/?firstIndex=8&pageSize=5&version=9.7.1&type=videoList&reqtype=videoList&page=1` ;
//fcode
const fcode = (result:any = {} , keyName:string = 'state') => {
	let code = result[keyName] * 1 ;
	// let { data = {}} = result ;
	switch(code){
		case -1 : //参数错误
			return false 
		case -2 : //服务错误
			return false ;
		case  0 : 
			return true;
		default :
			return true ;
	} ;
} ;

interface quaryType {
  page : number ,
  lastIndex ?: string
}

//首页聚合数据
const getListData = (params:quaryType) => {
  return axios({
    method: 'get',
    url: ListIndex,
    params: {
      type  : 'videoZhuanqu' , 
      reqtype : 'videoZhuanqu' ,
      pageSize : 14 ,
      queryPage : params.page ,
      version : "9.5.0" ,
      lastIndex : params.lastIndex || 0
    } ,
    withCredentials : true ,
    timeout : 5000
  })
  .then((res) => {
    if(fcode(res.data , "status")){
      console.log('res',res.data.data.infoFlow);
      return(res.data.data.infoFlow);
     }
    console.log('res',res.data.result) ;
  })
  .catch((err) => {
    return {} ;
    console.log('err',err) ;
  });
  
}


export {
  getListData
}