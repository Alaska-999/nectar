import React, {useState} from 'react';
import {Container} from '../../components/UI/Container';
import {Line} from "../Explore/SingleProduct";
import styled from "styled-components";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CartProduct from "./CartProduct";
import Button from "../../components/UI/Button";
import {Heading} from "../../styles/global";
import ModalCheckout from "../../components/ModalCheckout";

const Cart = () => {

    const cart = useTypedSelector(state => state.productsReducer.cart.items)
    const total = useTypedSelector(state => state.productsReducer.cart.total)
    const [deliveryModal, setDeliveryModal] = useState<boolean>(false)

    const modalHandler = () => {
        setDeliveryModal(true)
    }

    return (
        <Wrapper>
            <Container>
                <Heading>Кошик</Heading>
                <Line/>
                {cart.map(p => <CartProduct
                    key={p.id}
                    id={p.id}
                    price={p.price}
                    image={p.image}
                    amount={p.amount}
                    name={p.name}
                    quantity={p.quantity}
                />)}
                <Checkout>
                    <Button onClick={modalHandler}>Оформити замовлення <Total>₴{total}</Total></Button>
                </Checkout>
            </Container>
            {deliveryModal ?
                <ModalCheckout setDeliveryModal={setDeliveryModal}/>
                : ''
            }
        </Wrapper>
    );
}


const Wrapper = styled.div`
  margin-bottom: 150px;
`
const Checkout = styled.div`
  position: fixed;
  bottom: 100px;
  width: 90vw;
`

const Total = styled.div`
  display: inline-block;
  font-size: 14px;
  background-color: #489E67;
  padding: 2px 5px;
  border-radius: 4px;
`

export default Cart;