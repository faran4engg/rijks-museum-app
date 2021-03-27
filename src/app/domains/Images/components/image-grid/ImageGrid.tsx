import { FC } from 'react';
import { CardSkeleton } from 'app/domains/Common/components/loaders';
import { ImageGridProps } from './types';
import ImageThumbnail from 'app/domains/Images/components/image-thumbnail/ImageThumbnail';
import NotFoundPage from 'app/pages/NotFoundPage';

const errorCls = 'flex items-center justify-center max-w-sm mx-auto mt-8';

const ImageGrid: FC<ImageGridProps> = ({ isLoading, images = [] }) => {
  const Images = (
    <div className={`masonry-with-columns`}>
      {images?.map(({ principalOrFirstMaker, title, webImage: { url } }) => (
        <ImageThumbnail
          key={title}
          url={url}
          authorName={principalOrFirstMaker}
          title={title}
        />
      ))}
    </div>
  );

  return (
    <>
      {!isLoading && !images.length && (
        <div className={errorCls}>
          <NotFoundPage />
        </div>
      )}

      {isLoading ? <CardSkeleton noOfCards={3} /> : Images}
    </>
  );
};

export default ImageGrid;
