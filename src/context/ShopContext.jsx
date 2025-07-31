/**
 * @fileoverview Shop context provider and hooks for global state management
 * Implements React Context API with useReducer for centralized state management
 * Includes localStorage persistence for cart and wishlist data
 */

/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext, useEffect } from 'react';
import { ACTION_TYPES , initialState} from './ShopTypes';
import { ShopReducer } from './ShopReducer';

/**
 * Context for shop state data (read-only)
 * @type {React.Context}
 */
const ShopContext = createContext(null);

/**
 * Context for shop dispatch function (actions)
 * @type {React.Context}
 */
const ShopDispatchContext = createContext(null);

/**
 * Provider component that wraps the application with shop state management
 * Handles localStorage persistence for cart and wishlist data
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to receive context
 * @returns {JSX.Element} Provider component with nested contexts
 */
export function ShopProvider({children}) {
    const [state, dispatch] = useReducer(ShopReducer, initialState);
    console.log(state);

    useEffect( () => {
        const savedCart = localStorage.getItem('shopping-cart');
        if(savedCart) {
            try {
                const cart = JSON.parse(savedCart);
                cart.forEach(item => {
                    dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: item});
                });
            } catch (error) {
                console.warn('Error loading cart from localStorage:', error);
            }
        }

        const savedWishlist = localStorage.getItem('shopping-wishlist');
        if(savedWishlist) {
            try {
                const wishlist = JSON.parse(savedWishlist);
                wishlist.forEach(item => {
                    dispatch({ type: ACTION_TYPES.ADD_TO_WISHLIST, payload: item});
                });
            } catch (error) {
                console.warn('Error loading wishlist from localStorage:', error);
            }
        }
    }, [] );

    useEffect( () => {
        localStorage.setItem('shopping-cart',JSON.stringify(state.cart));
    }, [state.cart]);

    useEffect( () => {
        localStorage.setItem('shopping-wishlist',JSON.stringify(state.wishlist));
    }, [state.wishlist]);

    return (
    <ShopContext.Provider value={state}>
        <ShopDispatchContext.Provider value={dispatch}>
            {children}
        </ShopDispatchContext.Provider>
    </ShopContext.Provider>
    );
}

/**
 * Hook to access shop state from context
 * Provides read-only access to the entire shop state
 * @returns {Object} Current shop state
 * @throws {Error} When used outside of ShopProvider
 */
export function useShop() {
    const context = useContext(ShopContext);
    if(!context) {
        throw new Error('useShop must be used within a ShopContext Provider');
    }
    return context;
}

/**
 * Hook to access shop dispatch function from context
 * Provides access to dispatch actions for state mutations
 * @returns {Function} Dispatch function for shop actions
 * @throws {Error} When used outside of ShopProvider
 */
export function useShopDispatch() {
    const context = useContext(ShopDispatchContext);
    if(!context){
        throw new Error('useShopDispatch must be used within a ShopDispatch Provider');
    }
    return context;
}