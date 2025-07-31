/**
 * @fileoverview ErrorBoundary components for handling React errors and promise rejections.
 * Provides ErrorBoundary class component for React error catching and AsyncErrorBoundary
 * functional component for unhandled promise rejection handling.
 */

import { Component, useEffect } from 'react';
import { ErrorBoundaryFallback } from './LoadingStates';

/**
 * Error boundary component that catches JavaScript errors in child components
 * @class ErrorBoundary
 * @extends {Component}
 */
class ErrorBoundary extends Component {
  /**
   * Creates an instance of ErrorBoundary
   * @param {Object} props - Component props
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  /**
   * Updates state when an error is caught
   * @param {Error} error - The error that was caught
   * @returns {Object} New state with hasError set to true
   */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /**
   * Logs error details and updates state with error information
   * @param {Error} error - The error that was caught
   * @param {Object} errorInfo - React error boundary info object
   */
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Log error to console in development
    if (import.meta.env?.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // In production, you might want to log this to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  /**
   * Resets the error boundary state to allow retry
   */
  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  /**
   * Renders error fallback UI or children based on error state
   * @returns {JSX.Element} Error fallback component or children
   */
  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryFallback 
          error={this.state.error}
          resetError={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


/**
 * Async error boundary component for handling unhandled promise rejections
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child components to monitor
 * @param {Function} [props.onError] - Optional error handler function
 * @returns {React.ReactNode} The children components
 */
export function AsyncErrorBoundary({ children, onError }) {
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      if (onError) {
        onError(event.reason);
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [onError]);

  return children;
}