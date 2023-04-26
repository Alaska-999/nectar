import React, {FC} from 'react';
import {ICartProduct} from "../../types/types";
import Counter from "../../components/Counter";
import close from '/public/assets/icons/close.svg'
import styled from "styled-components";
import {Line} from "../Explore/SingleProduct";
import {useDispatch} from "react-redux";
import {
    addToCart,

    removeFromCart,
    removeOneItemFromCart
} from "../../store/reducers/productsActions";


const CartProduct: FC<ICartProduct> = ({
                                           id,
                                           price,
                                           image,
                                           amount,
                                           name,
                                           quantity
                                       }) => {
    const dispatch = useDispatch()

    const deleteProductHandler = () => {
        dispatch(removeFromCart(id, price, quantity))
    }

    const increment = () => {
        dispatch(addToCart({
            id,
            price,
            image,
            amount,
            name,
            quantity: 1
        }))
    }
    const decrement = () => {
        dispatch(removeOneItemFromCart(id, price, quantity))
    }

    return (
        <div>
            <Box>
                <Image src={image}/>
                <Info>
                    <Name>{name}</Name>
                    <Amount>{amount}</Amount>
                    <CounterWrapper>
                        <Counter count={quantity} decrement={decrement} increment={increment}/>
                    </CounterWrapper>
                </Info>
                <Col>
                    <Delete onClick={deleteProductHandler}/>
                    <Price>₴{price}</Price>
                </Col>
            </Box>
            <Line/>
        </div>
    );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  height: 100px;
`
const Image = styled.img`
  height: 75px;
  max-width: 85px;
  object-fit: contain;
  margin: auto 0;
`
const Name = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`
const Amount = styled.div`
  font-size: 16px;
  color: var(--grey);

`
const CounterWrapper = styled.div`
  position: relative;
  bottom: 15px;
  right: 20px;
`
const Info = styled.div`

`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Delete = styled.button`
  border: none;
  background-color: transparent;

  ::after {
    content: url(${close});
  }
`
const Price = styled.div`
  font-weight: 600;
`


export default CartProduct;