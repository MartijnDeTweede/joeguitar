import React from 'react';
import { Textmedia } from '../Components/Textmedia';
import { TextItem } from '../Components/TextItem';
import { VideoItem } from '../Components/VideoItem';
import { SliderComponent } from '../Components/SliderComponent';
import { testslides } from '../Content/TestSlides';

export const HomeContainer: React.FC = () => {
  return(
  <div>
    <Textmedia
      mediaItem={<VideoItem videoId="xrJBJuxOBEI"/>}
      textItem={<TextItem title="Welcome at joeguitar" text="Thank you for choosing joeguitar. We are currently under construction. Please visit us again soon" />}
      invert={false}
    />
    {/* <SliderComponent
      title="Jazz"
      slides={testslides}
    />
        <SliderComponent
      title="Cool tricks"
      slides={testslides}
    /> */}
  </div>
  )
}