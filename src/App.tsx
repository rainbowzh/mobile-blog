import React, { useEffect, useState, useCallback } from 'react';
import { LodingStyle } from './component' ;
import { ArticlePage, UserPage, ListPage } from './container';
import { getListData } from './util/api' ;
import { win } from './util/helper' ;
import './App.scss';


const List = [
  {
    name : "文章" ,
    id : '0' ,
    tag : "<ListPage/>"
  },{
    name : "用户" ,
    id : "1" ,
    tag : "<UserPage/>"
  },{
    name : "列表" ,
    id : "2" ,
    tag : "<ArticlePage/>"
  }
]
interface heiIndex {
  [key : number] : any
}

function App() {
  const [curIndex, setCurIndex] = useState(0) ;
  const [preIndex, setPreIndex] = useState(0) ;
  const [swiper, setSwiper] = useState(null) ;


  useEffect(() => {
    var mySwiper = new win.Swiper('.swiper-container', {
      autoplay: false,//可选选项，自动滑动
      initialSlide: 0 ,
      on : {
        slideChange : function(){
          setCurIndex(mySwiper.realIndex);
          setPreIndex(mySwiper.previousIndex);
        }
      }
    })
    setSwiper(mySwiper);
  },[]);

  const handleToChangeTab = (index: number) => { 
    console.log("click", (swiper as any).previousIndex, preIndex, document.documentElement.scrollTop);
    (swiper as any).slideTo(index, 1000, false);
  }

  return (
    
    <div className="App">
      <div className="swiper-container">
        <div className="swiper-wrapper">
           <div className="swiper-slide">
             <ArticlePage></ArticlePage>
           </div>
           <div className="swiper-slide">
             <UserPage></UserPage>
           </div>
           <div className="swiper-slide">
             <ListPage></ListPage>
           </div>
        </div>
      </div>
      <div className="footer-tab">
        {
          List.map((item:any, index:number) => {
            return (
              <p 
                className={index == curIndex ? "tab-item tab-item-actived" : "tab-item"} 
                key={item.id}
                onClick={() => handleToChangeTab(index)}
                >
                  {item.name}
              </p>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
