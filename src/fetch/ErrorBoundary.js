
/**
 * ErrorBoundary with retry support
 *
 * @example
 * import ErrorBoundary from './ErrorBoundary';
 *
 * const App = () => (
 *   <ErrorBoundary
 *     fallback={({ error, retry }) => (
 *       <div>
 *         <span>{error.message}</span>
 *         <button type="button" onClick={retry}>Retry</button>
 *       </div>
 *     )}
 *   >
 *     ...
 *   </ErrorBoundary>
 * );
 */


import React from 'react';

class ErrorBoundary extends React.Component {

  state = { error: null};

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  retry = () => { this.setState({error: null}); };

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      if (typeof fallback === 'function') {
        return fallback(error, this.retry);
      }

      return fallback;
    }
    return children;
  }
}

export default ErrorBoundary;