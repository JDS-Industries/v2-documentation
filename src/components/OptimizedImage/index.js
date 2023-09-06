import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';

export default function OptimizedImage({ publicId }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'business-products',
    },
  });

  const myImage = cld.image(`${publicId}`);

  myImage.quality('auto').format('auto').resize(scale().width(200));

  console.log(myImage);

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
}