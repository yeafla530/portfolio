import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from "./SliderComponent"
import "../assets/fourth.css"


const image_title = [
  ['bearun2.png', '감정일기장'],
  ['bearun.png', '베어런'],
  ['edu_ai.png', 'EDU_AI'],
  ['voda.png', 'VODA'],
  ['jobara.png', 'JOBARA'],

];


const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <div className="project__title">
        <h1>PROJECTS.</h1>
      </div>
      <Slider {...settings}>
        {image_title.map(([image, title], index) => (
          <SliderComponent array={{image, title, index}}/>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
