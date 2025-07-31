/**
 * @fileoverview Central export file for all shop context functionality
 * Provides a single import point for all context-related hooks and utilities
 * Organizes exports by functionality for better developer experience
 */

// Context and providers
export { ShopProvider, useShop, useShopDispatch } from './ShopContext.jsx';

// Action Hooks
export * from './ShopActions';

// Selectors and computed state hooks
export * from './ShopSelectors';

// Types and constants
export { ACTION_TYPES, SORT_TYPES } from './ShopTypes';