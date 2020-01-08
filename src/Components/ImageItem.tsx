import React from "react"

export const ImageItem: React.FC<{src: string, alt: string}> = ({src, alt}) => {
  return(
    <div>
      <img src={src} alt={alt}/>
    </div>
  )
}