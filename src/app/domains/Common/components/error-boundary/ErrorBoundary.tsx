// @ts-nocheck
import { Component } from 'react';
import NotFoundPage from 'app/pages/NotFoundPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <NotFoundPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
