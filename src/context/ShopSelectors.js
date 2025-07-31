/**
 * @fileoverview Selector hooks for accessing and computing shop state
 * Provides optimized hooks for accessing specific parts of the shop state
 * Uses useMemo for performance optimization and computed values
 */

import { useShop } from "./ShopContext";
import { useMemo } from "react";

/**
 * Hook to get the current cart items
 * @returns {Array} Array of cart items
 */
export function useCart() {
    return useShop().cart;
}

/**
 * Hook to get the current view mode (grid/list)
 * @returns {string} Current view mode
 */
export function useViewMode() {
    return useShop().viewMode;
}

/**
 * Hook to get the total number of items in the cart
 * @returns {number} Total count of cart items
 */
export function useCartItemCount(){
    const state = useShop();
    const cartItemCount = state.cart.length;
    return cartItemCount;
}

/**
 * Helper hook to calculate the total price of all items in cart
 * @returns {number} Total price of cart items
 */
function useCartTotal() {
    const cart = useShop().cart;
    
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
    
    return total;
}

/**
 * Helper hook to get all available product categories
 * Dynamically computed from the product list
 * @returns {Array<string>} Array of category names including 'All'
 */
function useCategories(){
    const products = useShop().products;
    
    return useMemo(() => {
        if (!products || products.length === 0) {
            return ['All'];
        }
        return ['All', ...new Set(products.map(product => product.category))];
    }, [products]);
}

/**
 * Hook to get filtered and sorted products based on current filters
 * Applies search, category filter, and sorting to the product list
 * @returns {Array} Array of filtered and sorted products
 */
export function useFilteredProducts(){
    const { products, searchTerm, categoryFilter, sortBy } = useShop();
    
    const filteredProducts = useMemo(() => {
        // If no category is selected and no search, return empty array (welcome screen)
        if (!categoryFilter && !searchTerm.trim()) {
            return [];
        }
        
        return products.filter(product => {
            return (
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (!categoryFilter || categoryFilter === 'All' || product.category === categoryFilter)
            );
        }).sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'name-desc') {
                return b.name.localeCompare(a.name);
            } else if (sortBy === 'price-low') {
                return a.price - b.price;
            } else if (sortBy === 'price-high') {
                return b.price - a.price;
            } else if (sortBy === 'rating-desc') {
                return b.rating - a.rating;
            } else if (sortBy === 'rating-asc') {
                return a.rating - b.rating;
            }
            return 0;
        });
    }, [products, searchTerm, categoryFilter, sortBy]);
    
    return filteredProducts;
}

/**
 * Combined hook that returns complete cart state and computed values
 * @returns {Object} Cart state object
 * @returns {Array} returns.cart - Cart items array
 * @returns {number} returns.cartTotal - Total price of cart
 * @returns {boolean} returns.cartIsEmpty - Whether cart is empty
 * @returns {boolean} returns.isCartOpen - Whether cart sidebar is open
 */
export function useCartState() {
  const shop = useShop();
  const cartTotal = useCartTotal();
  
  return useMemo(() => ({
    cart: shop.cart,
    cartTotal: cartTotal,                        
    cartIsEmpty: shop.cart.length === 0,        
    isCartOpen: shop.isCartOpen                
  }), [shop.cart, cartTotal, shop.isCartOpen]);
}

/**
 * Combined hook that returns all product filter state and computed values
 * @returns {Object} Product filter state object
 * @returns {Array<string>} returns.categories - Available categories
 * @returns {string} returns.categoryFilter - Current category filter
 * @returns {string} returns.searchTerm - Current search term
 * @returns {string} returns.sortBy - Current sort criteria
 * @returns {string} returns.viewMode - Current view mode
 * @returns {Array} returns.filteredProducts - Filtered product list
 */
export function useProductFilters() {
  const shop = useShop();
  const categories = useCategories();
  const filteredProducts = useFilteredProducts();
  
  return useMemo(() => ({
    categories,
    categoryFilter: shop.categoryFilter,
    searchTerm: shop.searchTerm,
    sortBy: shop.sortBy,
    viewMode: shop.viewMode,
    filteredProducts
  }), [categories, shop.categoryFilter, shop.searchTerm, shop.sortBy, shop.viewMode, filteredProducts]);
}

/**
 * Hook that returns product modal state
 * @returns {Object} Product modal state
 * @returns {Object|null} returns.selectedProduct - Currently selected product
 * @returns {boolean} returns.isProductModalOpen - Whether modal is open
 */
export function useProductModal() {
  const shop = useShop();
  
  return useMemo(() => ({
    selectedProduct: shop.selectedProduct,
    isProductModalOpen: shop.isProductModalOpen
  }), [shop.selectedProduct, shop.isProductModalOpen]);
}

/**
 * Hook that returns wishlist state and computed values
 * @returns {Object} Wishlist state object
 * @returns {Array} returns.wishlist - Wishlist items array
 * @returns {number} returns.wishlistCount - Count of wishlist items
 */
export function useWishlist() {
  const shop = useShop();
  
  return useMemo(() => ({
    wishlist: shop.wishlist,
    wishlistCount: shop.wishlist.length
  }), [shop.wishlist]);
}