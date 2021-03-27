import { useQuery } from 'react-query';
import { getImages } from 'app/queries/index';

export const useImages = () =>
  useQuery('images', getImages, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
