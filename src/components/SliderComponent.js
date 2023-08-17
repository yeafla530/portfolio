import React, { Component } from "react";
import Slider from "react-slick";



function SliderComponent({image, index}) {
    return (
        <div className="slide">
            {image} {index}
        </div>
    )
}

export default SliderComponent