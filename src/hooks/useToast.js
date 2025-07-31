/**
 * @fileoverview Custom hook for toast notifications
 * Provides a convenient interface for displaying different types of toast messages
 * Must be used within a ToastProvider context
 */

import { useContext } from 'react';
import { ToastContext } from '../component/ToastNotification';

/**
 * Hook for accessing toast notification functionality
 * Provides methods for displaying various types of toast messages
 * @returns {Object} Toast functions object
 * @returns {Object} returns.toast - Toast function collection
 * @returns {Function} returns.toast.success - Display success toast
 * @returns {Function} returns.toast.error - Display error toast
 * @returns {Function} returns.toast.warning - Display warning toast
 * @returns {Function} returns.toast.info - Display info toast
 * @returns {Function} returns.toast.cart - Display cart-related toast
 * @returns {Function} returns.toast.wishlistAdd - Display wishlist add toast
 * @returns {Function} returns.toast.wishlistRemove - Display wishlist remove toast
 * @throws {Error} When used outside of ToastProvider
 */
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  const { addToast } = context;
  
  return {
    toast: {
      success: (title, message, options = {}) => addToast({ type: 'success', title, message, ...options }),
      error: (title, message, options = {}) => addToast({ type: 'error', title, message, ...options }),
      warning: (title, message, options = {}) => addToast({ type: 'warning', title, message, ...options }),
      info: (title, message, options = {}) => addToast({ type: 'info', title, message, ...options }),
      cart: (title, message, options = {}) => addToast({ type: 'cart', title, message, ...options }),
      wishlistAdd: (title, message, options = {}) => addToast({ type: 'wishlist_add', title, message, ...options }),
      wishlistRemove: (title, message, options = {}) => addToast({ type: 'wishlist_remove', title, message, ...options })
    }
  };
}