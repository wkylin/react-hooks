import React from 'react';

import ImageLoad from './ImageLoad';

import beach from './assets/beach.jpg';
import beachSmall from './assets/beach-small.jpg';

const ImageLoadPage = () => {

  const images = [
    {
      src: beach,
      placeholder: beachSmall,
      alt: 'Beach',
    },
  ]
  return (
    <>
      {
        images.map((image, index) => <ImageLoad key={index} src={image.src} placeholder={image.placeholder} alt={image.alt} /> )
      }
    </>
  )
}

export default ImageLoadPage;