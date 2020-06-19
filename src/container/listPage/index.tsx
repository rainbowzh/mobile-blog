import React, { useEffect, useState } from 'react' ;


const List = [
  {
    id: `234` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么难呢?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  },
  {
    id: `334` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么难呢?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  },
  {
    id: `2234` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么难呢?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  },
  {
    id: `2354` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么难呢找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  },
  {
    id: `2346` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么找工作时，你遇到过哪些奇葩事难呢?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  },
  {
    id: `23224` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么难呢?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  },
  {
    id: `21134` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么难呢?找工作时，你遇到过找工作时，你遇到过哪些奇葩事哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  },
   {
    id: `24` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么难呢?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  },
  {
    id: `34` ,
    title : "找工作时，你遇到过哪些奇葩事?" ,
    context : "想找工作你怎么这么难呢?找工作时，你遇到过找工作时，你遇到过哪些奇葩事哪些奇葩事?找工作时，你遇到过哪些奇葩事?找工作时，你遇到过哪些奇葩事?"
  }
]
const ListPage = (props:any) => {
  const translHei = document.body.scrollTop ;

  const handleToBlur = () => {
    document.body.scrollTop = translHei;
  }


  return(
    <div className="Listpage-block">
       <div className="list-search">
          <div className="input-wrap"><input className="input-text" type="text" onBlur={handleToBlur}/></div>
        </div>
      {
        List.map((item:any) => {
          return(
            <div className="list-item" key={item.id}>
              <div className="title">{item.title}</div>
              <div className="context">{item.context}</div>
            </div>
          )
        })
      }
    </div>
  )
}


export default ListPage ;