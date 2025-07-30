import { ACTION_TYPES} from './ShopTypes';


// REDUCER FUNCTION
export function ShopReducer(state,action) {
    switch (action.type) {
        case ACTION_TYPES.SET_PRODUCTS:
            return {...state, products: action.payload};
        case ACTION_TYPES.SET_CATEGORY_FILTER:
            return {...state, categoryFilter: action.payload};
        case ACTION_TYPES.SET_SEARCH_TERM:
            return {...state, searchTerm: action.payload};
        case ACTION_TYPES.SET_SORT_BY: 
            return {...state, sortBy: action.payload};
        case ACTION_TYPES.ADD_TO_CART: {
            const existingItem = state.cart.find(item => item.id === action.payload.id);

            if(existingItem){
                return {
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === action.payload.id? 
                        {...item, quantity: item.quantity + 1}
                        : item
                    )
                };
            }else{
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity: 1}]
                };
            }
        }
        case ACTION_TYPES.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        case ACTION_TYPES.UPDATE_QUANTITY: {
            const {id, quantity} = action.payload;

            if(quantity <= 0){
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== id)
                };
            }

            return{
                ...state,
                cart: state.cart.map( item => 
                    item.id === id? { ...item, quantity } : item
                )
            };
        }
        case ACTION_TYPES.CLEAR_CART:
            return { ...state, cart:[] };
        case ACTION_TYPES.TOGGLE_CART_SIDEBAR:
            return { ...state, isCartOpen: !state.isCartOpen};
        case ACTION_TYPES.SET_VIEW_MODE:
            return { ...state, viewMode: action.payload}; 

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}