import React from "react";
import "./TextItem.css" 

export const TextItem: React.FC<{
  title: string;
  texts: string [];
  externalLink?: string;
  linkText?: string;
}> = ({title, texts, externalLink, linkText}) => {
return(
  <div className="textItem">
    <title className="textItem__title">{title}</title>
    {texts.map(text => (<p className="textItem__text">{text}</p>))}
    {externalLink && <div className="textItem__link">
      <a onClick={() =>{window.location.assign(externalLink);}}>
        {linkText}
      </a>
    </div>}
  </div>
)
}