/**
 * @fileoverview Action hooks for shop state management
 * Provides hooks that return action dispatcher functions for various shop operations
 * Uses useMemo for performance optimization to prevent unnecessary re-renders
 */

import { useMemo } from "react";
import { useShopDispatch } from "./ShopContext.jsx";
import { ACTION_TYPES } from "./ShopTypes.js";

/**
 * Hook that returns a function to toggle the cart sidebar visibility
 * @returns {Function} Function to toggle cart sidebar state
 */
export function useToggleCartSidebar() {
    const dispatch = useShopDispatch();

    return () => {
        console.log('🐛 useToggleCartSidebar called!'); // Debug log
        dispatch({
            type: ACTION_TYPES.TOGGLE_CART_SIDEBAR
        });
    };
}

/**
 * Hook that returns a function to add products to the cart
 * @returns {Function} Function that accepts a product and adds it to cart
 */
export function useAddToCart() {
    const dispatch = useShopDispatch();

    return (product) => {
        dispatch({
            type: ACTION_TYPES.ADD_TO_CART,
            payload: product
        });
    };
}

/**
 * Combined hook that returns all cart-related action functions
 * Memoized for performance - only recreates when dispatch changes
 * @returns {Object} Object containing all cart action functions
 * @returns {Function} returns.addToCart - Add product to cart
 * @returns {Function} returns.removeFromCart - Remove product from cart
 * @returns {Function} returns.updateQuantity - Update product quantity
 * @returns {Function} returns.clearCart - Clear all items from cart
 * @returns {Function} returns.toggleCartSidebar - Toggle cart sidebar visibility
 */
export function useCartActions() {
    const dispatch = useShopDispatch();
    
    return useMemo(() => ({
        addToCart: (product) => dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product }),
        removeFromCart: (productId) => dispatch({ type: ACTION_TYPES.REMOVE_FROM_CART, payload: productId }),
        updateQuantity: (productId, quantity) => dispatch({ 
            type: ACTION_TYPES.UPDATE_QUANTITY, 
            payload: { id: productId, quantity } 
        }),
        clearCart: () => dispatch({ type: ACTION_TYPES.CLEAR_CART }),
        toggleCartSidebar: () => dispatch({ type: ACTION_TYPES.TOGGLE_CART_SIDEBAR })
    }), [dispatch]);
}

/**
 * Combined hook that returns all product filter action functions
 * @returns {Object} Object containing all product filter action functions
 * @returns {Function} returns.setCategoryFilter - Set category filter
 * @returns {Function} returns.setSearchTerm - Set search term
 * @returns {Function} returns.setSortBy - Set sort criteria
 * @returns {Function} returns.setViewMode - Set view mode (grid/list)
 */
export function useProductFilterActions() {
    const dispatch = useShopDispatch();
    
    return useMemo(() => ({
        setCategoryFilter: (category) => dispatch({ type: ACTION_TYPES.SET_CATEGORY_FILTER, payload: category }),
        setSearchTerm: (searchTerm) => dispatch({ type: ACTION_TYPES.SET_SEARCH_TERM, payload: searchTerm }),
        setSortBy: (sortBy) => dispatch({ type: ACTION_TYPES.SET_SORT_BY, payload: sortBy }),
        setViewMode: (viewMode) => dispatch({ type: ACTION_TYPES.SET_VIEW_MODE, payload: viewMode })
    }), [dispatch]);
}

/**
 * Hook that returns product modal action functions
 * @returns {Object} Object containing modal action functions
 * @returns {Function} returns.openProductModal - Open modal with product
 * @returns {Function} returns.closeProductModal - Close product modal
 */
export function useProductModal() {
    const dispatch = useShopDispatch();
    
    return useMemo(() => ({
        openProductModal: (product) => dispatch({ type: ACTION_TYPES.OPEN_PRODUCT_MODAL, payload: product }),
        closeProductModal: () => dispatch({ type: ACTION_TYPES.CLOSE_PRODUCT_MODAL })
    }), [dispatch]);
}

/**
 * Hook that returns wishlist action functions
 * @returns {Object} Object containing wishlist action functions
 * @returns {Function} returns.addToWishlist - Add product to wishlist
 * @returns {Function} returns.removeFromWishlist - Remove product from wishlist
 */
export function useWishlistActions() {
    const dispatch = useShopDispatch();
    
    return useMemo(() => ({
        addToWishlist: (product) => dispatch({ type: ACTION_TYPES.ADD_TO_WISHLIST, payload: product }),
        removeFromWishlist: (productId) => dispatch({ type: ACTION_TYPES.REMOVE_FROM_WISHLIST, payload: productId })
    }), [dispatch]);
}