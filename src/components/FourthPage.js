import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from "./SliderComponent"
import "../assets/fourth.css"
import { useEffect } from 'react';


const image_title = [
  ['emotion_diary.png', '감정일기장'],
  ['bearun.png', 'BEARUN'],
  ['edu_ai.png', 'EDU_AI'],
  ['voda.png', 'VODA'],
  ['jobara.png', 'JOBARA'],

];

const FourthPage = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlideIndex(index);
  };

  useEffect(()=>{
    addCustomClassToSlide((activeSlideIndex)%11);
  },[activeSlideIndex])

  const addCustomClassToSlide = (index) => {
    console.log(index)
      const slideItems = document.querySelectorAll('.slick-slide');
      slideItems.forEach((item, i) => {
          const title = item.querySelector('.project__title'); // 2번째 하위 요소 선택
          const image = item.querySelector('.slide__img');
          if (i === index+1) {
              title.classList.add('project__title__active'); // 원하는 클래스 추가
              image.classList.remove('slide__img__none')
              image.classList.add('animate__animated', 'animate__bounceInLeft', 'animate__fast');

            } else {
              title.classList.remove('project__title__active');
              image.classList.add('slide__img__none')
              image.classList.remove('animate__animated', 'animate__bounceInLeft');
          }
      });
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => handleSlideChange(index),
  };

  return (
    <div className="slider-container">
      {/* <div className="project__title">
        <h1>PROJECTS.</h1>
      </div> */}
      <Slider {...settings}>
        {image_title.map(([image, title], index) => (
          <SliderComponent key={index} array={{image, title, index}}/>
        ))}
      </Slider>
    </div>
  );
};

export default FourthPage;
