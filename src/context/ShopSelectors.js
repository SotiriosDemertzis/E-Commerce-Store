import { useShop } from "./ShopContext";
import { useMemo } from "react";

// Individual hooks that are actually used
export function useCart() {
    return useShop().cart;
}

export function useViewMode() {
    return useShop().viewMode;
}

export function useCartItemCount(){
    const state = useShop();
    const cartItemCount = state.cart.length;
    return cartItemCount;
}

// Helper functions for combined selectors
function useCartTotal() {
    const cart = useShop().cart;
    
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
    
    return total;
}

function useCategories(){
    const products = useShop().products;
    
    return useMemo(() => {
        if (!products || products.length === 0) {
            return ['All'];
        }
        return ['All', ...new Set(products.map(product => product.category))];
    }, [products]);
}

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

// Combined selectors used by components
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

export function useProductModal() {
  const shop = useShop();
  
  return useMemo(() => ({
    selectedProduct: shop.selectedProduct,
    isProductModalOpen: shop.isProductModalOpen
  }), [shop.selectedProduct, shop.isProductModalOpen]);
}

export function useWishlist() {
  const shop = useShop();
  
  return useMemo(() => ({
    wishlist: shop.wishlist,
    wishlistCount: shop.wishlist.length
  }), [shop.wishlist]);
}