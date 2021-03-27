import { FC } from 'react';
import { ImageDetailsProps } from './types';

const ImageDetails: FC<ImageDetailsProps> = ({ authorName, title }) => (
  <div
    id="img-details"
    className="w-48 mx-auto mb-4 -mt-6 overflow-hidden rounded-lg shadow-lg lg:-mt-8 lg:w-56"
  >
    <h3 className="py-1 text-xs font-bold tracking-wide text-center text-gray-800 capitalize bg-white lg:py-2 dark:bg-gray-800 dark:text-white ">
      <span>🎨&nbsp;</span>
      {authorName}
    </h3>

    <div className="flex items-center justify-center px-2 py-1 bg-gray-200 lg:py-2 dark:bg-gray-700">
      <span className="text-xs font-bold text-center text-gray-800 dark:text-gray-200 line-clamp-1 hover:line-clamp-none">
        <span>📌&nbsp;</span>
        {title}
      </span>
    </div>
  </div>
);

export default ImageDetails;
