/**
 * @fileoverview Error handling utilities for React components
 * Provides HOC and custom hook for error management throughout the application
 */

/**
 * Higher-Order Component that wraps a component with an error boundary
 * @param {React.Component} Component - Component to wrap with error boundary
 * @param {React.Component|Function} fallback - Fallback component to display on error
 * @returns {Function} Wrapped component with error boundary protection
 */
export function withErrorBoundary(Component, fallback) {
  return function WrappedComponent(props) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

import { useState, useEffect } from 'react';

/**
 * Custom hook for error handling in functional components
 * Provides error state management and error handling functions
 * @returns {Object} Error handling object
 * @returns {Error|null} returns.error - Current error state
 * @returns {Function} returns.handleError - Function to handle/set errors
 * @returns {Function} returns.resetError - Function to clear error state
 * @returns {boolean} returns.hasError - Boolean indicating if there's an error
 */
export function useErrorHandler() {
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const handleError = (error) => {
    console.error('Error caught by useErrorHandler:', error);
    setError(error);
  };

  // Reset error when component unmounts
  useEffect(() => {
    return () => setError(null);
  }, []);

  return {
    error,
    handleError,
    resetError,
    hasError: !!error
  };
}