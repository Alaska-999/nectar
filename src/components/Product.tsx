import React, {FC, useState} from 'react';
import styled from "styled-components";
import {IProductLink} from "../types/types";
import plus from '/assets/icons/plus.svg'
import {addToCart} from "../store/reducers/productsActions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import AddedPopup from "./UI/AddedPopup";

const Product: FC<IProductLink> = ({
                                   name,
                                   amount,
                                   category,
                                   image,
                                   id,
                                   price
                               }) => {

    const [isPopup, setPopup] = useState(false)

    const dispatch = useDispatch()
    const addToCartHandler = () => {
        dispatch(addToCart({
            id,
            name,
            amount,
            image,
            price,
            quantity: 1
        }))
        setPopup(true)
        setTimeout(() => setPopup(false), 1000)
    }

    return (
        <ProductItem>
            <Box to={`/explore/:${category}/${id}`}>
                <Image src={image}/>
                <Name>{name}</Name>
                <Amount>{amount}</Amount>
                <Bottom>
                    <Price>₴{price}</Price>
                </Bottom>
            </Box>
            <Add onClick={addToCartHandler}/>
            {isPopup ? <AddedPopup/> : ''}

        </ProductItem>
    );
};

const ProductItem = styled.div`
  padding: 20px 15px 15px;
  border: 1px solid #E2E2E2;
  border-radius: 12px;
  position: relative;
  width: 44vw;
  height: 280px;
`

const Box = styled(Link)`
  text-decoration: none;
`

const Image = styled.img`
  height: 110px;
  max-width: 140px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`
const Name = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-top: 25px;
  color: var(--black);
`
const Amount = styled.div`
  margin-top: 5px;
  font-size: 16px;
  color: var(--grey);
  margin-bottom: 20px;
  text-decoration: none;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Price = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: var(--black);
`
const Add = styled.div`
  color: var(--white);
  background-color: var(--green);
  padding: 14px;
  border-radius: 17px;
  border: none;
  outline: none;
  width: 45px;
  height: 45px;
  position: absolute;
  bottom: 10px;
  right: 15px;

  ::before {
    content: url(${plus});
  }
`

export default Product;