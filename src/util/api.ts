/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-04-09 14:15:59
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-07-29 18:03:45
 */
import axios from 'axios' ;
import fetchJsonp from 'fetch-jsonp' ;
import { plantform } from './helper' ;

const win :any = window ;
const host = `//zhsroom.cn/api` ;


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


const ListData = () =>{
  return axios({
    method : "get" ,
    url : `${host}/article/list` ,
    timeout : 5000 ,
    withCredentials : true
  })
  .then((res) => {
    if(fcode(res.data , "status")){
      console.log('res',res.data);
      return(res.data);
     }
    console.log('res',res.data) ;
  })
  .catch((err) => {
    return {} ;
    console.log('err',err) ;
  });
}

export {
  ListData
}