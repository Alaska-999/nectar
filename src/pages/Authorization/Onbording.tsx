import React, {FC} from 'react';
import {Container} from "../../components/UI/Container";
import Button from "../../components/UI/Button";
import styled from "styled-components";
import bg from '/assets/background_pic/onboarding-bg.jpg'
import logo from '/assets/icons/logo.png'
import {Link} from "react-router-dom";

const Onbording: FC = () => {
    return (
        <Background>
            <Container>
                <Content>
                    <Logo src={logo} alt='logo'/>
                    <Heading>Ласкаво просимо до нашого магазину</Heading>
                    <Info>Забирайте продукти всього за годину</Info>
                    <ButtonLink to='/auth'>
                        <Button>Розпочати</Button>
                    </ButtonLink>

                </Content>
            </Container>
        </Background>
    );
};


const Background = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`
const Content = styled.div`
  height: 40%;
  max-width: 350px;
  margin-bottom: 60px;
  color: var(--white);
  text-align: center;
`
const Logo = styled.img`
  margin-bottom: 20px;
`
const Heading = styled.div`
  font-size: 48px;
  line-height: 58px;
  color: var(--white);
  max-width: 300px;
  margin: 0 auto;

`
export const ButtonLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  margin-bottom: 20px;
`
const Info = styled.div`
  margin: 20px 0;
  font-weight: 400;
  color: var(--white);
`


export default Onbording;