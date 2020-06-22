import React, { useEffect, useMemo } from 'react' ;
import  { ListData } from '../../util/api' ;
import { Link } from 'react-router-dom' ;


let List:Array<number> = [] ;
const  ArticlePage = (props:any) => {  
  useEffect(() => {
    const getList = async () => {
      let res = await ListData();
      List = res.list ;
      console.log('res-data',res) ;
    }
    getList();
  },[]);


  return(
    <div className="Articlepage-block">
      {
        props.List.map((item:any, index:number) => {        
          return (
            <div className="article-item" key={index}>
              <Link to={`/detail:${index}`}>
                <div className="item-type">
                  <span style={{background : `#52b87e`}}>js</span>
                  <span style={{background : `#6495ed`}}>React</span>
                </div>
                <div className="item-title">{item.title}</div>
                <div className="item-content"  dangerouslySetInnerHTML={{__html : item.context}}></div>
                <div className="item-extends">{item.publishTime}</div>
              </Link>
            </div>
          )
        })
      }
      <div className="footer-article">到底啦</div>
    </div>
  )
}

// const isEqual = (prevProps:any, nextProps:any) => {
//   if (prevProps.initHei !== nextProps.initHei) {
//       return false;
//   }
//   return true;
// }

export default ArticlePage ;