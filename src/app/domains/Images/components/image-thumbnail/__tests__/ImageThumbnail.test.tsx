import { create } from 'react-test-renderer';

import ImageThumbnail from '../ImageThumbnail';

describe('ImageThumbnail', () => {
  it('should render', () => {
    const component = create(
      <ImageThumbnail authorName="faran" title="my painting" url="test.com" />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
