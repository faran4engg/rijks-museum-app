import ImageGrid from 'app/domains/Images/components/image-grid/ImageGrid';
import ImagesContainer from 'app/domains/Images/containers/ImagesContainer';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: FC = () => (
  <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="paintings" />
    </Helmet>
    <ImagesContainer>
      {({ isLoading, images }) => (
        <ImageGrid isLoading={isLoading} images={images} />
      )}
    </ImagesContainer>
  </>
);

export default HomePage;
