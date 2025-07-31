import { useContext } from 'react';
import { ToastContext } from '../component/ToastNotification';

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