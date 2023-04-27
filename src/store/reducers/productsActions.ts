import {ICartProduct, IProduct, IProductLink} from "../../types/types";

export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_ONE_ITEM_FROM_CART = "REMOVE_ONE_ITEM_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";


export const addProducts = (products: IProduct[]) => ({
    type: ADD_PRODUCTS, payload: products
})

export const searchProduct = (name: string) => ({
    type: SEARCH_PRODUCT, payload: name
})

export const addToCart = (product: ICartProduct) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (id: number | undefined, price: number, quantity: number) => ({
    type: REMOVE_FROM_CART,
    payload: {id, price, quantity},
});

export const removeOneItemFromCart = (id: number | undefined, price: number, quantity: number) => ({
    type: REMOVE_ONE_ITEM_FROM_CART,
    payload: {id, price, quantity},
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const addToFavourites = (product: IProductLink) => ({
    type: ADD_TO_FAVOURITES, payload: product
})

export const removeFromFavourites = (id: number | undefined) => ({
    type: REMOVE_FROM_FAVOURITES, payload: id
})



