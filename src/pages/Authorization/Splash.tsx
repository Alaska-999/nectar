import React, {FC} from 'react';
import styled from "styled-components";
import logo from '/assets/icons/logo.png'

const Splash: FC = () => {
    return (
        <Wrapper>
            <SplashInfo>
                <Logo src={logo} alt='logo'/>
                <Title>
                    <AppName>nectar</AppName>
                    online groceries
                </Title>
            </SplashInfo>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 10px 24px;
  background-color: var(--green);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fade-out 2s ease forwards 5s;
  @keyframes fade-out {
    0% {
      opacity: 1;
    } 
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;


const SplashInfo = styled.div`
  margin: 0 auto;
  color: var(--white);
  display: flex;
  align-items: center;
`

const Logo = styled.img`
    margin-right: 20px;
`

const Title = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 5.5px;
  font-weight: 400;
`

const AppName = styled.div`
font-size: 60px;
  line-height: 60px;
  font-weight: 500;
  letter-spacing: 3px;
`

export default Splash;