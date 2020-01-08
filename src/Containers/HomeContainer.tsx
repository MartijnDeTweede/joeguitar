import React from 'react';
import { Textmedia } from '../Components/Textmedia';
import { TextItem } from '../Components/TextItem';
import testImage from './testAlbumCover.jpg';
import { ImageItem } from '../Components/ImageItem';
import { VideoItem } from '../Components/VideoItem';

export const HomeContainer: React.FC = () => {
  return(
  <div>
    <Textmedia
      textItem={<TextItem title="Welcome at joeguitar" text="Thank you for choosing joeguitar. We are trilled to teach you the coolest rock songs or that special song that gets you that special someone. Just select a lesson down below and start rocking out." />}
      mediaItem={<ImageItem src={testImage} alt='test' />}
      invert={true}
    />
        <Textmedia
      mediaItem={<VideoItem videoId="xrJBJuxOBEI"/>}
      textItem={<TextItem title="Welcome at joeguitar" text="Thank you for choosing joeguitar. We are trilled to teach you the coolest rock songs or that special song that gets you that special someone. Just select a lesson down below and start rocking out." />}
      invert={false}
    />
  </div>
  )
}