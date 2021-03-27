import { create } from 'react-test-renderer';

import ImageDetails from '../ImageDetails';

describe('ImageDetails', () => {
  it('should render', () => {
    const component = create(
      <ImageDetails authorName="faran" title="my painting" />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
