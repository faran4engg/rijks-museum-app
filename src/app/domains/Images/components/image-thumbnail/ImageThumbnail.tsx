import { useEffect, useState } from 'react';
import { ImageThumbnailProps } from './types';
import placeholder from 'assets/images/placeholder.gif';
import ImageDetails from '../image-details/ImageDetails';

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  url,
  ...imgDetailsProps
}) => {
  const [placeHolder, setPlaceHolder] = useState(placeholder);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDetails(true);
    }, 1500);
  });

  return (
    <div className="flex flex-col items-center justify-center img-grid-item w-full">
      <img
        loading="lazy"
        onLoad={() => {
          setPlaceHolder(url);
        }}
        src={placeHolder}
        alt="painting-art"
        className="w-full bg-gray-300 bg-center bg-auto rounded-lg shadow-md"
      />
      {showDetails && <ImageDetails {...imgDetailsProps} />}
    </div>
  );
};

export default ImageThumbnail;
