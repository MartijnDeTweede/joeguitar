import React from "react";
import './SliderComponent.css';
import Slider from "react-slick";
import { Slide } from "../Types/Slide";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export const SampleNextArrow: React.FC<{className?: string, style?: {}, onClick?: () => {}}> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#3c4044"}}
      onClick={onClick}
    />
  );
}

export const SamplePrevArrow: React.FC<{className?: string, style?: {}, onClick?: () => {}}> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#3c4044"}}
      onClick={onClick}
    />
  );
}

export const SliderComponent: React.FC<{
  title: string;
  slides: Slide [];
}> = ({title, slides}) => {
  return(
    <div className="sliderComponent">
    <title className="sliderComponent__title">{title}</title>
    <Slider
    slidesToShow={3}
    dots
    infinite
    nextArrow={<SampleNextArrow />}
    prevArrow={<SamplePrevArrow />}
    responsive={[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]}

    >
      {
        slides.map(slide => (
          <div className="sliderComponent__Slide" onClick={() => slide.onclick()}><img src={slide.imagesource} alt={slide.alt}/> </div>
        ))
      }
    </Slider>
    </div>
  )
}