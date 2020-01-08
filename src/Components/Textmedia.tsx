import React, { ReactNode } from "react";
import './Textmedia.css';

export const Textmedia: React.FC<{
  textItem: ReactNode;
  mediaItem: ReactNode;
  invert: boolean
}> = ({textItem, mediaItem, invert}) => {
  return(
    <div>
      <div className="textMedia">
        {invert ? <div className="textItem">{textItem}</div> : <div className="mediaItem">{mediaItem}</div>}
        {invert ? <div className="mediaItem">{mediaItem}</div> : <div className="textItem">{textItem}</div>}
      </div>
    </div>
  )
}