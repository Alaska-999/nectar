import React, {FC} from 'react';
import {Container} from "../components/UI/Container";
import styled from "styled-components";
import logo from '/assets/icons/color-logo.png'
import {IProduct} from "../types/types";
import {useTypedSelector} from "../hooks/useTypedSelector";
import location from '/assets/icons/location.svg'
import Search from "../components/UI/Search";
import banner from '/assets/images/banner.jpg'
import {useDispatch} from "react-redux";
import {searchProduct} from "../store/reducers/productsActions";
import ProductsList from "../components/ProductsList";


const Home: FC = () => {

    const dispatch = useDispatch();
    const searchTerm = useTypedSelector(state => state.productsReducer.searchTerm);
    const userLocation: string = useTypedSelector(state => state.userReducer.user.location)

    const productsList: IProduct[] = useTypedSelector(
        (state) => state.productsReducer.products
    );

    const filteredProducts = productsList.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchProduct(e.target.value));
    };

    return (
        <Container>
            <Header>
                <Logo src={logo} alt='logo'/>
                <Location>
                    {userLocation}
                </Location>
                <Search value={searchTerm} onChange={handleInputChange} placeholder='Пошук в магазині'/>
                <Banner src={banner}/>
                <ProductsList products={filteredProducts}/>
            </Header>
        </Container>
    );
};


const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.img`
  width: 27px;
  height: 31px;
`

const Location = styled.div`
  margin: 13px auto 20px;
  font-size: 20px;

  ::before {
    position: relative;
    right: 8px;
    top: 3px;
    content: url(${location});

  }
`

const Banner = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 380px;
`


export default Home;