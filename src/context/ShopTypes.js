import { PRODUCTS } from '../data/products';

// Action Types
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
  SET_VIEW_MODE: 'SET_VIEW_MODE'
};

// Categories are dynamically computed based on products

// Sort Options
export const SORT_TYPES = {
  NAME: 'name',
  PRICE_LOW: 'price-low',
  PRICE_HIGH: 'price-high',
  RATING_DESC: 'rating-desc',
  RATING_ASC: 'rating-asc'
};


// INITIAL STATE
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
  viewMode: 'grid' // 'grid' or 'list'
};
