import React, {FC} from 'react';
import {Container} from "../../components/UI/Container";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import bg from '/assets/background_pic/login-bg.jpg'
import {ButtonLink} from "./Onbording";

const Auth: FC = () => {
    return (
        <Container>
            <Background/>
            <Content>
                <Caption>Купуйте продукти разом з nectar</Caption>
                <ButtonLink to='/signin'>
                    <Button>Створити профіль</Button>
                </ButtonLink>
                <ButtonLink to='/login'>
                    <Button>Увійти</Button>
                </ButtonLink>
            </Content>
        </Container>
    );
};


export const Background = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 375px;
  width: 413px;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 340px auto 0;
`

const Caption = styled.h3`
  max-width: 222px;
  text-align: center;
  margin-bottom: 30px;
`


export default Auth;