import React, { useEffect } from 'react' ;
import { win } from '../../util/helper';

const IndexPage = () => {
  useEffect(() => {
    var IndexSwiper = new win.Swiper("#indexSwiper", {
      direction : 'vertical',
      autoplay: false,//可选选项，自动滑动
      // allowSlidePrev : false ,
      touchRatio : 0.6
    })
  },[]);

  return(
    <div className="Indexpage-block">
      <div className="indexpage-swiper swiper-container" id="indexSwiper">
        <div className="indexpage-swiper-wrapper swiper-wrapper">
          <div className="indexpage-swiper-slide swiper-slide">
            <img className="intro-typing" src="/assest/title.png"></img>
            <img className="intro-typing" src="/assest/title-2.png"></img>
            <img className="intro-typing" src="/assest/person-1.png"></img>
            <img className="intro-typing" src="/assest/arrow.png"></img>
          </div>
          <div className="indexpage-swiper-slide swiper-slide">
            <img className="intro-userMsg" src="/assest/userIntro-1.png" alt=""/>
            <img className="intro-userMsg" src="" alt=""/>
            <img className="intro-userMsg" src="" alt=""/>
          </div>
          <div className="indexpage-swiper-slide swiper-slide">3</div>
          <div className="indexpage-swiper-slide swiper-slide">4</div>
          <div className="indexpage-swiper-slide swiper-slide">5</div>
          <div className="indexpage-swiper-slide swiper-slide">6</div>
        </div>
      </div>
    </div>
  )
}



export default IndexPage ;