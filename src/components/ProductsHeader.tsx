import React, {FC, useState} from 'react';
import Search from "./UI/Search";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import back from '/assets/icons/back_arrow.svg'
import search from "/assets/icons/search.svg";
import close from "/assets/icons/close.svg";
import {useDispatch} from "react-redux";
import {searchProduct} from "../store/reducers/productsActions";


const ProductsHeader:FC<{heading: string}> = ({heading}) => {
    const [searchIsActive, searchSetActive] = useState<boolean>(false)
    const searchActiveHandler = () => {
        searchSetActive(!searchIsActive)
    }

    const dispatch = useDispatch();
    const searchProductHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchProduct(e.target.value));
    };

    return (
        <div>
            <Header>
                <Back to='/explore'/>
                <Heading>{heading}</Heading>
                {!searchIsActive ? <SearchBtn onClick={searchActiveHandler}/> :
                    <CloseBtn onClick={searchActiveHandler}/>}
            </Header>
            {searchIsActive ? <Search placeholder='Пошук продукту' onChange={searchProductHandler}/> : ''}
        </div>
    );
};

const Header = styled.h3`
  text-align: right;
  display: flex;
  justify-content: space-between;
`
const Heading = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
`

export const Back = styled(NavLink)`
  ::before {
    content: url(${back});
  }
`

const SearchBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;

  ::before {
    content: url(${search});
  }
`;
const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  background: transparent;
  ::before {
    content: url(${close});
  }
`;


export default ProductsHeader;