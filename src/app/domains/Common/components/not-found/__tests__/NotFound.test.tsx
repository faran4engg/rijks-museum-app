import { create } from 'react-test-renderer';

import NotFound from '../NotFound';

jest.mock('react-router-dom', () => ({
  Link: () => '<Link />',
}));

describe('NotFound', () => {
  it('should render', () => {
    const component = create(<NotFound msg="Test Message" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
