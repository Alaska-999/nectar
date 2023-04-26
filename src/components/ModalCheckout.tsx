import React, {FC, useState} from 'react';
import {Down, Line} from "../pages/Explore/SingleProduct";
import styled from "styled-components";
import {Container} from './UI/Container';
import Button from './UI/Button';
import close from "/assets/icons/close.svg";
import {useTypedSelector} from "../hooks/useTypedSelector";
import AcceptedOrder from "../pages/Cart/AcceptedOrder";
import {useDispatch} from "react-redux";
import {clearCart} from "../store/reducers/productsActions";

interface IModal {
    setDeliveryModal: any
}

const ModalCheckout: FC<IModal> = ({setDeliveryModal}) => {

    const total = useTypedSelector(state => state.productsReducer.cart.total)
    const dispatch = useDispatch()
    const [isAddressVisible, setAddressVisible] = useState<boolean>(false)
    const [isPaymentVisible, setPaymentVisible] = useState<boolean>(false)
    const [payment, setPayment] = useState<string>('Card')
    const [isAccepted, setAccepted] = useState<boolean>(false)

    const addressHandler = () => {
        setAddressVisible(!isAddressVisible)
    }

    const paymentHandler = () => {
        setPaymentVisible(!isPaymentVisible)
    }

    const acceptDeliveryHandler = () => {
        setAccepted(true);
        dispatch(clearCart())
    }

    return (
        <ModalWrapper>
            <Modal>
                <Container>
                    <Header>
                        <Heading>Інфо про доставку</Heading>
                        <Close  onClick={() => setDeliveryModal(false)}/>
                    </Header>
                    <Line/>
                    <Info>
                        <InfoLine>
                            <Caption>Адреса</Caption>
                            <Down onClick={addressHandler}/>
                        </InfoLine>
                        {isAddressVisible ?
                            <Address placeholder='Уведіть адресу доставки'/>
                            : ''
                        }
                    </Info>
                    <Line/>
                    <Info>
                        <InfoLine>
                            <Caption>Спосіб оплати</Caption>
                            <PaymentMethod>{payment}</PaymentMethod>
                            <Down onClick={paymentHandler}/>
                        </InfoLine>
                        {isPaymentVisible ?
                            <Payment>
                                <PaymentButton onClick={() => setPayment('Card')}>Card</PaymentButton>
                                <PaymentButton onClick={() => setPayment('Cash')}>Cash</PaymentButton>
                            </Payment>
                            : ''
                        }
                    </Info>
                    <Line/>
                    <Info>
                        <InfoLine>
                            <Caption>Загальна сума</Caption>
                            <Total>₴{total}</Total>
                        </InfoLine>

                    </Info>
                    <Line/>
                    <ButtonWrapper>
                        <Button onClick={acceptDeliveryHandler}>Підтвердити замовлення</Button>
                    </ButtonWrapper>
                </Container>
            </Modal>
            {isAccepted ? <AcceptedOrder/> : ''}
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div`
  //position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
`
const Modal = styled.div`
  background-color: #fff;
  position: relative;
  top: 200px;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
const Heading = styled.h3`

`
const Close = styled.button`
  border: none;
  background-color: transparent;

  ::before {
    content: url(${close});
  }
`
const Info = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
`
const Caption = styled.div`
  color: #7C7C7C;
  font-family: 'Roboto-Medium', sans-serif;
`
const PaymentMethod = styled.div`
  position: absolute;
  right: 30px;
  font-family: 'Roboto-Medium', sans-serif;
  color: var(--green);
`

const Payment = styled.div`
  margin-top: 20px;

`

const PaymentButton = styled.button`
  border: 2px solid var(--green);
  border-radius: 6px;
  padding: 5px;
  color: var(--green);
  background: transparent;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 20px;
  margin-left: 20px;
`
const Address = styled.input`
  margin-top: 20px;
  width: 100%;
  border: none;
  background-color: #F2F3F2;
  padding: 12px 10px;
  border-radius: 15px;
  font-size: 16px;
  font-family: 'Roboto-Medium', sans-serif;
`

const Total = styled.div`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 20px;
  color: var(--green);
`
const ButtonWrapper = styled.div`
  margin-top: 25px;
`


export default ModalCheckout;