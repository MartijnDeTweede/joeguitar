import React from "react";
import './SliderComponent.css';
import { Slide } from "../Types/Slide";

export const SliderComponent: React.FC<{
  title: string;
  slides: Slide [];
}> = ({title}) => {
  return(
    <div className="sliderComponent">
    <title className="sliderComponent__title">{title}</title>
    </div>
  )
}