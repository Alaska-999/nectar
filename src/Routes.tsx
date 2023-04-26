import React from 'react';

import Home from "./pages/Home";
import Explore from "./pages/Explore/Explore";
import Cart from "./pages/Cart/Cart";
import Favourites from "./pages/Favourites/Favourites";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Account from "./pages/Account";
import {IProduct} from "./types/types";
import {useTypedSelector} from "./hooks/useTypedSelector";
import SingleProduct from "./pages/Explore/SingleProduct";
import CategoryProducts from "./pages/Explore/CategoryProducts";
import Onbording from "./pages/Authorization/Onbording";
import Auth from "./pages/Authorization/Auth";
import SignIn from "./pages/Authorization/SignIn";
import LogIn from "./pages/Authorization/LogIn";

interface IRoute {
    path: string;
    element: JSX.Element;
}

const RoutesComp = () => {
    const isAuth = useTypedSelector(state => state.userReducer.isAuth)

    const productsList: IProduct[] = useTypedSelector(state => state.productsReducer.products)
    const productElementsRoutes = productsList.map(p => ({
            path: `/explore/:${p.category}/${p.id}`,
            element: <SingleProduct {...p}/>
        }
    ))

    const routes = [
        {
            path: '/',
            element: <Onbording/>,
        },
        {
            path: '/auth',
            element: <Auth/>,
        },
        {
            path: '/login',
            element: <LogIn/>,
        },
        {
            path: '/signin',
            element: <SignIn/>,
        },
    ]

    const routesWithNav = [
        {
            path: '/',
            element: <Home/>,

        },
        {
            path: '/explore',
            element: <Explore/>,

        },
        {
            path: '/cart',
            element: <Cart/>,

        },
        {
            path: '/favourites',
            element: <Favourites/>,

        },
        {
            path: '/account',
            element: <Account/>,

        },
        {
            path: "/explore/:category",
            element: <CategoryProducts />

        },
    ]
    return (
        <div>
            <Routes>
                  {

                      isAuth?
                 routesWithNav.map((route: IRoute) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <>
                                    {route.element}
                                    <Navigation />
                                </>
                            }
                        />
                    ))
                    :
                 routes.map((route: IRoute) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <>
                                    {route.element}
                                </>
                            }
                        />
                    ))
                }
                {productElementsRoutes.map((route) =>
                    <Route path={route.path} key={route.path} element={
                        <>
                            {route.element}
                        </>
                    }/>
                )}
            </Routes>
        </div>
    );
};

export default RoutesComp;