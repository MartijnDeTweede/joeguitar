import React from 'react';
import { Textmedia } from '../Components/Textmedia';
import { TextItem } from '../Components/TextItem';
import testImage from './testAlbumCover.jpg';
import { ImageItem } from '../Components/ImageItem';

export const HomeContainer: React.FC = () => {
  return(
  <div>
    <Textmedia
      textItem={<TextItem title="Welcome at joeguitar" text="Thank you for choosing joeguitar. We are trilled to teach you the coolest rock songs or that special song that gets you that special someone. Just select a lesson down below and start rocking out." />}
      mediaItem={<ImageItem src={testImage} alt='test' />}
      invert={true}
    />
        <Textmedia
      textItem={<TextItem title="How does it work" text="Select a lesson from the slider and we redirect you to SkillShare. Login with your SkillShare Account and start rocking out." />}
      mediaItem={<ImageItem src={testImage} alt='test' />}
      invert={false}
    />
  </div>
  )
}