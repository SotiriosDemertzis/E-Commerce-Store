import { useMemo } from "react";
import { useShopDispatch } from "./ShopContext.jsx";
import { ACTION_TYPES } from "./ShopTypes.js";

// Individual hooks that are actually used
export function useToggleCartSidebar() {
    const dispatch = useShopDispatch();

    return () => {
        console.log('🐛 useToggleCartSidebar called!'); // Debug log
        dispatch({
            type: ACTION_TYPES.TOGGLE_CART_SIDEBAR
        });
    };
}

export function useAddToCart() {
    const dispatch = useShopDispatch();

    return (product) => {
        dispatch({
            type: ACTION_TYPES.ADD_TO_CART,
            payload: product
        });
    };
}

// Combined action hooks used by components
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

export function useProductFilterActions() {
    const dispatch = useShopDispatch();
    
    return useMemo(() => ({
        setCategoryFilter: (category) => dispatch({ type: ACTION_TYPES.SET_CATEGORY_FILTER, payload: category }),
        setSearchTerm: (searchTerm) => dispatch({ type: ACTION_TYPES.SET_SEARCH_TERM, payload: searchTerm }),
        setSortBy: (sortBy) => dispatch({ type: ACTION_TYPES.SET_SORT_BY, payload: sortBy }),
        setViewMode: (viewMode) => dispatch({ type: ACTION_TYPES.SET_VIEW_MODE, payload: viewMode })
    }), [dispatch]);
}

export function useProductModal() {
    const dispatch = useShopDispatch();
    
    return useMemo(() => ({
        openProductModal: (product) => dispatch({ type: ACTION_TYPES.OPEN_PRODUCT_MODAL, payload: product }),
        closeProductModal: () => dispatch({ type: ACTION_TYPES.CLOSE_PRODUCT_MODAL })
    }), [dispatch]);
}

export function useWishlistActions() {
    const dispatch = useShopDispatch();
    
    return useMemo(() => ({
        addToWishlist: (product) => dispatch({ type: ACTION_TYPES.ADD_TO_WISHLIST, payload: product }),
        removeFromWishlist: (productId) => dispatch({ type: ACTION_TYPES.REMOVE_FROM_WISHLIST, payload: productId })
    }), [dispatch]);
}