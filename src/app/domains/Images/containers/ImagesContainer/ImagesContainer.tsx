import { FC } from 'react';
import { OwnProps, RenderProps } from './types';
import { useImages } from 'app/hooks/queries-hooks';

const ImagesContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const { isLoading, data } = useImages();

  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        isLoading,
        images: data?.data?.artObjects,
      })}
    </div>
  );
};

export default ImagesContainer;
