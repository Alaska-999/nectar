import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    productsReducer,
    userReducer
})

export type RootState = ReturnType<typeof rootReducer>