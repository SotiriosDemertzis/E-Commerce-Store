/**
 * @fileoverview Toast notification system with multiple types, animations, and portal rendering.
 * Provides Toast component, ToastContainer, ToastProvider context, and toast management utilities.
 * Features auto-dismiss, manual close, and smooth enter/exit animations.
 */

import { useState, useEffect, createContext, useReducer, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { toastTypes, toastReducer } from '../utils/toastUtils.jsx';

/**
 * Individual toast notification component with animations and auto-dismiss
 * @param {Object} props - The component props
 * @param {string} props.id - Unique identifier for the toast
 * @param {string} [props.type='info'] - Toast type (info, success, warning, error)
 * @param {string} props.title - Toast title text
 * @param {string} props.message - Toast message text
 * @param {number} [props.duration=2500] - Auto-dismiss duration in milliseconds
 * @param {Function} props.onClose - Function to call when toast closes
 * @returns {JSX.Element} The toast notification element
 */
export function Toast({ id, type = 'info', title, message, duration = 2500, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const toastConfig = toastTypes[type] || toastTypes.info;

  /**
   * Handles toast close with exit animation
   */
  const handleClose = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  }, [id, onClose]);

  useEffect(() => {
    // Trigger enter animation
    const enterTimer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto dismiss
    const dismissTimer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(dismissTimer);
    };
  }, [duration, handleClose]);

  return (
    <div
      className={`transform transition-all duration-300 ease-out ${
        isVisible && !isLeaving
          ? 'translate-y-0 opacity-100 scale-100'
          : '-translate-y-4 opacity-0 scale-95'
      }`}
    >
      <div className={`min-w-96 max-w-md w-full bg-white shadow-lg rounded-xl border-2 ${toastConfig.classes} pointer-events-auto`}>
        <div className="p-4">
          <div className="flex items-start">
            <div className={`flex-shrink-0 ${toastConfig.iconClasses}`}>
              {toastConfig.icon}
            </div>
            <div className="ml-3 w-0 flex-1">
              {title && (
                <p className="text-sm font-semibold">
                  {title}
                </p>
              )}
              {message && (
                <p className={`text-sm ${title ? 'mt-1' : ''}`}>
                  {message}
                </p>
              )}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={handleClose}
                className="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg p-1"
              >
                <span className="sr-only">Close</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Container component for rendering multiple toasts using React portal
 * @param {Object} props - The component props
 * @param {Array} props.toasts - Array of toast objects to display
 * @param {Function} props.onClose - Function to call when a toast closes
 * @returns {JSX.Element|null} The toast container portal, or null if no toasts
 */
export function ToastContainer({ toasts, onClose }) {
  if (!toasts || toasts.length === 0) return null;

  return createPortal(
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 space-y-3 flex flex-col items-center">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onClose}
        />
      ))}
    </div>,
    document.body
  );
}

// Toast context and hook
const ToastContext = createContext();

/**
 * Toast provider component that manages toast state and provides context
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child components to wrap with toast context
 * @returns {JSX.Element} The provider component with toast context and container
 */
export function ToastProvider({ children }) {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  /**
   * Adds a new toast to the display queue
   * @param {Object} toast - The toast object to add
   */
  const addToast = (toast) => {
    dispatch({ type: 'ADD_TOAST', payload: toast });
  };

  /**
   * Removes a toast by ID
   * @param {string} id - The ID of the toast to remove
   */
  const removeToast = (id) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  };

  /**
   * Clears all toasts from the display
   */
  const clearToasts = () => {
    dispatch({ type: 'CLEAR_TOASTS' });
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, clearToasts }}>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
}

// Export context for external hook
export { ToastContext };