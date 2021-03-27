import { create } from 'react-test-renderer';

import ImageGrid from '../ImageGrid';
import { imagesResponseMock } from 'app/mock';

jest.mock('app/pages/NotFoundPage', () => 'NotFoundPage');
jest.mock('app/domains/Common/components/loaders', () => ({
  CardSkeleton: () => 'CardSkeleton',
}));

jest.mock(
  'app/domains/Images/components/image-thumbnail/ImageThumbnail',
  () => 'ImageThumbnail',
);

const images = imagesResponseMock.artObjects;

describe('ImageGrid', () => {
  it('should render CardSkeleton when loading', () => {
    const component = create(<ImageGrid isLoading />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render NotFoundPage when its not loading and no image data received', () => {
    const component = create(
      <ImageGrid isLoading={false} images={[]} />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render images', () => {
    const component = create(
      <ImageGrid isLoading={false} images={images} />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
