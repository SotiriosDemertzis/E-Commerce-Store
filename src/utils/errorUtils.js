// HOC for wrapping components with error boundary
export function withErrorBoundary(Component, fallback) {
  return function WrappedComponent(props) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Hook for error handling in functional components
import { useState, useEffect } from 'react';

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