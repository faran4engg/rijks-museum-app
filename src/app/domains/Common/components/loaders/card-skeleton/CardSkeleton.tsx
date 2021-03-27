import { FC } from 'react';
import SkeletonBody from './SkeletonBody';

import { CardSkeletonProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardSkeleton: FC<CardSkeletonProps> = ({ noOfCards }): any => (
  <div className="grid gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3">
    {Array(noOfCards)
      .fill('-')
      .map((_, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="p-4 mx-auto w-full h-28 rounded-md shadow-md dark:bg-dark-mode bg-light-mode"
        >
          <SkeletonBody />
        </div>
      ))}
  </div>
);

CardSkeleton.defaultProps = {
  noOfCards: 1,
};

export default CardSkeleton;
