import React, {useEffect} from "react";
import GlobalStyle from "./styles/global";
import {useDispatch} from "react-redux";
import data from './data/data.json'
import {addProducts, getCurrentUser} from "./store/reducers/productsActions";
import Routes from "./Routes";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addProducts(data.products))
        dispatch(getCurrentUser(data.user))
    }, [])

    return (
        <div>
            <GlobalStyle/>
            <Routes/>
        </div>
    )
}

export default App


