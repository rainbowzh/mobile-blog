import React, { useEffect, useMemo } from 'react' ;


const List = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;
const ArticlePage = (props:any) => {
  return(
    <div className="Articlepage-block">
      {
        List.map((item:any, index:number) => {
          return (
            <div className="article-item" key={index}>文章</div>
          )
        })
      }
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