import React, { useEffect ,useState } from 'react' ;
import { ArticlePage, UserPage, ListPage } from '../index'
import { getListData, ListData } from '../../util/api' ;
import { win } from '../../util/helper' ;
import { Link } from 'react-router-dom' ;

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
];

interface heiIndex {
  [key : number] : any
}


const ComListPage = () => {
  const [curIndex, setCurIndex] = useState(0) ;
  const [preIndex, setPreIndex] = useState(0) ;
  const [swiper, setSwiper] = useState(null) ;
  const [articleList, setArticleList] = useState([]) ;
  const translHei = document.body.scrollTop ;

  useEffect(() => {
    var mySwiper = new win.Swiper('#comlistSwiper', {
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
    const getList = async () => {
      let res = await ListData();
      setArticleList(res.list) ;
      console.log('res-data',res) ;
    }
    getList();
  },[]);

  const handleToChangeTab = (index: number) => { 
    console.log("click", (swiper as any).previousIndex, preIndex, document.documentElement.scrollTop);
    (swiper as any).slideTo(index, 1000, false);
  }

  const handleToBlur = () => {
    document.body.scrollTop = translHei;
  }

  return(
    <div className="ComListPage-block">
      {
        curIndex !== 2 ? ""
        : <div className="list-search">
            <div className="input-wrap"><input className="input-text" type="text" onBlur={handleToBlur}/></div>
          </div>
      }
      <div className="swiper-container" id="comlistSwiper">
        <div className="swiper-wrapper">
           <div className="swiper-slide">
             <ArticlePage List={articleList}></ArticlePage>
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
  )
}


export default ComListPage ;