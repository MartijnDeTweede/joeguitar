import React from "react"
import './ImageItem.css';

export const ImageItem: React.FC<{src: string, alt: string, externalLink: string}> = ({src, alt, externalLink}) => {
  return(
    <div>
      <img src={src} alt={alt} className="imageItem__image" onClick={() => {
        window.location.assign(externalLink);
      }}/>
    </div>
  )
}