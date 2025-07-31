// Loading States Component
// Provides consistent loading states throughout the application

export function LoadingSpinner({ size = 'md', color = 'primary' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-purple-600',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  return (
    <div className="inline-block">
      <svg 
        className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`} 
        fill="none" 
        viewBox="0 0 24 24"
        role="status"
        aria-label="Loading"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function LoadingButton({ children, isLoading, disabled, ...props }) {
  return (
    <button 
      {...props} 
      disabled={disabled || isLoading}
      className={`${props.className} ${isLoading ? 'cursor-not-allowed' : ''}`}
    >
      <div className="flex items-center justify-center space-x-2">
        {isLoading && <LoadingSpinner size="sm" color="white" />}
        <span className={isLoading ? 'opacity-75' : ''}>{children}</span>
      </div>
    </button>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="card fade-in overflow-hidden">
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Image Skeleton */}
        <div className="w-full h-56 loading-shimmer" />
      </div>
      
      <div className="p-6">
        {/* Category Skeleton */}
        <div className="h-4 w-20 loading-shimmer rounded-full mb-3" />
        
        {/* Title Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-5 w-3/4 loading-shimmer rounded" />
          <div className="h-5 w-1/2 loading-shimmer rounded" />
        </div>

        {/* Rating Skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 loading-shimmer rounded" />
            ))}
          </div>
          <div className="h-4 w-16 loading-shimmer rounded" />
        </div>

        {/* Price and Stock Skeleton */}
        <div className="flex items-center justify-between mb-6">
          <div className="h-6 w-20 loading-shimmer rounded" />
          <div className="h-5 w-24 loading-shimmer rounded-full" />
        </div>
        
        {/* Button Skeleton */}
        <div className="h-12 w-full loading-shimmer rounded-xl" />
      </div>
    </div>
  );
}

export function ProductListSkeleton() {
  return (
    <div className="card fade-in">
      <div className="flex p-6 gap-6 items-center">
        {/* Image Skeleton */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 loading-shimmer rounded-2xl" />
        </div>

        {/* Content Skeleton */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 mr-6">
              {/* Title */}
              <div className="h-6 w-3/4 loading-shimmer rounded mb-2" />
              
              {/* Category */}
              <div className="h-4 w-20 loading-shimmer rounded-full mb-3" />
              
              {/* Rating and Stock */}
              <div className="flex items-center gap-4">
                <div className="h-4 w-24 loading-shimmer rounded" />
                <div className="h-5 w-20 loading-shimmer rounded-full" />
              </div>
            </div>

            {/* Price and Button */}
            <div className="flex items-center gap-4">
              <div className="h-6 w-16 loading-shimmer rounded" />
              <div className="h-10 w-24 loading-shimmer rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LoadingGrid({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function LoadingList({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductListSkeleton key={i} />
      ))}
    </div>
  );
}

export function PageLoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="text-body text-gray-600 mt-4">Loading products...</p>
      </div>
    </div>
  );
}

export function ErrorBoundaryFallback({ error, resetError }) {
  return (
    <div className="min-h-96 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-error-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-heading-5 text-gray-900 mb-2">Something went wrong</h3>
        <p className="text-body-small text-gray-600 mb-6">
          We encountered an error while loading the content. Please try again.
        </p>
        <div className="space-y-3">
          <button 
            onClick={resetError}
            className="btn-primary w-full"
          >
            Try Again
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="btn-secondary w-full"
          >
            Refresh Page
          </button>
        </div>
        {import.meta.env?.DEV && (
          <details className="mt-6 text-left">
            <summary className="text-body-small text-gray-500 cursor-pointer">Error Details</summary>
            <pre className="text-xs text-gray-400 mt-2 p-3 bg-gray-50 rounded overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

export function NetworkErrorState({ onRetry }) {
  return (
    <div className="text-center py-16">
      <div className="w-20 h-20 bg-warning-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-warning-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 className="text-heading-4 text-gray-900 mb-3">Connection Problem</h3>
      <p className="text-body text-gray-600 max-w-md mx-auto mb-6">
        We're having trouble connecting to our servers. Please check your internet connection and try again.
      </p>
      <button 
        onClick={onRetry}
        className="btn-primary flex items-center space-x-2 mx-auto"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Retry</span>
      </button>
    </div>
  );
}

export function EmptyState({ 
  icon, 
  title, 
  description, 
  action 
}) {
  return (
    <div className="text-center py-16 px-6">
      <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
        {icon || (
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        )}
      </div>
      <h3 className="text-heading-4 text-gray-900 mb-3">{title}</h3>
      <p className="text-body text-gray-600 max-w-md mx-auto mb-6">
        {description}
      </p>
      {action}
    </div>
  );
}