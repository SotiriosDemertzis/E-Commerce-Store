/**
 * @fileoverview Shop application action types, constants, and initial state definitions
 * Centralizes all action type constants and application state structure for consistency
 */

import { PRODUCTS } from '../data/products';

/**
 * Action type constants for the shop reducer
 * Organized by feature area for better maintainability
 */
export const ACTION_TYPES = {
  // Product actions
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_CATEGORY_FILTER: 'SET_CATEGORY_FILTER',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SET_SORT_BY: 'SET_SORT_BY',
  
  // Cart actions
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  
  // UI actions
  TOGGLE_CART_SIDEBAR: 'TOGGLE_CART_SIDEBAR',
  SET_VIEW_MODE: 'SET_VIEW_MODE',
  OPEN_PRODUCT_MODAL: 'OPEN_PRODUCT_MODAL',
  CLOSE_PRODUCT_MODAL: 'CLOSE_PRODUCT_MODAL',
  
  // Wishlist actions
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST'
};

/**
 * Sort option constants for product ordering
 * Defines available sorting methods for the product catalog
 */
export const SORT_TYPES = {
  NAME: 'name',
  PRICE_LOW: 'price-low',
  PRICE_HIGH: 'price-high',
  RATING_DESC: 'rating-desc',
  RATING_ASC: 'rating-asc'
};


/**
 * Initial application state
 * Defines the complete state structure for the e-commerce application
 * @type {Object}
 */
export const initialState = {
  // Product state
  products: PRODUCTS,
  categoryFilter: '', // Empty string means no filter selected initially
  searchTerm: '',
  sortBy: 'name',
  
  // Cart state
  cart: [],
  
  // UI state
  isCartOpen: false,
  viewMode: 'grid', // 'grid' or 'list'
  selectedProduct: null,
  isProductModalOpen: false,
  
  // Wishlist state
  wishlist: []
};
