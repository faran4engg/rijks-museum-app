import { ImagesResponseAPI } from 'app/kernel/types';
import { axiosInstance } from '../axios/axios-instance';

const { REACT_APP_API_PUBLIC_KEY } = process.env;

const getImages = async (): Promise<ImagesResponseAPI> =>
  axiosInstance.get(
    `/collection?key=${REACT_APP_API_PUBLIC_KEY}&involvedMaker=Rembrandt+van+Rijn`,
  );

export { getImages };

// Willem Drost
// Moses ter Borch
// Adam von Bartsch
// Jacob Houbraken
