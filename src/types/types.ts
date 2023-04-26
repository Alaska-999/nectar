import {
    ADD_PRODUCTS, ADD_TO_CART, ADD_TO_FAVOURITES, CLEAR_CART,
    GET_CURRENT_USER, REMOVE_FROM_CART, REMOVE_FROM_FAVOURITES, REMOVE_ONE_ITEM_FROM_CART,
    SEARCH_PRODUCT
} from "../store/reducers/productsActions";
import {LOG_OUT, SET_AUTH, SET_USER} from "../store/reducers/userActions";

export interface IUser {
    id: number | null,
    username: string,
    location: string,
    email: string
}

export interface IProductShort {
    id: number | undefined,
    name: string,
    amount: string,
    image: string,
    price: number
}

export interface IProductLink extends IProductShort {
    category: string,
}

export interface IProduct {
    id: number
    name: string,
    amount: string,
    details: string,
    nutritious: {
        proteins: string,
        fats: string,
        carbohydrates: string,
        calorieContent: string
    },
    image: string,
    category: string,
    price: number
}

export interface ICartProduct extends IProductShort {
    quantity: number
}

export interface CartState {
    items: ICartProduct[];
    total: number;
}

//redux
//productsState
export interface ProductsState {
    products: IProduct[],
    currentUser: IUser,
    searchTerm: string,
    cart: CartState,
    favorites: IProductLink[]
}

interface IAddProductsAction {
    type: typeof ADD_PRODUCTS;
    payload: IProduct[];
}

interface IGetCurrentUserAction {
    type: typeof GET_CURRENT_USER;
    payload: IUser;
}

interface ISearchAction {
    type: typeof SEARCH_PRODUCT;
    payload: string;
}

interface IAddToCart {
    type: typeof ADD_TO_CART;
    payload: ICartProduct;
}

interface IRemoveFromCart {
    type: typeof REMOVE_FROM_CART;
    payload: {
        id: number,
        price: number,
        quantity: number
    };
}

interface IClearCart {
    type: typeof CLEAR_CART;
}

interface IRemoveOneItemFromCart {
    type: typeof REMOVE_ONE_ITEM_FROM_CART;
    payload: {
        id: number,
        price: number,
        quantity: number
    };
}

interface IAddToFavourites {
    type: typeof ADD_TO_FAVOURITES;
    payload: IProductLink;
}

interface IRemoveFromFavourites {
    type: typeof REMOVE_FROM_FAVOURITES;
    payload: number;
}

export type ProductsActionTypes =
    IAddProductsAction
    | IGetCurrentUserAction
    | ISearchAction
    | IAddToCart
    | IRemoveFromCart
    | IRemoveOneItemFromCart
    | IAddToFavourites
    | IRemoveFromFavourites
    | IClearCart

//userState
export interface UserState {
    isAuth: boolean;
    user: IUser;
}

interface ISetAUTH {
    type: typeof SET_AUTH;
}

interface ISetUser {
    type: typeof SET_USER;
    payload: IUser

}

interface ILogOut {
    type: typeof LOG_OUT;
}

export type userActionTypes =
    ISetAUTH
    | ISetUser
    | ILogOut


