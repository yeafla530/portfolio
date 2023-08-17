import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../assets/Slider.css"
import SliderComponent from "./SliderComponent"

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
];

const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ right: '10px', background: 'green' }}
      >
        Next
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ left: '10px', background: 'red' }}
      >
        Prev
      </div>
    );
  };

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
      <Slider {...settings}>
        {images.map((image, index) => (
          <SliderComponent image={image} index={index}/>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
