import React, { useState, useEffect } from "react";
import Slider from "react-slick";



function SliderComponent({array}) {
    const [currentIndex, setCurrentIndex] = useState(-2)
    const {image, title, index} = array
    // const []
    
    useEffect(()=>{
        const elementsWithClass = document.querySelector('slide-active');
        if (elementsWithClass) {
            const dataIndex = elementsWithClass.getAttribute('data-index')

            // 이미 지정된 data-index 값들을 가져온다고 가정
            if (currentIndex != dataIndex) {
                
            }    
        }


    },[])

    return (
        <div className="slide">
            <div className="slide__context">
                <div className="slide__context__title">
                    {title}
                </div>
                <p>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</p>
            </div>
            <div className="slide__img">
                <img src={process.env.PUBLIC_URL + image} alt={image} />
            </div>
        </div>
    )
}

export default SliderComponent