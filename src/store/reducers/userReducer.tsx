import {userActionTypes, UserState} from "../../types/types";
import {LOG_OUT, SET_AUTH, SET_USER} from "./userActions";

const initialState: UserState = {
    isAuth: false,
    user: {
        id: null,
        username: '',
        location: '',
        phone: ''
    }
}

export const userReducer = (state = initialState, action: userActionTypes) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: true
            }
            case SET_USER:
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    username: action.payload.username,
                    location: action.payload.location,
                    phone: action.payload.phone
                }
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false,
                user: {
                    id: null,
                    username: '',
                    location: '',
                    phone: ''
                }
            }

        default:
            return state
    }
}