export const SET_AUTH = 'SET_AUTH';
export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';

export const setAuth = () => ({
    type: SET_AUTH
})

export const logOut = () => ({
    type: LOG_OUT
})

export const setUser = ( id: number | null,
                         username: string,
                         location: string,
                         phone: string
                         ) => ({
    type: SET_USER,
    payload: {id, username, location, phone}
})
