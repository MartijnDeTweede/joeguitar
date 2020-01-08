import React from "react";
import "./TextItem.css" 

export const TextItem: React.FC<{title: string, text: string}> = ({title, text}) => {
return(
  <div className="textItem">
    <title className="textItem__title">{title}</title>
    <p className="textItem__text">{text}</p>
  </div>
)
}