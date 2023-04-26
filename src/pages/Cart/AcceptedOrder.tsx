import React from 'react';
import {Container} from "../../components/UI/Container";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import success from '/assets/images/success.png'
import {Background} from "../Authorization/LogIn";
import {Link} from "react-router-dom";

const AcceptedOrder = () => {
    return (
        <Wrapper>
            <Container>

                <Background/>
                <Info>
                    <Image src={success}/>
                    <Heading>Ваше замовлення прийняте!</Heading>
                    <Text>Ваші продукти вже на шляху до Вас</Text>
                    <ButtonWrapper to='/'>
                        <Button>До головного меню</Button>
                    </ButtonWrapper>
                </Info>
            </Container>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: #fff;
`
const Image = styled.img`
  z-index: 100;
`

const Info = styled.div`
  margin-top: 160px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Heading = styled.h3`
  margin-top: 70px;
`

const Text = styled.div`
  margin: 20px 0 100px;
`
const ButtonWrapper = styled(Link)`
 width: 100%;
`


export default AcceptedOrder;