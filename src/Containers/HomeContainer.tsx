import React from 'react';
import { Textmedia } from '../Components/Textmedia';
import { TextItem } from '../Components/TextItem';
import { VideoItem } from '../Components/VideoItem';
// import { SliderComponent } from '../Components/SliderComponent';
// import { testslides } from '../Content/TestSlides';
import ourFirstLesson from '../Content/ourFirstLesson.jpeg';
import { ImageItem } from '../Components/ImageItem';

export const HomeContainer: React.FC = () => {
  return(
  <div>
    <Textmedia
      mediaItem={<VideoItem videoId="JQd2y9MWRuE"/>}
      textItem={<TextItem title="Welcome at joeguitar" texts={[
        "Joe Guitar is an online platform with guitar lessons for the average Joe and Jane,  with fun material and easy to follow step by step instructions.",
"You can take the online course as is; in this case you might at some point want to get more into detail with the step by step in depth videos of the lessons at patreon.",
"You can also enjoy online classes alongside with skype or face to face lessons; in which case you can always ask for personal help when things aren’t clear to you."
      ]} />}
      invert={false}
    />
    <Textmedia
      mediaItem={<ImageItem src={ourFirstLesson} alt="ourFirstLesson" externalLink="https://www.patreon.com/joeguitar"/>}
      textItem={
      <TextItem
        title="Our very first lesson"
        texts={[
          "Are you curious at what we have to offer. You can check out our first lesson on Patreon.",
        ]}
        linkText="Visit our first lesson"
        externalLink="https://www.patreon.com/joeguitar"
         />}
      invert
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