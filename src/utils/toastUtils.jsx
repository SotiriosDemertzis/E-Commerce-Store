/**
 * @fileoverview Toast notification utilities and configuration
 * Provides toast type definitions with icons, styling, and reducer logic
 * Used by the ToastNotification component system
 */

/**
 * Toast type configuration object containing styling and icons for different toast types
 * Each type includes icon JSX, CSS classes for styling, and icon-specific classes
 * @type {Object<string, Object>}
 */
export const toastTypes = {
  success: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    classes: 'bg-green-50 border-green-200 text-green-800',
    iconClasses: 'text-green-500'
  },
  cart: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 8H6L5 9z" />
      </svg>
    ),
    classes: 'bg-blue-50 border-blue-200 text-blue-800',
    iconClasses: 'text-blue-500'
  },
  wishlist_add: {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    classes: 'bg-pink-50 border-pink-200 text-pink-800',
    iconClasses: 'text-pink-500'
  },
  wishlist_remove: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    classes: 'bg-orange-50 border-orange-200 text-orange-800',
    iconClasses: 'text-orange-500'
  },
  error: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    classes: 'bg-red-50 border-red-200 text-red-800',
    iconClasses: 'text-red-500'
  },
  warning: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    classes: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    iconClasses: 'text-yellow-500'
  },
  info: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    classes: 'bg-blue-50 border-blue-200 text-blue-800',
    iconClasses: 'text-blue-500'
  }
};

/**
 * Reducer function for managing toast notification state
 * Handles adding, removing, and clearing toast notifications
 * @param {Array} state - Current array of toast notifications
 * @param {Object} action - Action object with type and payload
 * @param {string} action.type - Action type (ADD_TOAST, REMOVE_TOAST, CLEAR_TOASTS)
 * @param {*} action.payload - Action payload data
 * @returns {Array} New toast notifications array
 */
export const toastReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return [...state, { ...action.payload, id: Date.now() + Math.random() }];
    case 'REMOVE_TOAST':
      return state.filter(toast => toast.id !== action.payload);
    case 'CLEAR_TOASTS':
      return [];
    default:
      return state;
  }
};