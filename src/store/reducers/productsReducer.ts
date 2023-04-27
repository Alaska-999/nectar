import {ProductsActionTypes, ProductsState} from "../../types/types";
import {
    ADD_PRODUCTS,
    ADD_TO_CART, ADD_TO_FAVOURITES, CLEAR_CART,
    REMOVE_FROM_CART, REMOVE_FROM_FAVOURITES, REMOVE_ONE_ITEM_FROM_CART,
    SEARCH_PRODUCT,
} from "./productsActions";


const initialState: ProductsState = {
    products: [],
    searchTerm: '',
    cart: {
        items: [],
        total: 0
    },
    favorites: []
}

export const productsReducer = (state = initialState, action: ProductsActionTypes) => {
    switch (action.type) {
        case ADD_PRODUCTS: {
            return {...state, products: action.payload}
        }
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchTerm: action.payload
            };
        case ADD_TO_CART:
            const existingItem = state.cart.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cart.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    amount: action.payload.amount,
                    image: action.payload.image,
                    price: action.payload.price,
                    quantity: action.payload.quantity
                });
            }
            return {
                ...state,
                total: state.cart.total += (action.payload.price * action.payload.quantity),
                counter: 1
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items.filter(p => p.id !== action.payload.id),
                    total: state.cart.total - action.payload.price * action.payload.quantity,
                },
            };

        case CLEAR_CART:
            return {
                ...state,
                cart: {
                    items: [],
                    total: 0
                }
            };

        case REMOVE_ONE_ITEM_FROM_CART:
            const itemToRemove = state.cart.items.find(
                (p) => p.id === action.payload.id
            );
            if (itemToRemove && itemToRemove.quantity > 1) {
                itemToRemove.quantity--;
            } else {
                state.cart.items = state.cart.items.filter(
                    (p) => p.id !== action.payload.id
                );
            }
            return {
                ...state,
                total: state.cart.total -= action.payload.price,
            };

        case ADD_TO_FAVOURITES:
            const existingFavItem = state.favorites.find((item) => item.id === action.payload.id)
            if (existingFavItem) {
                return state
            } else {
                return {
                    ...state,
                    favorites: [
                        ...state.favorites,
                        {
                            id: action.payload.id,
                            name: action.payload.name,
                            image: action.payload.image,
                            price: action.payload.price,
                            amount: action.payload.amount,
                            category: action.payload.category
                        }
                    ]
                }
            }

        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favorites:
                    state.favorites.filter(p => p.id !== action.payload)
            };
        default:
            return state
    }
}