/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext, useEffect } from 'react';
import { ACTION_TYPES , initialState} from './ShopTypes';
import { ShopReducer } from './ShopReducer';


// Create separate contexts for state and dispatch
const ShopContext = createContext(null);
const ShopDispatchContext = createContext(null);


// Provider component
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

// Basic context hoooks with error handling
export function useShop() {
    const context = useContext(ShopContext);
    if(!context) {
        throw new Error('useShop must be used within a ShopContext Provider');
    }
    return context;
}

export function useShopDispatch() {
    const context = useContext(ShopDispatchContext);
    if(!context){
        throw new Error('useShopDispatch must be used within a ShopDispatch Provider');
    }
    return context;
}