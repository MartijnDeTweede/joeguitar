
import React from "react";
import YouTube from 'react-youtube';

export const VideoItem: React.FC<{videoId: string}> = ({videoId}) => {
  const opts = {
    height: '240',
    width: '320',
  };

  return(
    <div>
        <YouTube
        videoId={videoId} //"2g811Eo7K8U"
        opts={opts}
        onReady={event => event.target.pauseVideo}
      />
    </div>
  )
}