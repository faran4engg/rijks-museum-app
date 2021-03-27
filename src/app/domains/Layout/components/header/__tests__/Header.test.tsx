import React from 'react';
import { act, create } from 'react-test-renderer';
import { createRenderer } from 'react-test-renderer/shallow';

import Header from '../Header';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('react-router-dom', () => ({
  NavLink: () => '<NavLink />',
}));

const renderer = createRenderer();

describe('<Header />', () => {
  const handleIsSidebarOpenMock = jest.fn();

  it('should render and match the snapshot', () => {
    renderer.render(<Header handleIsSidebarOpen={handleIsSidebarOpenMock} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  describe('toggleDark', () => {
    const renderComponent = () =>
      create(<Header handleIsSidebarOpen={handleIsSidebarOpenMock} />);

    it('should set dark mode when clicked', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => 'light'),
          setItem: jest.fn(() => null),
        },
        writable: true,
      });
      const component = renderComponent();
      const root = component.root;
      const toggleEl = root.findAllByType('button')[1];
      act(() => {
        toggleEl.props.onClick();
      });
      expect(window.localStorage.setItem).toHaveBeenCalled();
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'twTheme',
        'dark',
      );
      expect(component).toMatchSnapshot();
    });

    it('should set light mode when clicked', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() => 'dark'),
          setItem: jest.fn(() => null),
        },
        writable: true,
      });

      const component = renderComponent();
      const root = component.root;
      const toggleEl = root.findAllByType('button')[1];
      act(() => {
        toggleEl.props.onClick();
      });
      expect(window.localStorage.setItem).toHaveBeenCalled();
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'twTheme',
        'light',
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe('Menu Icon', () => {
    const renderComponent = () =>
      create(<Header handleIsSidebarOpen={handleIsSidebarOpenMock} />);

    it('should open side bar', () => {
      const component = renderComponent();
      const root = component.root;
      const MenuEl = root.findAllByType('button')[0];
      act(() => {
        MenuEl.props.onClick();
      });

      expect(handleIsSidebarOpenMock).toHaveBeenCalledTimes(1);
    });
  });
});
